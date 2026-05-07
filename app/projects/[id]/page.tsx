import Link from 'next/link'
import { PROJECT_DETAILS, ProjectId } from '@/app/data/project-detail'
import styles from './project-detail.module.css'

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const project = PROJECT_DETAILS[params.id as ProjectId]

  if (!project) {
    return (
      <main className={styles.notFound}>
        <h1>프로젝트를 찾을 수 없습니다.</h1>
        <Link href="/" className={styles.backLink}>
          메인으로 돌아가기
        </Link>
      </main>
    )
  }

  return (
    <main className={styles.detailPage}>
      <Link href="/" className={styles.backLink}>
        ← 메인으로 돌아가기
      </Link>

      <section className={styles.hero}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.subtitle}>{project.subtitle}</p>

        <div className={styles.techList}>
          {project.tech.map((t) => (
            <span key={t} className={styles.techChip}>
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>프로젝트 개요</h2>
        <p className={styles.text}>{project.overview}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>담당 역할</h2>
        <p className={styles.text}>{project.role}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>문제점과 해결 방법</h2>

        <div className={styles.problemList}>
          {project.problems.map((item, index) => (
            <article key={index} className={styles.problemCard}>
              <span className={styles.problemNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className={styles.problemTitle}>{item.title}</h3>

              <div className={styles.problemBlock}>
                <h4>문제점</h4>
                <p>{item.problem}</p>
              </div>

              <div className={styles.problemBlock}>
                <h4>해결 방법</h4>
                <p>{item.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}