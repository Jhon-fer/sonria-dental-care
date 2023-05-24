'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamButton from './HamButton';

import styles from '../styles/header.module.scss';
import logo from '../../../public/images/logo.png';

export default function Header() {

  const [ clicked, setClicked ] = React.useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <header>
      {/* HEADER MOBILE */}
      <div className={styles.header}>
        <div className={styles.headerLogo}></div>
        <div className={styles.container}>
          <nav className={styles.headerNavbar}>
            <h2>sonria dental care</h2>
            <ul className={`${styles.headerNavbarLinks} ${clicked ? `${styles.active}` : ''}`}>
              <li className={`${styles.headerNavbarLinksItem} ${styles.link}`}><Link href='/' onClick={handleClick}>inicio</Link></li>
              <li className={`${styles.headerNavbarLinksItem} ${styles.link}`}><Link href='/nosotros' onClick={handleClick}>nosotros</Link></li>
              <li className={`${styles.headerNavbarLinksItem} ${styles.link}`}><Link href='/antes-y-despues' onClick={handleClick}>antes y después</Link></li>
              <li className={`${styles.headerNavbarLinksItem} ${styles.link}`}><Link href='/servicios' onClick={handleClick}>servicios</Link></li>
              <li className={`${styles.headerNavbarLinksItem} ${styles.link}`}><Link href='/blog' onClick={handleClick}>blog</Link></li>
              <li className={`${styles.headerNavbarLinksItem} ${styles.link}`}><Link href='/contactanos' onClick={handleClick}>contáctanos</Link></li>
            </ul>
            <div className={styles.burguer}>
              <HamButton clicked={clicked} handleClick={handleClick} />
            </div>
          </nav>
        </div>
      </div>

      {/* HEADER DESKTOP */}
      <div className={styles.headerDesktop}>
        <div className={styles.headerDesktopContainer}>
          <a href="/">
            <Image 
              src={logo}
              width={200}
              height={75}
              alt='logo'
            />
          </a>
          <nav className={styles.headerDesktopContainerMenu}>
            <ul className={styles.headerDesktopContainerMenuLinks}>
              <li className={styles.headerDesktopContainerMenuLinksItem}><Link href='/' onClick={handleClick}>inicio</Link></li>
              <li className={styles.headerDesktopContainerMenuLinksItem}><Link href='/nosotros' onClick={handleClick}>nosotros</Link></li>
              <li className={styles.headerDesktopContainerMenuLinksItem}><Link href='/antes-y-despues' onClick={handleClick}>antes y después</Link></li>
              <li className={styles.headerDesktopContainerMenuLinksItem}><Link href='/servicios' onClick={handleClick}>servicios</Link></li>
              <li className={styles.headerDesktopContainerMenuLinksItem}><Link href='/blog' onClick={handleClick}>blog</Link></li>
              <li className={styles.headerDesktopContainerMenuLinksContact}><Link href='/contactanos' onClick={handleClick}>contáctanos</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}