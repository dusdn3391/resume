import styles from '../page.module.css'

export default function PortfolioPromo() {
  return (
    <div className={styles.portfolioBox}>
      <div className={styles.pbLeft}>
        <span className={styles.pbLabel}>🌐 포트폴리오 사이트</span>
        <h3 className={styles.pbTitle}>지금 보고 계신 이 사이트!</h3>
        <p className={styles.pbDesc}>
          Next.js 14 App Router + CSS Modules + TypeScript로 직접 설계·제작했습니다.
        </p>
      </div>
      <div className={styles.pbRight}>
        <div className={styles.pbUrl}>
          <span className={styles.pbUrlDomain}>https://resume-three-lilac-95.vercel.app</span>
        </div>
        <a
          href="https://resume-three-lilac-95.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className={styles.btnFilled}
        >
          방문하기 →
        </a>
      </div>
    </div>
  )
}
