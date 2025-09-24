import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { MdOutlineWork } from "react-icons/md";
import { MdViewTimeline } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { PiGlobeBold } from "react-icons/pi";
import { useState, useEffect } from "react";
import {
  bioTimeline,
  personalInfo,
  featuredProjects,
} from "../data/personalData";
import { skills } from "../data/skillsData";
import { socialLinks } from "../data/socialData";
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  const [typewriterText, setTypewriterText] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const targetText = t('home.greeting');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= targetText.length) {
        setTypewriterText(targetText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const handleEmailContact = () => {
    const recipient = personalInfo.email;
    const subject = "Work Opportunity - Portfolio Contact";
    const body =
      emailContent ||
      "Hello, I am interested in discussing work opportunities with you.";

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      style={{ paddingTop: "100px" }}
    >
      <div className="max-w-2xl mx-auto px-6 ">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex justify-center w-full mb-6">
            <div className="relative w-full flex justify-center">
              <input
                type="text"
                value={typewriterText}
                readOnly
                className="w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-semibold shadow focus:outline-none"
              />
              {/* Speech bubble tail */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                  <polygon
                    points="0,0 16,16 32,0"
                    fill="url(#bubbleTailGradient)"
                  />
                  <defs>
                    <linearGradient
                      id="bubbleTailGradient"
                      x1="0"
                      y1="0"
                      x2="32"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#14b8a6" />
                      <stop offset="1" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="text-center mt-1/2">
            {/* <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {typewriterText}
          <span className="animate-pulse text-teal-500">|</span>
        </h1> */}
          </div>

          <div className="flex flex-col items-center gap-6 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="relative"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 p-1 transition-all duration-300 hover:scale-105 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <img
                  src={personalInfo.profileImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover "
                />
              </div>
              <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce">
                <div className="text-2xl transform rotate-12">👋</div>
              </div>
            </motion.div>

            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
{t('home.name')}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
{t('home.title')}
              </p>
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
            <MdOutlineWork className="text-lg" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Work
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
            I'm a Full-Stack web developer currently at the Center of Specialty
            Innovation (CoSI), a research lab under Bangkok University.
            experience as a full-stack developer, I have worked on various
            projects, including ERP( Enterprise Resource Planning) platforms and
            task management applications. My expertise lies in JavaScript,
            TypeScript,React and Node.js, and I am passionate about building
            efficient and scalable web applications.
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
            <MdViewTimeline className="text-lg" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Bio
            </h3>
          </div>
          <div className="space-y-2">
            {bioTimeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-teal-500 font-semibold text-sm min-w-[70px]">
                  {item.year}
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <MdElectricBolt className="text-lg" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Skills
            </h3>
          </div>

          <div className="space-y-6 mt-4">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + catIndex * 0.12 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {category}
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {items.length} items
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.15 + index * 0.03,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      whileHover={{
                        scale: 1.12,
                        transition: {
                          duration: 0.15,
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }
                      }}
                      whileTap={{ scale: 0.96 }}
                      className="flex flex-col items-center p-2 rounded-md cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 ${skill.color} rounded-md flex items-center justify-center text-white font-semibold text-sm transition-all duration-200 ease-out hover:opacity-90`}
                      >
                        {skill.icon ? (
                          //@ts-ignore
                          <skill.icon size={18} />
                        ) : (
                          skill.name.charAt(0)
                        )}
                      </div>

                      <div className="mt-2 text-xs text-center text-gray-600 dark:text-gray-300">
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* I ♥ Section */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <MdColorLens className="text-lg" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              I ♥
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Art, Music, Drawing, Playing Guitar, Photography, Machine Learning,
            and{" "}
            <a
              href="https://www.craftz.dog/works/fourpainters"
              className="text-teal-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Turning coffee into code
            </a>
            !
          </p>
        </motion.section> */}

        {/* On the web Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <PiGlobeBold className="text-lg" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              On the web
            </h3>
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
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Contact Email
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Contact me for work opportunities or project collaborations
          </p>
          <div className="space-y-3">
            <textarea
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              placeholder="Describe what you're looking for or your project details..."
              className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal-500 resize-none"
              rows={4}
            />
            <button
              onClick={handleEmailContact}
              className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md text-sm transition-colors"
            >
              Contact via Email
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
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Support Section
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
        </motion.section> */}

        {/* Footer */}
        {/* <footer className="text-center py-6 border-t border-gray-200 dark:border-gray-700 mt-8">
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            © 2025 aphsx. All Rights Reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
            Inspired by{" "}
            <a
              href="https://www.craftz.dog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
            >
              craftz.dog
            </a>
          </p>
        </footer> */}
      </div>
    </div>
  );
};

export default Home;
