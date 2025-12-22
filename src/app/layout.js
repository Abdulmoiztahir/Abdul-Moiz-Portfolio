import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Moiz's Portfolio",
  description: 'Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="p:domain_verify" content="dh=157f065e65e1349ec323709ddd833d58117edb7c" />
        <title>Your Portfolio</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
