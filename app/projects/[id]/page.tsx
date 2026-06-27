"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PROJECT_DETAILS, ProjectId } from "@/app/data/project-detail";
import styles from "./project-detail.module.css";

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [cur, setCur] = useState(0);
  const [ratios, setRatios] = useState<Record<number, number>>({});
  const total = images.length;
  const go = (n: number) => setCur((n + total) % total);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>, i: number) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setRatios((prev) => ({
        ...prev,
        [i]: img.naturalHeight / img.naturalWidth,
      }));
    }
  };

  // 현재 슬라이드의 padding-top 비율 (기본값 16:9)
  const currentRatio = ratios[cur] ?? 9 / 16;
  return (
    <div className={styles.carouselWrap}>
      <div
        className={styles.carousel}
        style={{ paddingBottom: `${currentRatio * 100}%` }}
      >
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${cur * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className={styles.slide}>
              <Image
                src={src}
                alt={`${title} 스크린샷 ${i + 1}`}
                fill
                className="object-contain"
                onLoad={(e) => handleLoad(e, i)}
              />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              onClick={() => go(cur - 1)}
              aria-label="이전"
              className={`${styles.carouselBtn} ${styles.btnPrev}`}
            >
              ←
            </button>
            <button
              onClick={() => go(cur + 1)}
              aria-label="다음"
              className={`${styles.carouselBtn} ${styles.btnNext}`}
            >
              →
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className={styles.dots}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              aria-label={`${i + 1}번째 이미지`}
              className={`${styles.dot} ${i === cur ? styles.dotActive : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = PROJECT_DETAILS[params.id as ProjectId];

  if (!project) {
    return (
      <main className={styles.notFound}>
        <p style={{ color: "var(--text-dim)", marginBottom: "1rem" }}>
          프로젝트를 찾을 수 없습니다.
        </p>
        <Link href="/" className={styles.backLink}>
          ← 메인으로 돌아가기
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      {/* 뒤로 가기 */}
      <Link href="/" className={styles.backLink}>
        ← 메인으로 돌아가기
      </Link>

      {/* 히어로 */}
      <p className={styles.eyebrow}>포트폴리오 · {project.year ?? "2024"}</p>
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.subtitle}>{project.subtitle}</p>
      <div className={styles.techRow}>
        {project.tech.map((t) => (
          <span key={t} className={styles.techBadge}>
            {t}
          </span>
        ))}
      </div>

      <div className={styles.divider} />
      {/* 아키텍처 */}
      {project.images && project.images.length > 0 && (
        <ImageCarousel images={project.images} title={project.title} />
      )}

      {/* 아키텍처 — 여기 추가 */}
      {project.architecture && (
        <div className={styles.archWrap}>
          <p className={styles.archLabel}>아키텍처</p>
          <div className={styles.archImgWrap}>
            <Image
              src={project.architecture}
              alt={`${project.title} 아키텍처`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <div className={styles.divider} />
      {/* 개요 + 역할 */}
      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <p className={styles.infoCardLabel}>프로젝트 개요</p>
          <p className={styles.infoCardText}>{project.overview}</p>
        </div>
        <div className={styles.infoCard}>
          <p className={styles.infoCardLabel}>담당 역할</p>
          <p className={styles.infoCardText}>{project.role}</p>
        </div>
      </div>

      {/* 문제 & 해결 */}
      <p className={styles.problemsLabel}>문제점과 해결 방법</p>
      <div className={styles.problemList}>
        {project.problems.map((item, index) => (
          <article key={index} className={styles.problemItem}>
            <div className={styles.problemHead}>
              <span className={styles.problemNum}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.problemTitle}>{item.title}</span>
            </div>
            <div className={styles.problemCols}>
              <div className={styles.problemCol}>
                <p
                  className={`${styles.problemColLabel} ${styles.labelProblem}`}
                >
                  문제점
                </p>
                <p className={styles.problemColText}>{item.problem}</p>
              </div>
              <div className={styles.problemCol}>
                <p
                  className={`${styles.problemColLabel} ${styles.labelSolution}`}
                >
                  해결 방법
                </p>
                <p className={styles.problemColText}>{item.solution}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
