export interface Project {
  id: string
  title: string
  description: string
  descriptionLong?: string
  image: string
  link?: string
  github?: string
  tags: string[]
  category: 'works' | 'collaborations' | 'old'
}

export interface BioTimelineItem {
  year: string
  event: string
}

export interface Skill {
  name: string
  color: string
  icon?: any
}

export interface SocialLink {
  name: string
  icon: any
  url: string
  handle: string
}

export interface FeaturedProject {
  title: string
  description: string
  image: string
  link: string
}

export interface UsesCategory {
  category: string
  items: {
    name: string
    image: string
  }[]
}