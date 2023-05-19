import Link from 'next/link';
import header from '../sass/_header.module.scss';

export default function Header() {
  return (
    <header className={header.header}>
      <Link href='/'>LOGO</Link>
    </header>
  )
}