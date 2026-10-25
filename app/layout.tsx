import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CLAP — Studio par BoxStudio',
  description: 'Outil de production vidéo B2B assisté par IA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
