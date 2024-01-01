import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/providers/AuthProvider'
import SmoothScrolling from '@/components/providers/LennisProvider'


import localFont from 'next/font/local';

const grosa = localFont({

  src: [
    {
      path: '../public/font/BodoniFLF-Roman.ttf',
    },
  ],
  variable: '--font-grosa',
});
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body  className={`${inter.variable} ${grosa.variable}`}>
        <AuthProvider>
        <SmoothScrolling>
            {children}
            </SmoothScrolling>
      </AuthProvider>
      </body>
    </html>
  )
}
