import React from "react"
import styles from '../styles/hamButton.module.scss'

export default function HamButton({ clicked, handleClick }) {
  return (
    <div
      onClick={handleClick} 
      className={`${styles.navIcon} ${clicked ? `${styles.open} `: ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}