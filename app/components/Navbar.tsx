import Link from "next/link"
import { useState } from 'react';
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-30 bg-[#0a0a0f] bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
          >
            sdnayak.tech
          </Link>
          <div className="flex items-center space-x-4 md:block md:space-x-4">
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            <div className={`${open ? 'block' : 'hidden'} flex flex-col md:flex md:static top-12 md:top-0 left-0 md:left-auto bg-[#0a0a0f] bg-opacity-50 backdrop-filter backdrop-blur-lg w-full md:w-auto px-4 py-2 md:px-0 md:py-0 space-y-4 md:space-x-4`}>
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} className="block md:inline-block py-2 md:py-0 px-2 md:px-0 text-white hover:text-gray-300 transition-colors duration-200">
                  <span className="relative">
                    {item.name}
                    {pathname === item.path && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-violet-500"
                        layoutId="underline"
                      />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
