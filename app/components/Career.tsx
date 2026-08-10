import styles from '../page.module.css'
import { CAREER } from '../data/career'

export default function Career() {
  return (
    <section id="career" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.secLabel}>
        <span className={styles.secNum}>02</span>
        <span className={styles.secTitle}>Career</span>
        <div className={styles.secLine} />
      </div>

      <div className={styles.timeline}>
        {CAREER.map((c, i) => (
          <div key={i} className={styles.tlItem}>
            <div className={styles.tlLeft}>
              <span className={styles.tlPeriod}>{c.period}</span>
              <span className={styles.tlType}>
                {c.type === 'work' ? '💼 재직' : '🎓 교육'}
              </span>
            </div>
            <div className={styles.tlDotWrap}>
              <div className={styles.tlDot} />
              {i < CAREER.length - 1 && <div className={styles.tlLine} />}
            </div>
            <div className={styles.tlRight}>
              <h3 className={styles.tlCompany}>{c.company}</h3>
              <p className={styles.tlRole}>{c.role}</p>
              <p className={styles.tlDesc}>{c.desc}</p>
              <div className={styles.tlTags}>
                {c.tags.map(t => <span key={t} className={styles.tlTag}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
