'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import RippleButton from './RippleButton'


const GoogleButton = () => {


  return (
      <RippleButton
        buttonClasses="flex items-center justify-center w-56 gap-5 text-lg rounded-md bg-stone-900 p-2 text-white w-full"
        text="Login with Google"
        icon={<FcGoogle className='w-8 h-8' />}
        onClick={ () =>  signIn("google", { callbackUrl: "/" })}
      />
  )
}

export default GoogleButton