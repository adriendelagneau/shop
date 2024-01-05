import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import CartIcon from './CartIcon'

const Header = async () => {
    const session = await getServerSession(authOptions)


  return (
      <header className='w-full'>
          <nav className='flex items-center justify-between w-full p-4'>
              <Link href={"/"} className='w-1/3'>logo</Link>
              <Link href={"/"} className='w-1/3 text-5xl text-center font-grosa'>SneakerSphere</Link>
              <ul className='flex items-center justify-end w-1/3 gap-4'>
                  <li>
                      {session?.user ? (
                           <Link href={"/profile"}>profile</Link>
                      ): (
                          <Link href={"/register"}>login</Link>
                              
                      )}
                  </li>
                  <li>
                      <CartIcon />
                  </li>
              </ul>
          </nav>
    </header>
  )
}

export default Header