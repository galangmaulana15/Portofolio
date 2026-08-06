import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.href.slice(1))).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleClick = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" onClick={handleClick} className="flex items-center gap-2 text-xl font-bold text-white hover:text-cyan-300 transition">
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/50"></span>
          Galang
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan-300 bg-cyan-500/10 shadow-sm shadow-cyan-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/80 border-t border-white/10">
          <div className="flex flex-col py-4 px-6 gap-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleClick}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyan-300 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
