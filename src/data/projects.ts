import { Project } from '../types'

export const projects: Project[] = [
  // Main Works
  {
    id: 'inkdrop',
    title: 'Inkdrop',
    description: 'A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=720&h=400&fit=crop&crop=center',
    link: 'https://inkdrop.app',
    github: 'https://github.com',
    tags: ['React', 'Electron', 'CouchDB', 'Markdown'],
    category: 'works'
  },
  {
    id: 'walknote',
    title: 'walknote',
    description: 'Music recommendation app for iOS',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=720&h=400&fit=crop&crop=center',
    link: 'https://example.com',
    github: 'https://github.com',
    tags: ['iOS', 'Swift', 'Music API'],
    category: 'works'
  },
  {
    id: 'fourpainters',
    title: 'The four painters',
    description: 'A video work generated with deep learning, imitating famous four painters like Van Gogh',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=720&h=400&fit=crop&crop=center',
    link: 'https://example.com',
    tags: ['Deep Learning', 'AI Art', 'Python', 'TensorFlow'],
    category: 'works'
  },
  {
    id: 'menkiki',
    title: 'Menkiki',
    description: 'An app that suggests ramen(noodle) shops based on a given photo of the ramen you want to eat',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=720&h=400&fit=crop&crop=center',
    link: 'https://example.com',
    tags: ['Machine Learning', 'Image Recognition', 'Mobile App'],
    category: 'works'
  },

  // Collaborations
  {
    id: 'margelo',
    title: 'Margelo',
    description: 'A website of the elite app development and contracting agency based in Austria',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&h=400&fit=crop&crop=center',
    link: 'https://margelo.io',
    tags: ['Web Design', 'React', 'Agency'],
    category: 'collaborations'
  },
  {
    id: 'modetokyo',
    title: 'mode.tokyo',
    description: 'The mode magazine for understanding to personally enjoy Japan',
    image: 'https://images.unsplash.com/photo-1492515114975-b062d1a270b5?w=720&h=400&fit=crop&crop=center',
    link: 'https://mode.tokyo',
    tags: ['Editorial', 'Web Design', 'Content'],
    category: 'collaborations'
  },
  {
    id: 'styly',
    title: 'Styly',
    description: 'A VR Creative tools for fashion brands',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=720&h=400&fit=crop&crop=center',
    link: 'https://styly.cc',
    tags: ['VR', 'Fashion', 'Creative Tools'],
    category: 'collaborations'
  },

  // Old Works
  {
    id: 'pichu2',
    title: 'Pichu*Pichu',
    description: 'Twitter client app for iPhone Safari',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=720&h=400&fit=crop&crop=center',
    link: 'https://example.com',
    tags: ['iOS', 'Twitter API', 'Safari Extension'],
    category: 'old'
  },
  {
    id: 'freedbtagger',
    title: 'freeDBTagger',
    description: 'Automatic audio file tagging tool using FreeDB for Windows',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=720&h=400&fit=crop&crop=center',
    tags: ['Windows', 'Audio', 'Desktop App', 'C++'],
    category: 'old'
  },
  {
    id: 'amembo',
    title: 'Amembo',
    description: 'P2P private file sharing tool with MSN Messenger integration for Windows',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=720&h=400&fit=crop&crop=center',
    tags: ['P2P', 'File Sharing', 'Windows', 'MSN'],
    category: 'old'
  }
]