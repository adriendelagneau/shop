import Footer from "@/components/Footer";
import Header from "@/components/Header";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`



export default function RootLayout({ children }) {
  return (
    <div >
      <Header />
      {children}
      <Footer />
    </div>

  )
}
