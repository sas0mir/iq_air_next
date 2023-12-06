import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './globals.module.css'
import Provider from './lib/session_provider';
import Navigation from './lib/navigation';

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
      <Provider>
        <body className={styles.body_container}>
          <Navigation />
          {children}
        </body>
      </Provider>
    </html>
  )
}