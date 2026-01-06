import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'
import { Button } from '@mui/material'
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outlined"
                size="large"
                startIcon={<FaAndroid size={24} />}
                sx={{
                  minWidth: 200,
                  py: 1.5,
                  px: 2,
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'action.hover',
                  },
                  mb: { xs: 2, sm: 0 },
                  mr: { xs: 0, sm: 2 },
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 8 }}>
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Download for</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Android</span>
                </div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outlined"
                size="large"
                startIcon={<FaApple size={24} />}
                sx={{
                  minWidth: 200,
                  py: 1.5,
                  px: 2,
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 8 }}>
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Download for</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>iOS</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA

