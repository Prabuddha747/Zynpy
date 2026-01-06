import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Plan together.<br />
              Pool money.<br />
              <span className="gradient-text">Pay without stress.</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtext"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Zynpy helps groups collect and manage money transparently, 
              without confusion, chasing people, or losing trust.
            </motion.p>
            
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="cta-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(79, 70, 229, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Download the App
              </motion.button>
              <motion.button
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See how it works
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="screen-content">
                  <div className="app-header"></div>
                  <div className="app-card card-1"></div>
                  <div className="app-card card-2"></div>
                  <div className="app-card card-3"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

