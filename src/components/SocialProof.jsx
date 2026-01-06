import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiQuote } from 'react-icons/hi'
import './SocialProof.css'

const testimonials = [
  {
    id: 1,
    text: "No more awkward reminders",
    author: "Sarah M.",
    role: "Event Organizer"
  },
  {
    id: 2,
    text: "Everyone knew where the money went",
    author: "Raj K.",
    role: "Trip Planner"
  },
  {
    id: 3,
    text: "Our plan finally worked",
    author: "Emma L.",
    role: "Group Coordinator"
  },
  {
    id: 4,
    text: "Transparent and stress-free",
    author: "Mike T.",
    role: "Community Leader"
  }
]

const SocialProof = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="social-proof-section" ref={ref}>
      <div className="social-proof-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Real Stories, Real Results
        </motion.h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="quote-icon">
                <HiQuote size={48} />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <span className="author-name">{testimonial.author}</span>
                <span className="author-role">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof

