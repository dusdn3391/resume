'use client'

import { useEffect, useState } from 'react'
import styles from '../page.module.css'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Career' },
  { id: 'projects', label: 'Projects' },
]

export default function Header() {
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      NAV.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return

        const { top, bottom } = el.getBoundingClientRect()
        if (top <= 130 && bottom >= 130) {
          setActive(id)
        }
      })
    }

    onScroll()

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navSolid : ''}`}>
      <button className={styles.navBrand} onClick={() => scrollTo('about')}>
        <span className={styles.brandDot} />
        <span className={styles.brandName}>최연우</span>
      </button>

      <ul className={styles.navList}>
        {NAV.map((n) => (
          <li key={n.id}>
            <button
              onClick={() => scrollTo(n.id)}
              className={`${styles.navBtn} ${
                active === n.id ? styles.navBtnActive : ''
              }`}
            >
              {n.label}
            </button>
          </li>
        ))}
      </ul>

      {/* <a href="mailto:junjunior@email.com" className={styles.navContact}>
        연락하기 →
      </a> */}
    </nav>
  )
}