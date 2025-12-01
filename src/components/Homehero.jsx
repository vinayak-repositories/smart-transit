import React from 'react'
import './Homehero.css'
import homeHeroVideo from '../assets/home-hero-video.mp4'
import AnimatedTooltipPreview from '../animations/Animatedtooltipdemo'
import CardNav from './CardNav'
import logo from '../assets/SMART.png'
const Homehero = () => {

const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

return (
    <>
    <section className='home-hero-landing'>
        <video
            className="home-hero-video-bg"
            src={homeHeroVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0,
            }}
        />

<CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />



        <div className="home-hero-overlay">
            <div className="left-content">
                <h1>Welcome to SmartTransit</h1>
                <p>Efficient, reliable, and smart transportation solutions.</p>
                <AnimatedTooltipPreview />
            </div>
            <div className="right-content">
                <form className="modern-login-form" style={{
                    background: 'rgba(255, 255, 255, 1)',
                    borderRadius: '24px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    minWidth: '320px',
                    backdropFilter: 'blur(12px)',
                }}>
                    <h2 style={{
                        fontWeight: 600,
                        fontSize: '2.5rem',
                        marginBottom: '8px',
                        color: '#000000ff',
                        letterSpacing: '-1px',
                    }}>Admin Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        style={{
                            padding: '14px',
                            borderRadius: '12px',
                            border: '1px solid #e0e0e0',
                            fontSize: '1rem',
                            outline: 'none',
                            background: '#f7f7f7',
                            transition: 'border 0.2s',
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={{
                            padding: '14px',
                            borderRadius: '12px',
                            border: '1px solid #e0e0e0',
                            fontSize: '1rem',
                            outline: 'none',
                            background: '#f7f7f7',
                            transition: 'border 0.2s',
                        }}
                    />
                    <button
                        type="button"
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#0071e3',
                            fontWeight: 500,
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontSize: '0.98rem',
                            marginBottom: '8px',
                            padding: 0,
                        }}
                    >
                        Forgot password?
                    </button>
                    <button
                        type="submit"
                        style={{
                            background: 'linear-gradient(90deg,#0071e3 0%,#2997ff 100%)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '14px',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                            transition: 'background 0.2s',
                        }}
                    >
                        Login
                    </button>
                    <div style={{
                        marginTop: '12px',
                        textAlign: 'center',
                        color: '#333',
                        fontSize: '0.98rem'
                    }}>
                        <span>Don't have an account?</span>
                        <button
                            type="button"
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#0071e3',
                                fontWeight: 500,
                                cursor: 'pointer',
                                fontSize: '0.98rem',
                                marginLeft: '6px',
                                padding: 0,
                                textDecoration: 'underline'
                            }}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
)
}

export default Homehero