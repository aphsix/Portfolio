import { Project } from '../types'

export const projects: Project[] = [
  // Main Works
  {
    id: '1',
    title: 'Enterprise Resource Planning System',
    titleTh: 'ระบบการวางแผนทรัพยากรองค์กร',
    description: 'A comprehensive ERP system designed for military manufacturing operations, featuring advanced inventory management and production planning capabilities.',
    descriptionTh: 'ระบบ ERP ที่ครอบคลุมที่ออกแบบสำหรับการดำเนินงานการผลิตทางทหาร มีการจัดการสินค้าคงคลังขั้นสูงและความสามารถในการวางแผนการผลิต',
    shortDescription: 'Planning system for military manufacturing with inventory management and production planning.',
    shortDescriptionTh: 'ระบบ ERP สำหรับการผลิตทางทหารพร้อมการจัดการสินค้าคงคลัง',
    descriptionLong: 'A comprehensive ERP system for military manufacturing that handles inventory management, production scheduling, and resource allocation. The system uses React for the user interface, Electron for cross-platform desktop deployment, and CouchDB for data synchronization across multiple locations.',
    descriptionLongTh: 'พัฒนาระบบการวางแผนทรัพยากรองค์กรที่ซับซ้อนซึ่งปรับแต่งสำหรับการดำเนินงานการผลิตทางทหาร ระบบนี้รวมการจัดการสินค้าคงคลัง การจัดตารางการผลิต และการจัดสรรทรัพยากรโดยใช้เทคโนโลยีเว็บสมัยใหม่ สร้างด้วย React สำหรับ UI ที่ตอบสนอง Electron สำหรับการใช้งานบนเดสก์ท็อปข้ามแพลตฟอร์ม และ CouchDB สำหรับการซิงค์ข้อมูลที่แข็งแกร่งในหลายสถานที่',
    image: '/images/IMG_2701.JPG',
    images: [],
    link: '',
    github: '',
    tags: ['React', 'Electron', 'CouchDB', 'Inventory Management', 'Real-time Sync'],
    tagsTh: ['React', 'Electron', 'CouchDB', 'การจัดการสินค้าคงคลัง', 'ซิงค์แบบเรียลไทม์'],
    category: 'collaborations'
  },
  {
    id: '2',
    title: 'Medical E-Learning Platform',
    titleTh: 'แพลตฟอร์มอีเลิร์นนิงทางการแพทย์',
    description: 'An interactive e-learning platform designed for medical students specializing in radiology, featuring comprehensive case studies and assessment tools.',
    descriptionTh: 'แพลตฟอร์มอีเลิร์นนิงแบบโต้ตอบที่ออกแบบสำหรับนักศึกษาแพทย์ มีกรณีศึกษาที่ครอบคลุมและเครื่องมือประเมิน',
    shortDescription: 'E-learning platform for medical radiology with interactive case studies and assessments.',
    shortDescriptionTh: 'แพลตฟอร์มอีเลิร์นนิงรังสีวิทยาพร้อมกรณีศึกษาแบบโต้ตอบ',
    descriptionLong: 'An e-learning platform for medical radiology education that provides medical students with access to real-world case studies, interactive imaging tools, and assessment modules. The platform includes DICOM image viewer integration, case-based learning modules, progress tracking, and collaboration tools.',
    descriptionLongTh: 'สร้างแพลตฟอร์มอีเลิร์นนิงที่นวัตกรรมซึ่งออกแบบเฉพาะสำหรับการศึกษา แพลตฟอร์มนี้ให้นักศึกษาแพทย์เข้าถึงไลบรารีที่ครอบคลุมของกรณีศึกษาในโลกแห่งความเป็นจริง เครื่องมือถ่ายภาพแบบโต้ตอบ และโมดูลการประเมินแบบก้าวหน้า คุณสมบัติรวมถึงการรวม DICOM image viewer โมดูลการเรียนรู้ตามกรณี การติดตามความก้าวหน้า และเครื่องมือความร่วมมือของเพื่อน',
    image: '/images/CSI00139.jpg',
    images: [],
    link: 'https://example.com',
    github: 'https://github.com',
    tags: ['React', 'Node.js', 'DICOM', 'Medical Imaging', 'Educational Technology'],
    tagsTh: ['React', 'Node.js', 'DICOM', 'การถ่ายภาพทางการแพทย์', 'เทคโนโลยีการศึกษา'],
    category: 'collaborations'
  },
  {
    id: '3',
    title: 'Center of Social Innovation Website',
    titleTh: 'เว็บไซต์ศูนย์นวัตกรรมเฉพาะทาง',
    description: 'A modern, responsive website for the Center of Social Innovation Lab, showcasing research projects, events, and community impact initiatives.',
    descriptionTh: 'เว็บไซต์ที่ทันสมัยและตอบสนองสำหรับห้องปฏิบัติการศูนย์นวัตกรรมเฉพาะทาง แสดงโครงการวิจัย กิจกรรม และโครงการส่งผลกระทบต่อชุมชน',
    shortDescription: 'University lab website showcasing research projects and social innovation initiatives.',
    shortDescriptionTh: 'เว็บไซต์ห้องปฏิบัติการมหาวิทยาลัยแสดงโครงการวิจัย',
    descriptionLong: 'A comprehensive website for the Center of Social Innovation (CoSI) Lab at Bangkok University. The site showcases ongoing research projects, upcoming events, and the center\'s impact on social innovation. Features include project portfolio galleries, event management system, research publication database, team member profiles, and an interactive contact system.',
    descriptionLongTh: 'ออกแบบและพัฒนาเว็บไซต์ที่ครอบคลุมสำหรับห้องปฏิบัติการศูนย์นวัตกรรมเฉพาะทาง (CoSI) ที่มหาวิทยาลัยกรุงเทพ เว็บไซต์ทำหน้าที่เป็นศูนย์กลางดิจิทัลสำหรับการแสดงโครงการวิจัยที่กำลังดำเนินอยู่ กิจกรรมที่จะเกิดขึ้น และผลกระทบของศูนย์ต่อนวัตกรรมทางสังคม คุณสมบัติรวมถึงแกลเลอรีพอร์ตโฟลิโอโครงการ ระบบการจัดการกิจกรรม ฐานข้อมูลสิ่งพิมพ์วิจัย โปรไฟล์สมาชิกทีม และระบบติดต่อแบบโต้ตอบ',
    image: '/images/CoSI_web.png',
    images: [],
    link: 'https://cosi.bu.ac.th/',
    github: 'https://github.com/aphisitdang/cosi-website',
    tags: ['React', 'Next.js', 'Responsive Design', 'CMS', 'SEO Optimization'],
    tagsTh: ['React', 'Next.js', 'การออกแบบตอบสนอง', 'CMS', 'การปรับปรุง SEO'],
    category: 'collaborations'
  },
  {
    id: '4',
    title: 'Local Tourism Discovery Platform',
    titleTh: 'แพลตฟอร์มการค้นพบการท่องเที่ยวท้องถิ่น',
    description: 'A comprehensive tourism platform connecting travelers with authentic local experiences, featuring destination guides and integrated booking systems.',
    descriptionTh: 'แพลตฟอร์มการท่องเที่ยวที่ครอบคลุมที่เชื่อมต่อนักท่องเที่ยวกับประสบการณ์ท้องถิ่นที่แท้จริง มีคำแนะนำสถานที่ท่องเที่ยวและระบบจองแบบรวม',
    shortDescription: 'Tourism platform with destination guides and integrated booking system.',
    shortDescriptionTh: 'แพลตฟอร์มการท่องเที่ยวพร้อมคำแนะนำสถานที่และระบบจอง',
    descriptionLong: 'A full-featured tourism platform for a local travel agency specializing in authentic cultural experiences. The platform provides destination guides, curated tour packages, and booking functionality. Features include interactive maps with points of interest, user reviews and ratings, multi-language support, payment gateway integration, and real-time availability checking.',
    descriptionLongTh: 'สร้างแพลตฟอร์มการท่องเที่ยวที่มีคุณสมบัติครบครันสำหรับบริษัททัวร์ท้องถิ่นที่เชี่ยวชาญในประสบการณ์วัฒนธรรมที่แท้จริง แพลตฟอร์มให้คำแนะนำสถานที่ท่องเที่ยว แพ็คเกจทัวร์ที่คัดสรร และฟังก์ชันการจอง คุณสมบัติรวมถึงแผนที่แบบโต้ตอบพร้อมจุดสนใจ รีวิวและการให้คะแนนของผู้ใช้ การรองรับหลายภาษา การรวมเกตเวย์การชำระเงิน และการตรวจสอบความพร้อมใช้งานแบบเรียลไทม์',
    image: '/images/tourism_platform.jpg',
    images: [],
    link: 'https://example.com',
    github: '',
    tags: ['React', 'Node.js', 'Payment Integration', 'Maps API', 'Booking System'],
    tagsTh: ['React', 'Node.js', 'การรวมระบบชำระเงิน', 'Maps API', 'ระบบจอง'],
    category: 'collaborations'
  },
  {
    id: '5',
    title: 'Personal Portfolio Website',
    titleTh: 'เว็บไซต์พอร์ตโฟลิโอส่วนตัว',
    description: 'A modern, interactive portfolio website showcasing my development journey, projects, and technical expertise with elegant animations and responsive design.',
    descriptionTh: 'เว็บไซต์พอร์ตโฟลิโอที่ทันสมัยและโต้ตอบได้ แสดงเส้นทางการพัฒนา โปรเจค และความเชี่ยวชาญทางเทคนิคของผมพร้อมอนิเมชันที่สวยงามและการออกแบบที่ตอบสนอง',
    shortDescription: 'Personal portfolio website with modern design and smooth animations.',
    shortDescriptionTh: 'เว็บไซต์พอร์ตโฟลิโอส่วนตัวพร้อมดีไซน์ทันสมัยและอนิเมชันเรียบ',
    descriptionLong: 'A personal portfolio website using modern web technologies. The site features a clean, minimalist design with smooth animations powered by Framer Motion, dark/light mode toggle, and fully responsive layout. Includes sections for project showcases, technical skills visualization, career timeline, and contact information. Built with React, TypeScript, and Tailwind CSS.',
    descriptionLongTh: 'สร้างเว็บไซต์พอร์ตโฟลิโอส่วนตัวโดยใช้เทคโนโลยีเว็บสมัยใหม่ เว็บไซต์มีการออกแบบที่สะอาดและเรียบง่ายพร้อมอนิเมชันเรียบที่ขับเคลื่อนโดย Framer Motion การสลับโหมดมืด/สว่าง และเลย์เอาต์ที่ตอบสนองอย่างสมบูรณ์ รวมถึงส่วนสำหรับการแสดงผลงาน การแสดงผลทักษะทางเทคนิค ไทม์ไลน์อาชีพ และข้อมูลติดต่อ สร้างด้วย React, TypeScript และ Tailwind CSS',
    image: '/images/portfolio.png',
    images: [],
    link: 'https://aphisit-portfolio.vercel.app',
    github: 'https://github.com/aphisitdang/portfolio',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    tagsTh: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'การออกแบบตอบสนอง'],
    category: 'works'
  },
  // Collaborations
  

  // Old Works
  // {
  //   id: 'pichu2',
  //   title: 'Pichu*Pichu',
  //   description: 'Twitter client app for iPhone Safari',
  //   image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=720&h=400&fit=crop&crop=center',
  //   link: 'https://example.com',
  //   tags: ['iOS', 'Twitter API', 'Safari Extension'],
  //   category: 'old'
  // },
  // {
  //   id: 'freedbtagger',
  //   title: 'freeDBTagger',
  //   description: 'Automatic audio file tagging tool using FreeDB for Windows',
  //   image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=720&h=400&fit=crop&crop=center',
  //   tags: ['Windows', 'Audio', 'Desktop App', 'C++'],
  //   category: 'old'
  // },
  // {
  //   id: 'amembo',
  //   title: 'Amembo',
  //   description: 'P2P private file sharing tool with MSN Messenger integration for Windows',
  //   image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=720&h=400&fit=crop&crop=center',
  //   tags: ['P2P', 'File Sharing', 'Windows', 'MSN'],
  //   category: 'old'
  // }
]