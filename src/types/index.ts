export interface Project {
  id: string
  title: string
  titleTh?: string
  description: string
  descriptionTh?: string
  shortDescription?: string
  shortDescriptionTh?: string
  descriptionLong?: string
  descriptionLongTh?: string
  image: string
  images?: string[]
  link?: string
  github?: string
  tags: string[]
  tagsTh?: string[]
  category: 'works' | 'collaborations' | 'old'
}

export interface BioTimelineItem {
  year: string
  event: string
  eventTh?: string
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
  titleTh?: string
  description: string
  descriptionTh?: string
  image: string
  link: string
}

export interface UsesCategory {
  category: string
  categoryTh?: string
  items: {
    name: string
    nameTh?: string
    image: string
  }[]
}