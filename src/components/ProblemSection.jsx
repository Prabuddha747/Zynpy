import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './ProblemSection.css'

const problems = [
  {
    id: 1,
    text: "Not knowing who has paid",
    icon: "❓"
  },
  {
    id: 2,
    text: "Confusion around pending amounts",
    icon: "😕"
  },
  {
    id: 3,
    text: "Lack of clarity on total collections",
    icon: "📊"
  },
  {
    id: 4,
    text: "No proper closure after group spending",
    icon: "🔚"
  }
]

const ProblemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="problem-section" ref={ref}>
      <div className="problem-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tired of the confusion?
        </motion.h2>
        
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.id}
              className="problem-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="problem-icon">{problem.icon}</div>
              <p className="problem-text">{problem.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection

