import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '최연우 · Fullstack Developer',
  description: '프론트부터 백까지, 서비스 전체를 만드는 풀스택 개발자 준주니어입니다.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
