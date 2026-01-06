import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Features.css'

const features = [
  {
    id: 1,
    title: "Transparent Contribution Tracking",
    description: "See exactly who has contributed and when, with real-time updates",
    icon: "👁️"
  },
  {
    id: 2,
    title: "Host-Controlled Validation",
    description: "Hosts have full control over payment verification and pool management",
    icon: "🎛️"
  },
  {
    id: 3,
    title: "Real-Time Activity Updates",
    description: "Get instant notifications when payments are made or validated",
    icon: "⚡"
  },
  {
    id: 4,
    title: "Financial Summaries & Reports",
    description: "Complete breakdowns and summaries for easy reconciliation",
    icon: "📊"
  },
  {
    id: 5,
    title: "UPI-First Workflow",
    description: "Built specifically for seamless UPI payment integration",
    icon: "💳"
  },
  {
    id: 6,
    title: "Smart Notifications",
    description: "Gentle reminders and updates without being intrusive",
    icon: "🔔"
  }
]

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="features-section" ref={ref}>
      <div className="features-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Features & Capabilities
        </motion.h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)" }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

