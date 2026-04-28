import './globals.css'
import { Manrope, Sora } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata = {
  metadataBase: new URL('https://abdulmoizdev.me'),
  title: {
    default: 'Abdul Moiz | MERN Stack Developer',
    template: '%s | Abdul Moiz',
  },
  description: 'Abdul Moiz is a MERN stack developer building premium, scalable web products with modern UI, Next.js, Node.js, and MongoDB.',
  keywords: [
    'Abdul Moiz',
    'Abdul Moiz developer',
    'MERN stack developer',
    'Next.js developer',
    'React developer',
    'Node.js developer',
    'MongoDB developer',
    'portfolio',
    'web developer Pakistan',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Abdul Moiz' }],
  creator: 'Abdul Moiz',
  publisher: 'Abdul Moiz',
  icons: {
    icon: '/images/myLogo.png',
    shortcut: '/images/myLogo.png',
    apple: '/images/myLogo.png',
  },
  openGraph: {
    title: 'Abdul Moiz | MERN Stack Developer',
    description: 'Premium portfolio of Abdul Moiz, a MERN stack developer building scalable web products.',
    url: 'https://abdulmoizdev.me',
    siteName: 'Abdul Moiz Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Abdul Moiz portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Moiz | MERN Stack Developer',
    description: 'Premium portfolio of Abdul Moiz, a MERN stack developer building scalable web products.',
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="p:domain_verify" content="dh=157f065e65e1349ec323709ddd833d58117edb7c" />
      </head>
      <body className={`${manrope.variable} ${sora.variable} font-[var(--font-manrope)]`}>
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
