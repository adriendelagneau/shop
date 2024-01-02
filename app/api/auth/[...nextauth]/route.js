import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/db";



export const authOptions = {

    secret: process.env.NEXTAUTH_SECRET,
    providers: [

        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;
                const user = await signInWithCrendentials({ email, password })

                return user
            },
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/login',
        error: "/errors"
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.type === "oauth") {
                return await signInWithOAuth({ account, profile })
            }
            return true
        },
        async session({ session, user, token }) {
            session.user = token.user
            return session
        },
        async jwt({ token }) {
            const user = await getUserByEmail({ email: token.email })
            token.user = user
            return token
        },
    }
}

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };


const signInWithOAuth = async ({ account, profile }) => {

    await connectToDatabase()


    const user = await User.findOne({ email: profile.email })

    if (user) return true //sign in 

    const newUser = new User({
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        provider: account.provider
    })

    await newUser.save()

    return true
}

const getUserByEmail = async ({ email }) => {

    await connectToDatabase()

    const user = await User.findOne({ email }).select("-password")
    if (!user) throw new Error('Email does not exist')

    return { ...user._doc, _id: user._id.toString() }
}

const signInWithCrendentials = async ({ email, password }) => {
    await connectToDatabase()

    const user = await User.findOne({ email })
    if (!user) throw new Error("Email does not exist")

    const compare = await bcrypt.compare(password, user.password)
    if (!compare) throw new Error('Password does not match')

    return { ...user._doc, _id: user._id.toString() };
}