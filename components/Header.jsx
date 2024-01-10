'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import CartIcon from './CartIcon'
import { useSession } from 'next-auth/react'

const Header = () => {
    const { data: session, status } = useSession()
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 60);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);


    return (
        <header className={`w-full text-white bg-stone-900 transition-all fixed top-0 h-[60px] z-50
            ${!visible && 'top-[-60px]'}`}>
            <nav className='flex items-center justify-between w-full h-full px-4 py-2'>
                <Link href={"/"} className='hidden w-1/4 sm:inline-block'>logo</Link>
                <Link href={"/"} className='w-1/2 text-xl font-Lemon sm:text-center sm:text-3xl'>Electro Place</Link>
                <ul className='flex items-center justify-end w-1/4 gap-4'>
                    <li>   {session?.user ? (
                            <Link href={"/profile"}>profile</Link>
                        ) : (
                            <Link href={"/register"}>login</Link>
                        )}</li>
                    <li>
                        {session?.user.role === "admin" && (
                            <Link href={"/admin"}>admin</Link>
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