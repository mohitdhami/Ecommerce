import './globals.css';
import '../dist/output.css';
import { Inter } from 'next/font/google';
import Header from './Header/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce App',
  description: 'Browser and Shop Online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}
      <Header/>
      </body>
    </html>
  )
}
