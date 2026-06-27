import styles from '../page.module.css'
import { SKILLS_FE, SKILLS_BE, SKILLS_ETC ,SKILLS_DB,SKILLS_OTHER} from '../data/skills'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.secLabel}>
        <span className={styles.secNum}>01</span>
        <span className={styles.secTitle}>About Me</span>
        <div className={styles.secLine} />
      </div>

      <div className={styles.aboutWrap}>
        <div className={styles.aboutIntro}>
          <p className={styles.aboutEyebrow}>Who I am</p>
          <h2 className={styles.aboutHeadline}>
            코드는 <span className={styles.aboutAccent}>도구</span>,<br />
            진짜 목표는<br />
            <span className={styles.aboutMuted}>좋은 서비스.</span>
          </h2>

          <p className={styles.aboutText}>
            2023년 독학으로 시작해, 부트캠프를 거쳐 회사에서
            풀스택 개발자로 일을 하였습니다. 아직 배울 게 많다는 걸 알고 있기 때문에,
            많은 것을 배우고 성정해 나아가는 개발자입니다.
          </p>
          <p className={styles.aboutText}>
            프론트엔드 UI/UX부터 백엔드 API 설계, DB 모델링까지 혼자
            한 사이클을 돌릴 수 있는 개발자가 되고 싶습니다.
          </p>
          <div className={styles.aboutSocial}>
            <a href="https://github.com/dusdn3391" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.skillsWrap}>
          <div className={styles.skillCol}>
            <h4 className={styles.skillColTitle}>
              <span className={styles.skillDot} style={{ background: 'var(--accent2)' }} />
              Frontend
            </h4>
            <ul className={styles.skillList}>
              {SKILLS_FE.map(s => <li key={s} className={styles.skillChip}>{s}</li>)}
            </ul>
          </div>
          <div className={styles.skillCol}>
            <h4 className={styles.skillColTitle}>
              <span className={styles.skillDot} style={{ background: 'var(--accent3)' }} />
              Backend
            </h4>
            <ul className={styles.skillList}>
              {SKILLS_BE.map(s => <li key={s} className={styles.skillChip}>{s}</li>)}
            </ul>
          </div>
          <div className={styles.skillCol}>
            <h4 className={styles.skillColTitle}>
              <span className={styles.skillDot} style={{ background: 'var(--highlight)' }} />
              DevOps & Tools
            </h4>
            <ul className={styles.skillList}>
              {SKILLS_ETC.map(s => <li key={s} className={styles.skillChip}>{s}</li>)}
            </ul>
          </div>
          <div className={styles.skillCol}>
  <h4 className={styles.skillColTitle}>
    <span
      className={styles.skillDot}
      style={{ background: '#00C853' }}
    />
    Database
  </h4>
  <ul className={styles.skillList}>
    {SKILLS_DB.map(s => (
      <li key={s} className={styles.skillChip}>
        {s}
      </li>
    ))}
  </ul>
</div>

<div className={styles.skillCol}>
  <h4 className={styles.skillColTitle}>
    <span
      className={styles.skillDot}
      style={{ background: '#FF9800' }}
    />
    Languages & Desktop
  </h4>
  <ul className={styles.skillList}>
    {SKILLS_OTHER.map(s => (
      <li key={s} className={styles.skillChip}>
        {s}
      </li>
    ))}
  </ul>
</div>
        </div>
      </div>
    </section>
  )
}
