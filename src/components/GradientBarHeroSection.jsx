"use client"

import { useState } from "react"

// Custom SVG Icons
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

const Avatar = ({ imageSrc, delay }) => {
  return (
    <div className="avatar" style={{ animationDelay: `${delay}ms` }}>
      <img src={imageSrc || "/placeholder.svg"} alt="User avatar" />
      <div className="avatar-overlay"></div>
    </div>
  )
}

const TrustElements = () => {
  const avatars = [
    "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
  ]

  return (
    <div className="trust-elements">
      <div className="avatars-container">
        {avatars.map((avatar, index) => (
          <Avatar key={index} imageSrc={avatar} delay={index * 200} />
        ))}
      </div>
      <p className="trust-text" style={{ animationDelay: "800ms" }}>
        <span className="trust-number">2.4K</span> currently on the waitlist
      </p>
    </div>
  )
}

const WaitlistForm = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")

      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="waitlist-form-container">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="waitlist-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="email-input"
            required
          />
          <button type="submit" disabled={isSubmitting} className={`submit-button ${isSubmitting ? "submitting" : ""}`}>
            {isSubmitting ? <div className="spinner"></div> : "Join The Waitlist"}
          </button>
        </form>
      ) : (
        <div className="success-message">Thanks! We'll notify you when we launch.</div>
      )}
    </div>
  )
}

const GradientBars = () => {
  const [numBars] = useState(15)

  const calculateHeight = (index, total) => {
    const position = index / (total - 1)
    const maxHeight = 100
    const minHeight = 30

    const center = 0.5
    const distanceFromCenter = Math.abs(position - center)
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2)

    return minHeight + (maxHeight - minHeight) * heightPercentage
  }

  return (
    <div className="gradient-bars">
      <div className="bars-container">
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars)
          return (
            <div
              key={index}
              className="gradient-bar"
              style={{
                transform: `scaleY(${height / 100})`,
                animationDelay: `${index * 0.1}s`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <span className="brand-text">Preplex</span>
          </div>

          <div className="navbar-menu desktop-menu">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#vision" className="nav-link">
              Vision
            </a>
            <a href="#press" className="nav-link">
              Press
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <button className="nav-button">Join The Waitlist</button>
          </div>

          <div className="mobile-menu-toggle">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <a href="#features" className="mobile-nav-link">
                Features
              </a>
              <a href="#vision" className="mobile-nav-link">
                Vision
              </a>
              <a href="#press" className="mobile-nav-link">
                Press
              </a>
              <a href="#contact" className="mobile-nav-link">
                Contact
              </a>
              <button className="mobile-nav-button">Join The Waitlist</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export const GradientBarHeroSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseBar {
          0% { transform: scaleY(var(--scale)) scaleX(1); }
          100% { transform: scaleY(calc(var(--scale) * 1.2)) scaleX(1.05); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1.5rem;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background-color: rgba(198, 82, 82, 0.69);
        }

        .gradient-bars {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        .bars-container {
          display: flex;
          height: 100%;
          width: 100%;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .gradient-bar {
          flex: 1 0 calc(100% / 15);
          max-width: calc(100% / 15);
          height: 100%;
          background: linear-gradient(to top, #e63946, transparent);
          transform-origin: bottom;
          transition: transform 0.5s ease-in-out;
          animation: pulseBar 2s ease-in-out infinite alternate;
          outline: 1px solid rgba(0, 0, 0, 0);
          box-sizing: border-box;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: transparent;
          padding: 1.5rem;
        }

        .navbar-container {
          max-width: 80rem;
          margin: 0 auto;
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand-text {
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          letter-spacing: -0.025em;
          font-family: 'Space Grotesk', sans-serif;
        }

        .desktop-menu {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
          }
          .mobile-menu-toggle {
            display: none;
          }
        }

        .nav-link {
          color: rgb(209, 213, 219);
          text-decoration: none;
          transition: color 0.3s;
          font-family: 'Space Grotesk', sans-serif;
        }

        .nav-link:hover {
          color: white;
        }

        .nav-button {
          background: white;
          color: black;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Space Grotesk', sans-serif;
        }

        .nav-button:hover {
          background: rgb(243, 244, 246);
          transform: scale(1.05);
        }

        .menu-button {
          color: white;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu {
          margin-top: 1rem;
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 0.5rem;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          color: rgb(209, 213, 219);
          text-decoration: none;
          padding: 0.5rem 0;
          transition: color 0.3s;
          font-family: 'Space Grotesk', sans-serif;
        }

        .mobile-nav-link:hover {
          color: white;
        }

        .mobile-nav-button {
          background: white;
          color: black;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
        }

        .mobile-nav-button:hover {
          background: rgb(243, 244, 246);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          width: 100%;
          max-width: 64rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem 0;
        }

        .trust-elements {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(17, 24, 39, 0.6);
          backdrop-filter: blur(8px);
          border-radius: 9999px;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          margin-bottom: 2rem;
        }

        .avatars-container {
          display: flex;
          margin-left: -0.5rem;
        }

        .avatar {
          position: relative;
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 9999px;
          overflow: hidden;
          border: 2px solid rgb(55, 65, 81);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
          margin-left: -0.5rem;
        }

        @media (min-width: 640px) {
          .avatar {
            height: 2rem;
            width: 2rem;
            margin-left: -0.75rem;
          }
          .avatars-container {
            margin-left: -0.75rem;
          }
        }

        @media (min-width: 768px) {
          .avatar {
            height: 2.5rem;
            width: 2.5rem;
          }
        }

        .avatar img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .avatar-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
        }

        .trust-text {
          color: white;
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
          white-space: nowrap;
          font-family: 'Space Grotesk', sans-serif;
        }

        .trust-number {
          color: white;
          font-weight: 600;
        }

        .hero-title {
          width: 100%;
          color: white;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin-bottom: 2rem;
          animation: fadeIn 0.8s ease-out;
          padding: 0 1rem;
        }

        .title-line-1 {
          display: block;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: clamp(1.5rem, 6vw, 3.75rem);
          white-space: nowrap;
        }

        .title-line-2 {
          display: block;
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          font-size: clamp(1.5rem, 6vw, 3.75rem);
          white-space: nowrap;
        }

        .hero-description {
          margin-bottom: 2.5rem;
          padding: 0 1rem;
        }

        .description-text {
          font-size: clamp(1rem, 3vw, 1.5rem);
          color: rgb(156, 163, 175);
          line-height: 1.6;
          animation: fadeIn 0.8s ease-out;
          font-family: 'Space Grotesk', sans-serif;
        }

        .waitlist-form-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 32rem;
          margin-bottom: 2rem;
          padding: 0 1rem;
        }

        .waitlist-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 640px) {
          .waitlist-form {
            flex-direction: row;
          }
        }

        .email-input {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid rgb(55, 65, 81);
          color: white;
          font-size: 0.875rem;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          transition: all 0.3s;
          font-family: 'Space Grotesk', sans-serif;
          outline: none;
        }

        .email-input:focus {
          border-color: white;
        }

        .email-input::placeholder {
          color: rgb(156, 163, 175);
        }

        @media (min-width: 640px) {
          .email-input {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }

        .submit-button {
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          transition: all 0.3s;
          white-space: nowrap;
          font-size: 0.875rem;
          font-family: 'Space Grotesk', sans-serif;
          border: none;
          cursor: pointer;
          background: white;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submit-button:hover:not(.submitting) {
          background: rgb(243, 244, 246);
          transform: scale(1.05);
        }

        .submit-button.submitting {
          background: rgb(75, 85, 99);
          color: rgb(209, 213, 219);
          cursor: not-allowed;
        }

        @media (min-width: 640px) {
          .submit-button {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }

        .spinner {
          height: 1rem;
          width: 1rem;
          border: 2px solid rgb(209, 213, 219);
          border-top: 2px solid black;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @media (min-width: 640px) {
          .spinner {
            height: 1.25rem;
            width: 1.25rem;
          }
        }

        .success-message {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: rgb(134, 239, 172);
          border-radius: 9999px;
          padding: 0.75rem 1.5rem;
          text-align: center;
          animation: fadeIn 0.5s ease-out;
          font-size: 0.875rem;
          font-family: 'Space Grotesk', sans-serif;
        }

        @media (min-width: 640px) {
          .success-message {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-link {
          color: rgb(107, 114, 128);
          transition: color 0.3s;
          text-decoration: none;
        }

        .social-link:hover {
          color: rgb(209, 213, 219);
        }

        .social-link svg {
          width: 1.25rem;
          height: 1.25rem;
        }

        @media (min-width: 640px) {
          .social-link svg {
            width: 1.375rem;
            height: 1.375rem;
          }
        }

        @media (min-width: 768px) {
          .navbar {
            padding: 1.5rem 3rem;
          }
          .hero-section {
            padding: 0 3rem;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-background"></div>
        <GradientBars />
        {/* <Navbar /> */}

        <div className="hero-content">
          {/* <div style={{ marginBottom: "2rem" }}>
            <TrustElements />
          </div> */}

          <h1 className="hero-title">
            <span className="title-line-1">Ready To Transform,</span>
            <span className="title-line-2">your transit experience.</span>
          </h1>

          <div className="hero-description">
            <p className="description-text" style={{ animationDelay: "200ms" }}>
              Be the first to know when we launch.
            </p>
            <p className="description-text" style={{ animationDelay: "300ms" }}>
              Join the waitlist and get exclusive early access.
            </p>
          </div>

          <WaitlistForm />

          
        </div>
      </section>
    </>
  )
}
