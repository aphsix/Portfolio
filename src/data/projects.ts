import { Project } from '../types'
import { createLocalizedText } from '../utils'

export const projects: Project[] = [
  {
    id: '1',
    title: createLocalizedText('Enterprise Resource Planning System', 'ระบบการวางแผนทรัพยากรองค์กร'),
    description: createLocalizedText(
      'A comprehensive ERP system designed for military manufacturing operations, featuring advanced inventory management and production planning capabilities.',
      'ระบบ ERP ที่ครอบคลุมที่ออกแบบสำหรับการดำเนินงานการผลิตทางทหาร มีการจัดการสินค้าคงคลังขั้นสูงและความสามารถในการวางแผนการผลิต'
    ),
    shortDescription: createLocalizedText(
      'Planning system for military manufacturing with inventory management and production planning.',
      'ระบบ ERP สำหรับการผลิตทางทหารพร้อมการจัดการสินค้าคงคลัง'
    ),
    descriptionLong: createLocalizedText(
      'A comprehensive ERP system for military manufacturing that handles inventory management, production scheduling, and resource allocation. The system uses React for the user interface, Electron for cross-platform desktop deployment, and CouchDB for data synchronization across multiple locations.',
      'พัฒนาระบบการวางแผนทรัพยากรองค์กรที่ซับซ้อนซึ่งปรับแต่งสำหรับการดำเนินงานการผลิตทางทหาร ระบบนี้รวมการจัดการสินค้าคงคลัง การจัดตารางการผลิต และการจัดสรรทรัพยากรโดยใช้เทคโนโลยีเว็บสมัยใหม่ สร้างด้วย React สำหรับ UI ที่ตอบสนอง Electron สำหรับการใช้งานบนเดสก์ท็อปข้ามแพลตฟอร์ม และ CouchDB สำหรับการซิงค์ข้อมูลที่แข็งแกร่งในหลายสถานที่'
    ),
    image: '/images/IMG_2701.JPG',
    images: [],
    link: '',
    github: '',
    tags: createLocalizedText(
      ['React', 'Electron', 'CouchDB', 'Inventory Management', 'Real-time Sync'],
      ['React', 'Electron', 'CouchDB', 'การจัดการสินค้าคงคลัง', 'ซิงค์แบบเรียลไทม์']
    ),
    category: 'collaborations'
  },
  {
    id: '5',
    title: createLocalizedText('Tourism Website', 'เว็บไซต์ท่องเที่ยว'),
    description: createLocalizedText(
      'A vibrant tourism website promoting local attractions, events, and travel guides, built with Next.js and styled with Tailwind CSS.',
      'เว็บไซต์ท่องเที่ยวที่มีชีวิตชีวาเพื่อส่งเสริมสถานที่ท่องเที่ยวในท้องถิ่น กิจกรรม และคู่มือการเดินทาง สร้างด้วย Next.js และจัดแต่งด้วย Tailwind CSS'
    ),
    shortDescription: createLocalizedText(
      'Tourism website built with Next.js and Tailwind CSS.',
      'เว็บไซต์ท่องเที่ยวสร้างด้วย Next.js และ Tailwind CSS.'
    ),
    descriptionLong: createLocalizedText(
      'A tourism website designed to promote local attractions, events, and travel guides. The site features a colorful and engaging design with sections for popular destinations, upcoming events, travel tips, and user reviews. Built using Next.js for server-side rendering and SEO optimization, along with Tailwind CSS for a responsive and visually appealing layout.',
      'เว็บไซต์ท่องเที่ยวที่ออกแบบมาเพื่อส่งเสริมสถานที่ท่องเที่ยวในท้องถิ่น กิจกรรม และคู่มือการเดินทาง เว็บไซต์มีการออกแบบที่มีสีสันและน่าสนใจ พร้อมส่วนต่างๆ สำหรับจุดหมายปลายทางยอดนิยม กิจกรรมที่จะเกิดขึ้น เคล็ดลับการเดินทาง และบทวิจารณ์ของผู้ใช้ สร้างขึ้นโดยใช้ Next.js สำหรับการเรนเดอร์ฝั่งเซิร์ฟเวอร์และการเพิ่มประสิทธิภาพ SEO รวมถึง Tailwind CSS สำหรับเลย์เอาต์ที่ตอบสนองและน่าดึงดูดทางสายตา'
    ),
    image: '/images/project/Tourism.png',
    images: [],
    link: '',
    github: '',
    tags: createLocalizedText(
      ['Next.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'Web Development'],
      ['Next.js', 'Tailwind CSS', 'JavaScript', 'การออกแบบตอบสนอง', 'การพัฒนาเว็บ']
    ),
    category: 'collaborations'
  }
  ,
  {
    id: '2',
    title: createLocalizedText('Medical E-Learning Platform', 'แพลตฟอร์มอีเลิร์นนิงทางการแพทย์'),
    description: createLocalizedText(
      'An interactive e-learning platform designed for medical students specializing in radiology, featuring comprehensive case studies and assessment tools.',
      'แพลตฟอร์มอีเลิร์นนิงแบบโต้ตอบที่ออกแบบสำหรับนักศึกษาแพทย์ มีกรณีศึกษาที่ครอบคลุมและเครื่องมือประเมิน'
    ),
    shortDescription: createLocalizedText(
      'E-learning platform for medical radiology with interactive case studies and assessments.',
      'แพลตฟอร์มอีเลิร์นนิงรังสีวิทยาพร้อมกรณีศึกษาแบบโต้ตอบ'
    ),
    descriptionLong: createLocalizedText(
      'An e-learning platform for medical radiology education that provides medical students with access to real-world case studies, interactive imaging tools, and assessment modules. The platform includes DICOM image viewer integration, case-based learning modules, progress tracking, and collaboration tools.',
      'สร้างแพลตฟอร์มอีเลิร์นนิงที่นวัตกรรมซึ่งออกแบบเฉพาะสำหรับการศึกษา แพลตฟอร์มนี้ให้นักศึกษาแพทย์เข้าถึงไลบรารีที่ครอบคลุมของกรณีศึกษาในโลกแห่งความเป็นจริง เครื่องมือถ่ายภาพแบบโต้ตอบ และโมดูลการประเมินแบบก้าวหน้า คุณสมบัติรวมถึงการรวม DICOM image viewer โมดูลการเรียนรู้ตามกรณี การติดตามความก้าวหน้า และเครื่องมือความร่วมมือของเพื่อน'
    ),
    image: '/images/project/E-Learning.png',
    images: [],
    link: 'https://example.com',
    github: 'https://github.com',
    tags: createLocalizedText(
      ['React', 'Node.js', 'DICOM', 'Medical Imaging', 'Educational Technology'],
      ['React', 'Node.js', 'DICOM', 'การถ่ายภาพทางการแพทย์', 'เทคโนโลยีการศึกษา']
    ),
    category: 'collaborations'
  },
  {
    id: '3',
    title: createLocalizedText('Center of Social Innovation Website', 'เว็บไซต์ศูนย์นวัตกรรมเฉพาะทาง'),
    description: createLocalizedText(
      'A modern, responsive website for the Center of Social Innovation Lab, showcasing research projects, events, and community impact initiatives.',
      'เว็บไซต์ที่ทันสมัยและตอบสนองสำหรับห้องปฏิบัติการศูนย์นวัตกรรมเฉพาะทาง แสดงโครงการวิจัย กิจกรรม และโครงการส่งผลกระทบต่อชุมชน'
    ),
    shortDescription: createLocalizedText(
      'University lab website showcasing research projects and social innovation initiatives.',
      'เว็บไซต์ห้องปฏิบัติการมหาวิทยาลัยแสดงโครงการวิจัย'
    ),
    descriptionLong: createLocalizedText(
      'A comprehensive website for the Center of Social Innovation (CoSI) Lab at Bangkok University. The site showcases ongoing research projects, upcoming events, and the center\'s impact on social innovation. Features include project portfolio galleries, event management system, research publication database, team member profiles, and an interactive contact system.',
      'ออกแบบและพัฒนาเว็บไซต์ที่ครอบคลุมสำหรับห้องปฏิบัติการศูนย์นวัตกรรมเฉพาะทาง (CoSI) ที่มหาวิทยาลัยกรุงเทพ เว็บไซต์ทำหน้าที่เป็นศูนย์กลางดิจิทัลสำหรับการแสดงโครงการวิจัยที่กำลังดำเนินอยู่ กิจกรรมที่จะเกิดขึ้น และผลกระทบของศูนย์ต่อนวัตกรรมทางสังคม คุณสมบัติรวมถึงแกลเลอรีพอร์ตโฟลิโอโครงการ ระบบการจัดการกิจกรรม ฐานข้อมูลสิ่งพิมพ์วิจัย โปรไฟล์สมาชิกทีม และระบบติดต่อแบบโต้ตอบ'
    ),
    image: '/images/project/CoSI_web.png',
    images: [],
    link: 'https://cosi.bu.ac.th',
    github: '',
    tags: createLocalizedText(
      ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'University Website'],
      ['React', 'TypeScript', 'Tailwind CSS', 'การออกแบบตอบสนอง', 'เว็บไซต์มหาวิทยาลัย']
    ),
    category: 'collaborations'
  }
  ,
  {
    id: '4',
    title: createLocalizedText('Personal Portfolio Website', 'เว็บไซต์ผลงานส่วนตัว'),
    description: createLocalizedText(
      'A sleek and modern personal portfolio website to showcase projects, skills, and experience, built with React and Tailwind CSS.',
      'เว็บไซต์ผลงานส่วนตัวที่ทันสมัยและทันสมัยเพื่อแสดงโครงการ ทักษะ และประสบการณ์ สร้างด้วย React และ Tailwind CSS'
    ),
    shortDescription: createLocalizedText(
      'Personal portfolio website built with React and Tailwind CSS.',
      'เว็บไซต์ผลงานส่วนตัวสร้างด้วย React และ Tailwind CSS.'
    ),
    descriptionLong: createLocalizedText(
      'A personal portfolio website designed to showcase my projects, skills, and professional experience. The site features a clean, modern design with sections for about me, project showcases, skills, and contact information. Built using React for a dynamic user experience and Tailwind CSS for rapid styling and responsiveness.',
      'เว็บไซต์ผลงานส่วนตัวที่ออกแบบมาเพื่อแสดงโครงการ ทักษะ และประสบการณ์ทางวิชาชีพของฉัน เว็บไซต์มีการออกแบบที่สะอาดตาและทันสมัย พร้อมส่วนต่างๆ สำหรับเกี่ยวกับฉัน การแสดงผลงาน ทักษะ และข้อมูลการติดต่อ สร้างขึ้นโดยใช้ React เพื่อประสบการณ์ผู้ใช้ที่มีไดนามิกและ Tailwind CSS สำหรับการจัดแต่งสไตล์อย่างรวดเร็วและการตอบสนอง'
    ),
    image: '/images/portfolio.png',
    images: ['/images/portfolio.png'],
    link: 'https://portfolio-aphsx.vercel.app/',
    github: 'https://github.com/aphsix/Portfolio',
    tags: createLocalizedText(
      ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'Web Development'],
      ['React', 'Tailwind CSS', 'JavaScript', 'การออกแบบตอบสนอง', 'การพัฒนาเว็บ']
    ),
    category: 'works'
  },
  
]