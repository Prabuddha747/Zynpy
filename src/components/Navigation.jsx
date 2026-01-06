import { motion } from 'framer-motion'
import './Navigation.css'

const Navigation = ({ scrollY }) => {
  const isScrolled = scrollY > 50

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

        <motion.button
          className="nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download App
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navigation

