"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {
  const [typedName, setTypedName] = useState("")
  const fullName = "Soumyadeep Nayak"

  useEffect(() => {
    const typeWriter = (text: string, i = 0) => {
      if (i < text.length) {
        setTypedName(text.substring(0, i + 1))
        setTimeout(() => typeWriter(text, i + 1), 100)
      }
    }

    typeWriter(fullName)
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center pt-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
      >
        {typedName}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
      >
        Full-Stack Developer
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex space-x-4 mb-8"
      >
        <Link
          href="https://github.com/wizard-boy-yt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          <FaGithub size={32} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/soumyadeep-nayak"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          <FaLinkedin size={32} />
        </Link>
        <Link
          href="https://sdnayak.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          <FaGlobe size={32} />
        </Link>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-2xl text-xl mb-8 text-gray-300"
      >
        Passionate about creating innovative web solutions using the MERN stack. Let's build something amazing together!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Link
          href="/projects"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-300"
        >
          Explore My Work
        </Link>
      </motion.div>
    </div>
  )
}

