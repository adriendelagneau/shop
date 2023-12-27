import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import CartIcon from './CartIcon'

const Header = async () => {
    const session = await getServerSession(authOptions)


  return (
      <header className='w-full'>
          <nav className='w-full flex justify-between items-center'>
              <div>logo</div>
              <div>le shop</div>
              <ul className='flex'>
                  <li>
                      {session?.user ? (
                          <div>profile</div>
                      ): (
                          <Link href={"/register"}>login</Link>
                              
                      )}
                  </li>
                  <li><CartIcon/></li>
              </ul>
          </nav>
    </header>
  )
}

export default Header