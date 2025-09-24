import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import { SiTiktok } from 'react-icons/si'
import { useState, useEffect } from 'react'

const Home = () => {
  const [typewriterText, setTypewriterText] = useState('')
  const targetText = 'Hello, ~'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= targetText.length) {
        setTypewriterText(targetText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [])

  const bioTimeline = [
    { year: '2024', event: 'Joined the Center of Specialty Innovation (CoSI) - research lab under Bangkok University' },
    { year: '2023', event: 'Currently studying Computer Science at Bangkok University' },
    { year: '2018', event: 'Successfully completed secondary education at Matthayomwatmaikrongtong School (Grade 7-12)' }
  ]

  const skills = {
    'Languages & Frameworks': [
      { name: 'JavaScript', color: 'bg-yellow-500' },
      { name: 'TypeScript', color: 'bg-blue-600' },
      { name: 'Python', color: 'bg-blue-700' },
      { name: 'Java', color: 'bg-red-600' },
      { name: 'React', color: 'bg-cyan-500' },
      { name: 'Next.js', color: 'bg-gray-800' },
      { name: 'Express', color: 'bg-gray-700' },
      { name: 'Node.js', color: 'bg-green-500' },
    ],
    'Tools & Design': [
      { name: 'Git', color: 'bg-red-500' },
      { name: 'Docker', color: 'bg-blue-400' },
      { name: 'Figma', color: 'bg-purple-500' },
      { name: 'Photoshop', color: 'bg-blue-700' },
    ],
    'Database': [
      { name: 'MongoDB', color: 'bg-green-600' },
      { name: 'MySQL', color: 'bg-orange-600' },
      { name: 'Firebase', color: 'bg-yellow-600' },
      { name: 'PostgreSQL', color: 'bg-blue-800' },
    ]
  }


  const socialLinks = [
    { name: 'GitHub', icon: FiGithub, url: 'https://github.com', handle: '@yourhandle' },
    { name: 'Twitter', icon: AiOutlineTwitter, url: 'https://twitter.com', handle: '@yourhandle' },
    { name: 'YouTube', icon: AiOutlineYoutube, url: 'https://youtube.com', handle: '@yourchannel' },
    { name: 'TikTok', icon: SiTiktok, url: 'https://tiktok.com', handle: '@yourhandle' },
  ]

  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern shopping experience with React & Node.js',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      link: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative workspace for teams',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      link: 'https://example.com'
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {typewriterText}
              <span className="animate-pulse text-teal-500">|</span>
            </h1>
          </div>

          <div className="flex flex-col items-center gap-6 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 p-1">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce">
                <div className="text-2xl transform rotate-12">👋</div>
              </div>
            </motion.div>

            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">Web Developer</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">(Artist / Photographer / Designer)</p>
            </div>
          </div>
        </motion.div>

        {/* Work Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-lg">💼</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Work</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
            I'm a Full-Stack web developer currently interning at the Center of Specialty Innovation (CoSI), a research lab under Bangkok University.
            I enjoy crafting web applications and working on software development projects involving multimedia applications and AI technologies.
            Proficient in programming languages including JavaScript, Python, and Java, with experience in web development frameworks like React, Next.js, and Express.
            When I'm offline, I relish capturing moments through my camera while traveling and experiencing new adventures. Drawing and music are also hobbies of mine.
          </p>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
            >
              My Portfolio
              <HiArrowRight size={14} />
            </motion.button>
          </div>
        </motion.section>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-lg">📝</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Bio</h3>
          </div>
          <div className="space-y-2">
            {bioTimeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-teal-500 font-semibold text-sm min-w-[70px]">{item.year}</span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">{item.event}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Hobby Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-lg">🎨</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Hobby</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Photography, Music, Drawing, Playing Guitar, Traveling, Coding
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-lg">⚡</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Skills</h3>
          </div>

          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div key={category} className="mb-6">
              <h4 className="text-teal-500 font-medium mb-3 text-sm">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + categoryIndex * 0.1 + index * 0.05 }}
                    className="group cursor-pointer"
                  >
                    <div className={`w-10 h-10 ${skill.color} rounded-md flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <span className="text-white font-bold text-xs">
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-xs text-center mt-1 text-gray-500 dark:text-gray-400 group-hover:text-teal-500 transition-colors">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.section>

        {/* I ♥ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-lg">💖</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">I ♥</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Art, Music, Drawing, Playing Guitar, Photography, Machine Learning, and{' '}
            <a
              href="https://www.craftz.dog/works/fourpainters"
              className="text-teal-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Turning coffee into code
            </a>!
          </p>
        </motion.section>

        {/* On the web Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-lg">🌐</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">On the web</h3>
          </div>
          <div className="space-y-2">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors text-sm"
                >
                  <social.icon size={16} />
                  {social.handle}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-lg">📧</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Newsletter</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Join the newsletter and get updates on new content and projects.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal-500"
            />
            <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md text-sm transition-colors">
              Subscribe
            </button>
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="group block bg-white dark:bg-gray-800 rounded-md overflow-hidden hover:scale-105 transition-transform shadow-md"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-teal-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Support Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-md font-medium text-sm transition-colors"
          >
            ☕ Support me on Ko-fi
          </motion.button>
        </motion.section>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-gray-200 dark:border-gray-700 mt-8">
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            © 2025 aphsx. All Rights Reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
            Inspired by{' '}
            <a href="https://www.craftz.dog/" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">
              craftz.dog
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Home