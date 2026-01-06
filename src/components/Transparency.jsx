import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiSearch, HiSparkles, HiScale } from 'react-icons/hi'
import './Transparency.css'

const transparencyPoints = [
  {
    id: 1,
    title: "Fully Auditable",
    description: "Every transaction is recorded and can be reviewed at any time",
    Icon: HiSearch
  },
  {
    id: 2,
    title: "No Hidden Fees",
    description: "What you see is what you get. Complete transparency in all operations",
    Icon: HiSparkles
  },
  {
    id: 3,
    title: "Fair & Clear",
    description: "Everyone sees the same information, eliminating confusion and disputes",
    Icon: HiScale
  }
]

const Transparency = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="transparency" className="transparency-section" ref={ref}>
      <div className="transparency-container">
        <motion.div
          className="transparency-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title transparency-title">Transparency & Trust</h2>
          <p className="transparency-subtitle">
            Zynpy is transparent, auditable, and fair. Nothing is hidden, nothing is confusing.
          </p>
        </motion.div>
        
        <div className="transparency-grid">
          {transparencyPoints.map((point, index) => (
            <motion.div
              key={point.id}
              className="transparency-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="transparency-icon">
                <point.Icon size={56} />
              </div>
              <h3 className="transparency-point-title">{point.title}</h3>
              <p className="transparency-point-description">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Transparency

