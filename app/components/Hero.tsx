'use client'

import styles from '../page.module.css'
import { scrollToSection } from '../hooks/useScrollTo'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroPill}>
          <span className={styles.pillDot} />
          <span>Open to opportunities</span>
        </div>

        <h1 className={styles.heroHeadline}>
          <span className={styles.headlineSub}>안녕하세요,</span>
          <span className={styles.headlineMain}>
            최연우
            <span className={styles.headlineUnderline} />
          </span>
          <span className={styles.headlineRole}>
            <span className={styles.roleTag}>Fullstack</span>
            Developer
            <span className={styles.blink}>|</span>
          </span>
        </h1>

        <p className={styles.heroDesc}>
          프론트엔드부터 백엔드까지, <strong>서비스 전체</strong>를 만들 수 있는
          풀스택 개발자입니다. 사용자 경험과 코드 품질 둘 다 놓치지 않으려 노력합니다.
        </p>

        <div className={styles.heroActions}>
          <button className={styles.btnFilled} onClick={() => scrollToSection('projects')}>
            프로젝트 보기
          </button>
          <button className={styles.btnOutline} onClick={() => scrollToSection('career')}>
            경력 보기
          </button>
        </div>

        <div className={styles.heroMeta}>
          <div className={styles.metaItem}>
            <span className={styles.metaVal}>1+</span>
            <span className={styles.metaKey}>Year Exp.</span>
          </div>
          <div className={styles.metaSep} />
          <div className={styles.metaItem}>
            <span className={styles.metaVal}>3+</span>
            <span className={styles.metaKey}>Projects</span>
          </div>
          <div className={styles.metaSep} />
          <div className={styles.metaItem}>
            <span className={styles.metaVal}>FE + BE</span>
            <span className={styles.metaKey}>Full-stack</span>
          </div>
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.avatarCard}>
          <div className={styles.avatarCircle}>
            <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
              <circle cx="40" cy="30" r="16" fill="#8396B4" />
              <ellipse cx="40" cy="64" rx="24" ry="14" fill="#8396B4" />
            </svg>
          </div>
          <div className={styles.avatarInfo}>
            <span className={styles.avatarName}>최연우</span>
            <span className={styles.avatarTitle}>Fullstack Developer</span>
            <div className={styles.avatarBadges}>
              <span className={styles.badge} style={{ background: '#EEF1F6', color: '#3D4F6B' }}>React</span>
              <span className={styles.badge} style={{ background: '#d1fae5', color: '#065f46' }}>Node.js</span>
              <span className={styles.badge} style={{ background: '#fef3c7', color: '#92400e' }}>Next.js</span>
            </div>
          </div>
        </div>

        <div className={styles.stickerA}><span>🖥 Frontend</span></div>
        <div className={styles.stickerB}><span>⚙️ Backend</span></div>
        <div className={styles.stickerC}><span>🚀 Deploy</span></div>

        <div className={styles.snippet}>
          <span className={styles.snippetLine}>
            <span className={styles.sk}>const</span>
            <span className={styles.sv}> stack</span>
            <span> = [</span>
            <span className={styles.ss}>"FE"</span>
            <span>, </span>
            <span className={styles.ss}>"BE"</span>
            <span>]</span>
          </span>
        </div>
      </div>
    </section>
  )
}
