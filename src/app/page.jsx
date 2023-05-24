import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  )
}
