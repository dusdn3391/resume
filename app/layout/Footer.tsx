'use client'

import styles from '../page.module.css'

export default function Footer() {
      return (
            <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerName}>최연우</span>
          <span className={styles.footerSep}>·</span>
          <span className={styles.footerCopy}>© 2024</span>
          <span className={styles.footerSep}>·</span>
          <span className={styles.footerMade}>Made with ☀️ &amp; Next.js</span>
        </div>
      </footer>
      )
}
