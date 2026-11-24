export interface ProjectData {
  id: string
  title: string
  subtitle: string
  category: string
  year: string
  client: string
  liveUrl?: string
  githubUrl?: string
  description: string
  problemStatement: string
  solution: string
  technologies: string[]
  keyFeatures: string[]
  outcome: string
  metrics: { label: string; value: string }[]
  accentColor: 'orange' | 'cyan'
  mockupType: 'desktop' | 'dual'
}

export interface ServiceData {
  id: string
  number: string
  title: string
  shortDesc: string
  fullDesc: string
  features: string[]
  technologies: string[]
  iconName: string
  accentColor: 'orange' | 'cyan'
  targetAudience: string
}

export interface ProcessStep {
  number: string
  title: string
  subtitle: string
  description: string
  deliverables: string[]
  duration: string
}

export interface WhyChooseItem {
  id: string
  title: string
  description: string
  iconName: string
  highlight: string
}
