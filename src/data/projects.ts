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
    image: '/images/CSI00139.jpg',
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
    image: '/images/CSI00139.jpg',
    images: ['/images/CSI00139.jpg'],
    link: 'https://cosi.bu.ac.th',
    github: '',
    tags: createLocalizedText(
      ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'University Website'],
      ['React', 'TypeScript', 'Tailwind CSS', 'การออกแบบตอบสนอง', 'เว็บไซต์มหาวิทยาลัย']
    ),
    category: 'collaborations'
  }
]