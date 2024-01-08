'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
import RippleButton from './RippleButton'
const SignOutButton = () => {
  return (
      <RippleButton
      buttonClasses="flex items-center justify-center w-24 gap-5 text-lg rounded-md bg-stone-900 p-2 text-white "
      text="Sign out"
      onClick={signOut}
      />
  )
}

export default SignOutButton