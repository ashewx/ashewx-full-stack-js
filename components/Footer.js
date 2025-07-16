import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/android-chrome-512x512.png" alt="AN Logo" className={styles.logo} />
      </footer>
    </>
  )
}
