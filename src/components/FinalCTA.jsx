import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './FinalCTA.css'

const FinalCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="final-cta" ref={ref}>
      <div className="cta-background">
        <div className="cta-gradient-orb orb-1"></div>
        <div className="cta-gradient-orb orb-2"></div>
      </div>
      
      <div className="cta-container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cta-headline">Make your next plan actually happen.</h2>
          <p className="cta-subtext">
            Download Zynpy today and experience stress-free group money management
          </p>
          
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.button
              className="download-btn android"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-icon">🤖</span>
              <div className="btn-content">
                <span className="btn-label">Download for</span>
                <span className="btn-platform">Android</span>
              </div>
            </motion.button>
            
            <motion.button
              className="download-btn ios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-icon">🍎</span>
              <div className="btn-content">
                <span className="btn-label">Download for</span>
                <span className="btn-platform">iOS</span>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA

