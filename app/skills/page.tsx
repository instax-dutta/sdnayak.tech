"use client"

import { motion } from "framer-motion"
import { FaGit, FaGithub, FaJs, FaPython, FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiBootstrap, SiMongodb, SiExpress } from "react-icons/si"

const skills = [
  { name: "Git", icon: FaGit },
  { name: "GitHub", icon: FaGithub },
  { name: "JavaScript", icon: FaJs },
  { name: "Python", icon: FaPython },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express.js", icon: SiExpress },
]

export default function Skills() {
  return (
    <div className="min-h-screen pt-16">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center p-4 bg-transparent-box rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <skill.icon size={48} className="mb-2 text-gray-300" />
            <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

