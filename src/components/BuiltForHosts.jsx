import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCheckCircle, HiClock, HiStatusOnline } from 'react-icons/hi'
import './BuiltForHosts.css'

const hostFeatures = [
  {
    id: 1,
    title: "Control Validations",
    description: "Verify payments as they come in with full control",
    metric: "100%",
    label: "Control"
  },
  {
    id: 2,
    title: "Close Pools",
    description: "Finalize pools when ready and generate summaries",
    metric: "Instant",
    label: "Closure"
  },
  {
    id: 3,
    title: "Visibility Dashboard",
    description: "See totals, pending amounts, and member activity",
    metric: "Real-time",
    label: "Updates"
  }
]

const BuiltForHosts = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="for-hosts" className="built-for-hosts" ref={ref}>
      <div className="hosts-background">
        <div className="hosts-gradient"></div>
      </div>
      <div className="hosts-container">
        <motion.div
          className="hosts-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title hosts-title">Built for Hosts</h2>
          <p className="hosts-subtitle">
            Take full control of your group's money management with powerful tools designed for organizers
          </p>
        </motion.div>
        
        <div className="hosts-grid">
          {hostFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="host-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="host-metric">
                <span className="metric-value">{feature.metric}</span>
                <span className="metric-label">{feature.label}</span>
              </div>
              <h3 className="host-title">{feature.title}</h3>
              <p className="host-description">{feature.description}</p>
              <div className={`status-indicator ${index === 0 ? 'validated' : index === 1 ? 'pending' : 'active'}`}>
                {index === 0 ? (
                  <>
                    <HiCheckCircle size={16} style={{ marginRight: '4px' }} />
                    Validated
                  </>
                ) : index === 1 ? (
                  <>
                    <HiClock size={16} style={{ marginRight: '4px' }} />
                    Pending
                  </>
                ) : (
                  <>
                    <HiStatusOnline size={16} style={{ marginRight: '4px' }} />
                    Active
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuiltForHosts

