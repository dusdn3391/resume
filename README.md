# 최연우 포트폴리오 🚀

> Next.js 14 App Router + CSS Modules로 제작된 개인 포트폴리오

## 📁 프로젝트 구조

```
portfolio/
├── app/
│   ├── globals.css      # 전역 스타일 (CSS 변수, 애니메이션)
│   ├── layout.tsx       # 루트 레이아웃
│   ├── page.tsx         # 메인 페이지 (About / Career / Projects)
│   └── page.module.css  # 페이지 CSS Modules
├── public/              # 정적 파일
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎨 디자인 컨셉

- **테마**: Dark & Modern
- **폰트**: Syne (헤드라인) + DM Mono (코드/라벨)
- **컬러**: `#7c6ef7` (퍼플 액센트) + `#f7c86e` (골드)
- **그레인 오버레이 + 그리드 BG** 로 깊이감 표현

## 🛠 기술 스택

- **Next.js 14** — App Router
- **TypeScript**
- **CSS Modules** (no external UI library)

## 🚀 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## ✏️ 개인 정보 수정

`app/page.tsx` 파일에서:

- `CAREER` 배열 → 본인 경력으로 수정
- `PROJECTS` 배열 → 본인 프로젝트/URL로 수정
- `SKILLS` 배열 → 기술 스택 & 숙련도 수정
- 이름, 이메일, GitHub 링크 수정

## 📦 배포 (Vercel 권장)

```bash
npm run build
# Vercel CLI 또는 GitHub 연동으로 자동 배포
https://resume-three-lilac-95.vercel.app/
```

---

Made with 💜 by 최연우
