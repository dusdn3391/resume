'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import Header from './layout/Header'
import Footer from './layout/Footer'

const SKILLS_FE = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand']
const SKILLS_BE = ['Node.js', 'REST API']
const SKILLS_ETC = ['Git', 'Vercel', 'Figma']

const handleScroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const CAREER = [
  {
    period: '2023.06 — 2023.12',
    company: 'KOSA',
    role: '풀스택 개발자 양성과정 수료',
    desc: 'Vue, Java, Node.js를 중심으로 웹 개발 전반을 학습했습니다. 프론트엔드 화면 구현부터 백엔드 API 개발까지 경험하며 개발의 기본기를 다졌습니다.',
    tags: ['Vue', 'Java', 'Node.js', 'AI'],
    type: 'edu',
  },
  {
    period: '2024.06 — 2024.12',
    company: '맥스폼',
    role: 'Frontend Developer / 유지보수 개발',
    desc: 'Vue 기반 사용자·관리자·매니저 페이지 UI를 개발하고 유지보수했습니다. API 연동과 화면 개선 작업을 수행했으며, 필요에 따라 백엔드 유지보수 업무도 함께 담당했습니다.',
    tags: ['Vue', 'JavaScript', 'API', 'Maintenance'],
    type: 'work',
  },
  {
    period: '2026.02 — 현재',
    company: 'KOSTA',
    role: 'AI 활용 Node.js 개발자 과정',
    desc: 'AI를 활용한 개발 방식과 Node.js 기반 백엔드 개발을 학습하고 있습니다. 기존 Vue 실무 경험을 바탕으로 React, Next.js, Node.js 등 최신 웹 개발 역량을 확장하고 있습니다.',
    tags: ['AI', 'Node.js', 'React', 'Next.js'],
    type: 'edu',
  },
]

const PROJECTS = [
  {
    id: 'fortune-cafe',
    num: '01',
    name: '운세다방 (구 타로프렌즈)',
    emoji: '🔮',
    desc: '운세·타로·사주 전화 상담 플랫폼 유지보수 및 기능 개선 프로젝트.',
    tech: ['Vue', 'JavaScript', 'Node.js', 'REST API', 'MySQL'],
    live: 'https://fortunecafe.kr/',
    github: '',
    highlight: '#EEF1F6',  // ✅ accent2-bg 계열로 통일
  },
  {
    id: 'golf-reservation',
    num: '02',
    name: '스크린골프 예약 플랫폼',
    emoji: '⛳',
    desc: '스크린골프장 Room 예약 시스템 프론트엔드 개발 프로젝트.',
    tech: ['Vue', 'JavaScript', 'REST API', 'CSS'],
    live: '',
    github: 'https://github.com/dusdn3391/lezuro',
    highlight: '#fef3c7',
  },
  {
    id: 'ticketing',
    num: '03',
    name: '콘서트 티켓 예매 플랫폼',
    emoji: '🎫',
    desc: 'Next.js 기반 콘서트 티켓 예매 플랫폼 개인 프로젝트.',
    tech: ['Next.js', 'TypeScript', 'Zustand', 'PostgreSQL'],
    live: '',
    github: 'https://github.com/dusdn3391/concert-ticketing',
    highlight: '#d1fae5',
  },
{
  id: "the-bakers-atelier",
  num: "04",
  name: "베이킹 레시피 웹사이트",
  emoji: "🍰",
  desc: "유럽풍 베이지 & 초콜릿 테마로 제작한 제과·제빵 레시피 웹 프로젝트입니다. SVG 케이크와 촛불 애니메이션을 활용한 인트로 화면, AJAX 기반 Spoonacular API 레시피 연동, 파티클 및 연기 효과 등 감성적인 UI/UX를 구현했습니다.",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "AJAX",
    "Spoonacular API",
  ],
  live: "",
  highlight: "#f3e8d0",
  github: "https://github.com/dusdn3391/kosta311",
},
{
  id: "dementia-analysis",
  num: "05",
  name: "치매 환자 수 vs 요양시설 정원 분석",
  emoji: "📊",
  desc: "공공데이터를 활용하여 지역별 노인 인구, 추정 치매 환자 수, 요양시설 정원을 비교 분석한 데이터 프로젝트입니다. Pandas 기반 데이터 전처리 및 병합, Matplotlib·Folium 시각화를 통해 지역별 요양시설 수요-공급 불균형을 분석했습니다.",
  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Folium",
  ],
  live: "",
  highlight: "#dbeafe",
  github: "https://github.com/dusdn3391/Dementia",
},
]

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      {/* ── HERO ── */}
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
            <button className={styles.btnFilled} onClick={() => handleScroll('projects')}>
              프로젝트 보기
            </button>
            <button className={styles.btnOutline} onClick={() => handleScroll('career')}>
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
              {/* ✅ SVG fill → accent2 계열 */}
              <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
                <circle cx="40" cy="30" r="16" fill="#8396B4" />
                <ellipse cx="40" cy="64" rx="24" ry="14" fill="#8396B4" />
              </svg>
            </div>
            <div className={styles.avatarInfo}>
              <span className={styles.avatarName}>최연우</span>
              <span className={styles.avatarTitle}>Fullstack Developer</span>
              <div className={styles.avatarBadges}>
                {/* ✅ 배지 색상 → accent2/accent3/highlight 계열로 통일 */}
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

      {/* divider */}
      <div className={styles.divider}><span>• • •</span></div>

      {/* ── ABOUT ── */}
      <section id="about" className={styles.section}>
        <div className={styles.secLabel}>
          <span className={styles.secNum}>01</span>
          <span className={styles.secTitle}>About Me</span>
          <div className={styles.secLine} />
        </div>

        <div className={styles.aboutWrap}>
          <div className={styles.aboutIntro}>
            {/* ✅ aboutQuote → aboutEyebrow + aboutHeadline */}
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
              {/* ✅ skillDot 색상 → CSS 변수로 */}
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
          </div>
        </div>
      </section>

      {/* ── CAREER ── */}
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

      {/* ── PROJECTS ── */}
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
              style={{ '--card-hl': p.highlight } as React.CSSProperties}
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
      </section>

      <Footer />
    </div>
  )
}