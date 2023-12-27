'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import User from "@/lib/models/User"
import { redirect } from "next/navigation"
import bcrypt from "bcryptjs";
import { generateToken, verifyToken } from '@/utils/token' 
import sendEmail from "@/utils/sendEmail"

const BASE_URL= process.env.NEXTAUTH_URL

export const updateUser = async ({name,image}) => {
    const session = await getServerSession(authOptions)

    if (!session) throw new Error('unauthaurize')
    
    try {
        const user = await User.findByIdAndUpdate(session?.user?._id, {
            name, image
        }, {
            new: true
        }).select('-password')

        if(!user) throw new Error("no user found")
        
        return {msg: "user update seccessfully"}
    } catch (err) {
        redirect(`/errors?errror=${err.message}`)
    }
}

export const signUpWithCredential = async (data) => {
    
    try {
        const user = await User.findOne({ email: data.email })
        if (user) throw new Error('Email already exist')
        
        if (data.password) {
            const salt = await bcrypt.genSalt(10)
            data.password = await bcrypt.hash(data.password, salt);

            const token = generateToken({ user: data })
            
            await sendEmail({
                to: data.email,
                url: `${BASE_URL}/verify?token=${token}`,
                text: 'VERIFY EMAIL'
            })
        }
        
        return {msg: "verification mail has been send"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}

export const verifyWitnCredentials = async (token) => {
    try {
        const { user } = verifyToken(token)
     
        const userExist = await User.findOne({ email: user.email })
        
        if (userExist) return { msg: "verify success !" }
        
        const newUser = new User(user)
        
        await newUser.save()
        return {msg: "verify success"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}

export const ChangePasswordWitnCredentials = async (oldPass, newPass) => {
     
    try { 
        const session = await getServerSession(authOptions)
    
        if (!session) throw new Error('"unhauthaurized')
    
        if (session?.user?.provider !== 'credentials') {
           throw new Error(`this account is signed with ${session?.user?.provider} you can t use  this function`)
        }
    
        const user = await User.findById(session?.user?._id)
    
        if (!user) throw new Error('user does not exist')
    
        const compare = await bcrypt.compare(oldPass, user.password)
        
        if (!compare) throw new Error('old password does not match')
        
        const newPassword = await bcrypt.hash(newPass, 12)

        await User.findOneAndUpdate(user._id, {password: newPassword}, {new: true})
        
        return {msg: "change password success"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}

export const forgotPasswordWitnCredentials = async (email) => {
     
    try { 
       
        const user = await User.findOne({email})
        if (!user) throw new Error('email does not exist')
      
    
        if (user?.provider !== 'credentials') {
           throw new Error(`this account is signed with ${session?.user?.provider} you can t use  this function`)
        }
    
        const token = generateToken({ userId: user._id })
        
        await sendEmail({
            to: email,
            url: `${BASE_URL}/reset_password?token=${token}`,
            text: "Reset pssword"
        })
        
        return {msg: "change password success"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}

export const resetPasswordWitnCredentials = async (token, password) => {
     
    try { 
        const { userId } = verifyToken(token)
        
        const newPass = await bcrypt.hash(password, 12)

        await User.findByIdAndUpdate(userId, {password: newPass})
        
        return {msg: "change password success"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}
