import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'
import { Button, Typography, Box, useTheme } from '@mui/material'
import './FinalCTA.css'

const FinalCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const theme = useTheme()

  return (
    <Box
      component="section"
      className="final-cta"
      ref={ref}
      sx={{
        padding: { xs: '4rem 0', md: '8rem 0' },
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(124, 58, 237, 0.12))'
          : 'linear-gradient(135deg, rgba(79, 70, 229, 0.05), rgba(124, 58, 237, 0.05))',
      }}
    >
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
          <Typography
            variant="h2"
            component="h2"
            className="cta-headline"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2,
            }}
          >
            Make your next plan actually happen.
          </Typography>
          <Typography
            variant="body1"
            className="cta-subtext"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: 'text.secondary',
              marginBottom: '3rem',
              lineHeight: 1.7,
            }}
          >
            Download Zynpy today and experience stress-free group money management
          </Typography>
          
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
                  backgroundColor: 'background.paper',
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
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 1 }}>
                  <Typography variant="caption" sx={{ fontSize: '0.85rem', opacity: 0.7 }}>
                    Download for
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    Android
                  </Typography>
                </Box>
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
                  backgroundColor: 'background.paper',
                  borderColor: 'divider',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 1 }}>
                  <Typography variant="caption" sx={{ fontSize: '0.85rem', opacity: 0.7 }}>
                    Download for
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    iOS
                  </Typography>
                </Box>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Box>
  )
}

export default FinalCTA

