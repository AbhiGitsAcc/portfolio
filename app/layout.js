import './globals.css'
import { Roboto_Flex } from 'next/font/google'

const inter = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhishekh Ojha',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
