import type { CSSProperties } from 'react'
import Link from 'next/link'
import styles from '../page.module.css'
import { PROJECTS } from '../data/projects'
import PortfolioPromo from './PortfolioPromo'

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.secLabel}>
        <span className={styles.secNum}>03</span>
        <span className={styles.secTitle}>Projects</span>
        <div className={styles.secLine} />
      </div>

      <div className={styles.projGrid}>
        {PROJECTS.map(p => (
          <div
            key={p.id}
            className={styles.projCard}
            style={{ '--card-hl': p.highlight } as CSSProperties}
          >
            <div className={styles.projHeader}>
              <span className={styles.projEmoji}>{p.emoji}</span>
              <span className={styles.projNum}>{p.num}</span>
            </div>
            <h3 className={styles.projName}>{p.name}</h3>
            <p className={styles.projDesc}>{p.desc}</p>
            <div className={styles.projTech}>
              {p.tech.map(t => (
                <span key={t} className={styles.projChip}>{t}</span>
              ))}
            </div>
            <div className={styles.projLinks}>
              <Link href={`/projects/${p.id}`} className={styles.projLink}>
                자세히 보기 →
              </Link>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className={styles.projLink}>
                  ↗ GitHub
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className={styles.projLink}>
                  ↗ Live Demo
                </a>
              )}
            </div>
            <div className={styles.projBg} />
          </div>
        ))}
      </div>

      <PortfolioPromo />
    </section>
  )
}
