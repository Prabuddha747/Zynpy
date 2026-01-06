import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { HiMoon, HiSun } from 'react-icons/hi'
import { Button, IconButton, useTheme as useMUITheme } from '@mui/material'
import ComingSoonModal from './ComingSoonModal'
import './Navigation.css'

const Navigation = ({ scrollY }) => {
  const isScrolled = scrollY > 50
  const { isDark, toggleTheme } = useTheme()
  const muiTheme = useMUITheme()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <motion.nav
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Zynpy</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#for-hosts">For Hosts</a></li>
          <li><a href="#transparency">Transparency</a></li>
          <li><a href="#support">Support</a></li>
        </ul>

        <div className="nav-actions">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              sx={{
                color: muiTheme.palette.text.primary,
                backgroundColor: muiTheme.palette.background.paper,
                '&:hover': {
                  backgroundColor: muiTheme.palette.action.hover,
                },
              }}
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </IconButton>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              onClick={() => setModalOpen(true)}
              sx={{
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4338CA, #6D28D9)',
                },
              }}
            >
              Download App
            </Button>
          </motion.div>
        </div>
      </div>
      <ComingSoonModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        platform="App"
      />
    </motion.nav>
  )
}

export default Navigation

