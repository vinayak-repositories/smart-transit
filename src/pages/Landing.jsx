import React from 'react'
import './Landing.css'
import landingvideo from '../assets/home-hero-video.mp4'
import CardNav from '../components/CardNav'
import logo from '../assets/SMART.png'
import AnimatedTooltipPreview from '../animations/Animatedtooltipdemo'
import Whatarewe from '../components/Whatarewe'
import TicketFlip from '../components/TicketFlip'
import Realtimetracking from '../components/Realtimetracking'
import Payment from '../components/Payment'
import Whychooseus from '../components/Whychooseus'
import { GradientBarHeroSection } from '../components/GradientBarHeroSection'
const Landing = () => {

    
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
        <section className='landing-page-landing' style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <video
                className="landing-video-bg"
                src={landingvideo}
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

            <div style={{ position: 'relative', zIndex: 3 }}>
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
            </div>

            <div className='landing-video-overlay' style={{ position: 'relative', zIndex: 2 }}>
                <h1>Welcome to Smart Transit Admin Portal</h1>
                <p >Manage and monitor your transit operations efficiently.</p>
            </div>

            <div
                className='landing-stats-section'
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    width: '80%',
                }}
            >
                <div
                    className='landing-stats-content'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                    }}
                >
                    <div>
                        <AnimatedTooltipPreview />
                        <p style={{ margin: 0, fontSize: '1.2rem', color: '#ffffffff' }}>4.0⭐   (100 reviews)</p>
                    </div>
                    {/* <AnimatedTooltipPreview /> */}
                    <div>
                        <h2 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold', color: '#ffffffff' }}>55k+</h2>
                        <p style={{ margin: 0, fontSize: '1.2rem', color: '#ffffffff' }}>satisfied customers</p>
                    </div>
                    <div>
                        <h2 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold', color: '#ffffffff' }}>1k+</h2>
                        <p style={{ margin: 0, fontSize: '1.2rem', color: '#ffffffff' }}>safe journey</p>
                    </div>
                    <div>
                        <h2 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold', color: '#ffffffff' }}>100+</h2>
                        <p style={{ margin: 0, fontSize: '1.2rem', color: '#ffffffff' }}>routes available</p>
                    </div>
                </div>
            </div>
        </section>
        <Whatarewe/>
        <TicketFlip/>
        {/* <Realtimetracking/> */}
        <Payment/>
        <Whychooseus/>
        <GradientBarHeroSection/>
    </>
)
}

export default Landing