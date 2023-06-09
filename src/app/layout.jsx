import './globals.css'
import styles from './styles/layout.module.scss'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Sonria Dental Care',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.html}>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
