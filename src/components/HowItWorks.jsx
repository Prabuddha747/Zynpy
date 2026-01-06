import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import './HowItWorks.css'

const steps = [
  {
    id: 1,
    title: "Create a pool",
    description: "Set up a money pool for your group event or plan",
    icon: "➕"
  },
  {
    id: 2,
    title: "Share with members",
    description: "Invite members and collect money through UPI",
    icon: "👥"
  },
  {
    id: 3,
    title: "Host validates payments",
    description: "Verify contributions as they come in",
    icon: "✅"
  },
  {
    id: 4,
    title: "Pool closes & summary",
    description: "Get a complete financial summary when done",
    icon: "📋"
  }
]

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section id="how-it-works" className="how-it-works" ref={ref}>
      <div className="how-it-works-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          How Zynpy Works
        </motion.h2>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`step-card ${activeStep === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { 
                opacity: activeStep === index ? 1 : 0.6,
                y: 0,
                scale: activeStep === index ? 1.05 : 1
              } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setActiveStep(index)}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {activeStep === index && (
                <motion.div
                  className="step-indicator"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="progress-bar">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${activeStep === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

