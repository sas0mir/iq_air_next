import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './globals.module.css'
import UserProvider from './lib/session_provider';
import Navigation from './lib/navigation';
import Providers from './lib/g_context';

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'IQWeather',
  description: 'weather',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={styles.body_container}>
          <Providers>
            <Navigation />
            {children}
          </Providers>
      </body>
    </html>
  )
}