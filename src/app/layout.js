import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Mustafa's Portfolio",
  description: 'Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="p:domain_verify" content="dh=157f065e65e1349ec323709ddd833d58117edb7c" />
        <title>Your Portfolio</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
