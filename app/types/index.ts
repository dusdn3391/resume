export interface CareerItem {
  period: string
  company: string
  role: string
  desc: string
  tags: string[]
  type: 'work' | 'edu'
}

export interface Project {
  id: string
  num: string
  name: string
  emoji: string
  desc: string
  tech: string[]
  live: string
  github: string
  highlight: string
}
