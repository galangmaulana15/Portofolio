import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'

function initStarsCanvas() {
  const canvas = document.getElementById('bg-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let width = window.innerWidth
  let height = window.innerHeight
  let stars = []
  const STAR_COUNT = 350

  function resize() {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height
  }

  function createStars() {
    stars = []
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.2,
      })
    }
  }

  function draw() {
    if (!ctx) return
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#050510'
    ctx.fillRect(0, 0, width, height)
    for (let s of stars) {
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(80, 180, 255, ${s.alpha})`
      ctx.fill()
      s.x += s.speedX
      s.y += s.speedY
      if (s.x < 0) s.x = width
      if (s.x > width) s.x = 0
      if (s.y < 0) s.y = height
      if (s.y > height) s.y = 0
    }
    requestAnimationFrame(draw)
  }

  window.addEventListener('resize', () => {
    resize()
    createStars()
  })
  resize()
  createStars()
  draw()
}

const WelcomeScreen = ({ show, onHide }) => {
  useEffect(() => {
    if (!show) return
    const handleScroll = () => {
      if (window.scrollY > 50) onHide()
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [show, onHide])

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl transition-opacity duration-700"
      style={{
        background: 'radial-gradient(circle at center, #0a0f2a, #000000)',
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent neon-glow">
          Welcome to my Portfolio
        </h1>
        <div className="mt-12 text-cyan-300 text-xl flex flex-col items-center gap-2">
          <i className="fas fa-chevron-down text-3xl animate-bounce"></i>
          <span className="text-sm tracking-widest">
ENTER THE DIGITAL UNIVERSE SCROLL TO EXPLORE MY WORLD
          </span>
        </div>
      </div>
    </div>
  )
}

const IntroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12 py-20 relative z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-up space-y-6">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              FULLSTACK <br />
              DEVELOPER
            </h2>
            <div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-md leading-relaxed border-l-2 border-cyan-400 pl-5">
            Transforming ideas into immersive digital realities through modern
            technologies, cinematic design, and seamless user experiences.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-cyan-300/80">
            <span>
              <i className="fas fa-code"></i> Fullstack Development
            </span>
          </div>
          <div className="flex flex-wrap gap-5 pt-2">
            <a
              href="#contact"
              className="btn-hover px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold shadow-lg shadow-cyan-500/30 flex items-center gap-2"
            >
              Hire Me <i className="fas fa-arrow-right"></i>
            </a>
            <a
              href="#projects"
              className="btn-hover px-8 py-3 rounded-full border border-cyan-400 text-cyan-300 backdrop-blur-sm hover:bg-cyan-500/20 transition"
            >
              View Project <i className="fas fa-code-branch ml-2"></i>
            </a>
          </div>
        </div>

        <div className="flex justify-center fade-up">
          <div className="relative flex flex-col items-center">
            <div className="lanyard-swing relative w-12 h-28 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-b from-yellow-400 to-amber-600 shadow-lg mb-1 flex items-center justify-center">
                <i className="fas fa-circle text-white text-xs"></i>
              </div>
              <div className="w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"></div>
              <div className="w-8 h-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded-b-md -mt-1 shadow-md"></div>
              <div className="w-4 h-5 bg-yellow-500 rounded-sm mt-1 shadow-lg"></div>
            </div>
            <div className="id-card-3d relative w-80 md:w-96 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-cyan-400/70 shadow-2xl p-6 cursor-pointer">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-1 shadow-xl">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src="/svg/foto.jpeg"
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mt-4 text-white">
                  Galang Ponco Maulana
                </h3>
                <p className="text-cyan-300 text-sm">
                  {' '}
                  Fullstack Developer & Creative UI Engineer
                </p>
                <div className="mt-3 flex justify-center gap-4 text-gray-300 text-xs">
                  <div>
                    <i className="fas fa-map-marker-alt text-cyan-400"></i>{' '}
                    Bandung, Indonesia
                  </div>
                  <div>
                    <i className="fas fa-envelope text-cyan-400"></i>{' '}
                    galangponco123@gmail.com
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <p className="text-xs text-cyan-200">
                    {' '}
                    Driven by passion, powered by creativity, and inspired to
                    build the future through code.
                  </p>
                </div>
                <div className="mt-4 flex justify-center gap-5 text-cyan-300/80 text-xl">
                  <i className="fab fa-react hover:text-cyan-400 transition"></i>
                  <i className="fab fa-js hover:text-yellow-300 transition"></i>
                  <i className="fas fa-brain hover:text-purple-400 transition"></i>
                  <i className="fab fa-github hover:text-white transition"></i>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 text-[8px] text-cyan-400/50">
                hover me
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 z-10 relative">
      <div className="max-w-6xl mx-auto glass p-8 md:p-12 fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Sebagai seorang Fullstack Developer, saya memiliki ketertarikan
              dalam membangun aplikasi web modern yang tidak hanya fungsional,
              tetapi juga memberikan pengalaman pengguna yang menarik,
              interaktif, dan nyaman digunakan.
            </p>
            <p>
              Saya berpengalaman dalam pengembangan frontend maupun backend
              menggunakan teknologi seperti React, Tailwind CSS, Node.js, serta
              pengelolaan database untuk menciptakan sistem yang responsif,
              efisien, dan scalable.
            </p>
            <p>
              Saya juga memiliki semangat tinggi untuk terus mempelajari
              teknologi dan framework terbaru, serta mengembangkan kemampuan
              dalam menciptakan solusi digital yang modern, inovatif, dan sesuai
              dengan perkembangan industri teknologi saat ini.
            </p>
            <div className="mt-6 p-4 rounded-2xl bg-black/40 border-l-4 border-purple-500 backdrop-blur-sm">
              <p className="italic text-cyan-200">
                "Didorong oleh semangat, didukung oleh kreativitas, dan
                terinspirasi untuk membangun masa depan melalui kode."
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="earth-spin"></div>
          </div>
        </div>
      </div>

      <style>{`
        .earth-spin {
          width: 220px;
          height: 220px;
          background: url('/svg/foto2.jpg') repeat-x;
          background-size: cover;
          border-radius: 50%;
          box-shadow: 0 0 40px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(0,0,0,0.5);
          animation: rotateEarth 12s linear infinite;
          transition: transform 0.3s ease;
        }
        .earth-spin:hover {
          transform: scale(1.05);
          box-shadow: 0 0 60px cyan;
        }
        @keyframes rotateEarth {
          0% { background-position: 0 0; }
          100% { background-position: 440px 0; }
        }
      `}</style>
    </section>
  )
}

const SkillsSection = () => {
  const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34c26', level: 90 },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e', level: 95 },
    { name: 'React.JS', icon: 'fab fa-react', color: '#61dafb', level: 98 },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#8bc500', level: 92 },
    {
      name: 'PostgreSQL',
      icon: 'fas fa-database',
      color: '#336791',
      level: 98,
    },
    { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38bdf8', level: 94 },
    { name: 'Git & GitHub', icon: 'fab fa-github', color: '#333', level: 89 },
    {       name: 'DBeaver', icon: 'fas fa-database', color: '#4db33d', level: 98 },
    {
      name: 'phpmyadmin',
      icon: 'fas fa-database',
      color: '#f0db4f',
      level: 88,
    },
    { name: 'MySQL', icon: 'fas fa-database', color: '#4479a1', level: 90 },
    { name: 'Express.js', icon: 'fas fa-server', color: '#000000', level: 85 },
    { name: 'postman', icon: 'fas fa-cubes', color: '#ff6c37', level: 92 },
    {
      name: ' C Programming',
      icon: 'fas fa-code',
      color: '#555555',
      level: 80,
    },
    {
      name: 'Cascading Style Sheets (CSS)',
      icon: 'fab fa-css3-alt',
      color: '#264de4',
      level: 90,
    },
    { name: 'Next.js', icon: 'fas fa-cubes', color: '#000000', level: 80 },
    { name: 'Java', icon: 'fab fa-java', color: '#f89820', level: 90 },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed', level: 85 },
    { name: 'Microsoft Azure', icon: 'fab fa-microsoft', color: '#0078d4', level: 85 },
  ]

  return (
    <section id="skills" className="py-20 px-6 md:px-12 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {' '}
            Core Skills{' '}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="glass p-6 text-center border border-white/20 rounded-2xl hover-scale"
            >
              <i
                className={`${skill.icon} text-5xl mb-4`}
                style={{
                  color: skill.color,
                  textShadow: `0 0 6px ${skill.color}`,
                }}
              ></i>
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              <div className="mt-3 w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Ronco Film',
      desc: 'A modern full-stack movie platform featuring interactive 3D experiences, dynamic content management, and optimized performance for a smooth user journey.',
      tech: 'React, React Three Fiber, Tailwind CSS, Node.js, Express.js',
      image: '/svg/projectkan1.jpeg',
      link: 'https://uas-react-galang.vercel.app',
    },
    {
      title: 'Ronco Musical',
      desc: 'A modern music web application that allows users to explore albums, manage playlists, and enjoy a responsive browsing experience with a clean and interactive interface.',
      tech: 'HTML5, CSS3, JavaScript',
      image: '/svg/projectkan2.jpeg',
      link: 'https://projectkan-html-ronco-musical.vercel.app/',
    },

    {
      title: 'LocalMart',
      desc: 'A scalable full-stack marketplace application featuring user authentication, product catalog management, shopping functionality, and RESTful API integration with PostgreSQL, delivering a responsive and seamless user experience.',
      tech: 'React, JavaScript, Tailwind CSS, Node.js, Express.js, PostgreSQL, DBeaver, REST API, Postman',
      image: '/svg/projectkan3.jpeg',
      frontend: 'https://github.com/galangmaulana15/localmart-frontend',
      backend: 'https://github.com/galangmaulana15/localmart-backend',
    },
    {
      title: 'Ethereal Commerce',
      desc: 'An immersive e-commerce concept wrapped in a futuristic holographic aesthetic — glassmorphism panels, neon gradients, and cinematic motion bring a dreamlike, sci-fi shopping experience to life.',
      tech: 'React, Tailwind CSS, JavaScript, Node.js, Express.js',
      image: '/svg/projectkan4.jpeg',
      link: 'https://github.com/galangmaulana15/ethereal-commerce',
    },
  ]

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-black/30 z-10 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">
            Featured Projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => {
            const link = proj.link || proj.frontend || proj.backend
            return (
            <div
              key={idx}
              className="project-hover rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 transition-all fade-up flex flex-col"
            >
              {/* 2. Bungkus Image dengan tag <a> agar bisa diklik */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group overflow-hidden h-56"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Efek overlay saat kursor diarahkan ke gambar */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <i className="fas fa-external-link-alt text-cyan-300 text-4xl transform scale-50 group-hover:scale-100 transition-transform duration-300"></i>
                </div>
              </a>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                    {/* Judul juga bisa diklik */}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj.title}
                    </a>
                  </h3>
                  <p className="text-gray-300 mt-2">{proj.desc}</p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {proj.tech}
                  </span>

                  {proj.frontend && proj.backend ? (
                    <div className="flex gap-2">
                      <a
                        href={proj.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                      >
                        <i className="fab fa-github mr-1"></i> Frontend
                      </a>
                      <a
                        href={proj.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                      >
                        <i className="fab fa-github mr-1"></i> Backend
                      </a>
                    </div>
                  ) : (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-300 transition-colors"
                      title="View Project"
                    >
                      <i
                        className={`text-xl ${link.includes('github.com') ? 'fab fa-github' : 'fas fa-globe'}`}
                      ></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const ResumeSection = () => {
  const resumes = [
    {
      title: 'Frontend Developer',
      desc: 'Specialized in building modern, responsive, and interactive user interfaces with React & Tailwind CSS.',
      file: '/cv/frontend-cv.pdf',
      icon: 'fas fa-palette',
      gradient: 'from-cyan-400 to-blue-500',
      shadow: 'shadow-cyan-500/30',
      tag: 'Frontend',
    },
    {
      title: 'Fullstack Web Developer',
      desc: 'End-to-end web development expertise from database design to pixel-perfect frontends.',
      file: '/cv/fullstack-cv.pdf',
      icon: 'fas fa-layer-group',
      gradient: 'from-purple-400 to-pink-500',
      shadow: 'shadow-purple-500/30',
      tag: 'Fullstack',
    },
  ]

  return (
    <section id="resume" className="py-24 px-6 md:px-12 z-10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Resume
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Download my professional resume</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resumes.map((cv, i) => (
            <div
              key={i}
              className="glass p-8 text-center hover-scale fade-up flex flex-col items-center gap-5"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cv.gradient} flex items-center justify-center shadow-lg ${cv.shadow}`}>
                <i className={`${cv.icon} text-3xl text-white`}></i>
              </div>
              <span className={`text-xs font-bold px-4 py-1 rounded-full bg-gradient-to-r ${cv.gradient} text-white`}>
                {cv.tag}
              </span>
              <h3 className="text-xl font-bold text-white">{cv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cv.desc}</p>
              <div className="flex gap-3 mt-auto pt-4">
                <a
                  href={cv.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 transition flex items-center gap-2"
                >
                  <i className="fas fa-eye"></i> View
                </a>
                <a
                  href={cv.file}
                  download
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium shadow-lg shadow-cyan-500/30 hover:scale-105 transition flex items-center gap-2"
                >
                  <i className="fas fa-download"></i> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CertificateModal = ({ cert, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  if (!cert) return null

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white text-xl hover:bg-red-500/80 hover:border-red-400 transition flex items-center justify-center z-10">
          <i className="fas fa-times"></i>
        </button>
        <img src={cert.image} alt={cert.title} className="max-w-full max-h-[85vh] rounded-xl shadow-2xl" />
        <h3 className="text-white text-xl font-bold mt-4 text-center">{cert.title}</h3>
      </div>
    </div>
  )
}

const CertificatesSection = () => {
  const [selected, setSelected] = useState(null)

  const certificates = [
    { title: 'Fullstack Web Developer', image: '/certificates/fullstack-web-developer.jpeg' },
    { title: 'React Lanjutan', image: '/certificates/react-lanjutan.jpeg' },
    { title: 'Fundamental React', image: '/certificates/fundamental-react.jpeg' },
    { title: 'HTML, CSS, JavaScript', image: '/certificates/html-css-js.jpeg' },
    { title: 'Git & GitHub', image: '/certificates/git-github.jpeg' },
    { title: 'Database', image: '/certificates/database.jpeg' },
    { title: 'Data Structure', image: '/certificates/data-structure.jpeg' },
    { title: 'Bahasa C', image: '/certificates/bahasa-c.jpeg' },
  ]

  return (
    <section id="certificates" className="py-24 px-6 md:px-12 bg-black/30 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Certificates
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Professional training & certifications</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="cert-card glass rounded-2xl overflow-hidden cursor-pointer fade-up"
              onClick={() => setSelected(cert)}
            >
              <div className="relative group overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
                  <i className="fas fa-search-plus text-cyan-300 text-3xl transform scale-50 group-hover:scale-100 transition-transform duration-300"></i>
                  <span className="text-cyan-300 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Certificate</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-sm text-center">{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selected && <CertificateModal cert={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 z-10 relative">
      <div className="max-w-5xl mx-auto glass p-8 md:p-12 text-center fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Connect With <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-gray-300 mb-10">
          Mari berkolaborasi untuk proyek visioner masa depan
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a
            href="mailto:galangponco123@gmail.com"
            className="flex flex-col items-center p-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400 transition"
          >
            <i className="fas fa-envelope text-3xl text-cyan-400 mb-2"></i>
            <span>Email</span>
            <span className="text-xs text-cyan-300">
              galangponco123@gmail.com
            </span>
          </a>
          <a
            href="https://wa.me/6282170714989"
            target="_blank"
            className="flex flex-col items-center p-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400 transition"
          >
            <i className="fab fa-whatsapp text-3xl text-green-400 mb-2"></i>
            <span>WhatsApp</span>
            <span className="text-xs">+62 821 7071 4989</span>
          </a>
          <a
            href="https://github.com/galangmaulana15"
            target="_blank"
            className="flex flex-col items-center p-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400 transition"
          >
            <i className="fab fa-github text-3xl text-gray-300 mb-2"></i>
            <span>GitHub</span>
            <span className="text-xs">/galangmaulana15</span>
          </a>
        </div>
      </div>
    </section>
  )
}

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    initStarsCanvas()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <WelcomeScreen show={showWelcome} onHide={() => setShowWelcome(false)} />
      <div className="relative z-10">
        <Navbar />
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <CertificatesSection />
        <ContactSection />
        <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10">
          © 2026 | Futuristic Portfolio | React + CSS Animations
        </footer>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
