import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { Box, Typography, useTheme } from '@mui/material'
import './SocialProof.css'

const testimonials = [
  {
    id: 1,
    text: "No more awkward reminders",
    author: "Anurag",
    role: "College Event Organizer"
  },
  {
    id: 2,
    text: "Everyone knew where the money went",
    author: "Mayank",
    role: "Trip Planner"
  },
  {
    id: 3,
    text: "Our plan finally worked",
    author: "Vaishnavi",
    role: "Family Event Organizer"
  },
  {
    id: 4,
    text: "Transparent and stress-free",
    author: "Aditya",
    role: "Society Head"
  }
]

const SocialProof = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const theme = useTheme()

  return (
    <Box
      component="section"
      className="social-proof-section"
      ref={ref}
      sx={{
        padding: { xs: '4rem 0', md: '8rem 0' },
        background: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default,
        position: 'relative',
      }}
    >
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
            <Box
              key={testimonial.id}
              component={motion.div}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              sx={{
                background: theme.palette.background.paper,
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                  : '0 4px 20px rgba(0, 0, 0, 0.05)',
                border: `1px solid ${theme.palette.divider}`,
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 30px rgba(0, 0, 0, 0.5)'
                    : '0 8px 30px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <Box
                className="quote-icon"
                sx={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1.5rem',
                  color: theme.palette.primary.main,
                  opacity: theme.palette.mode === 'dark' ? 0.3 : 0.2,
                }}
              >
                <FaQuoteLeft size={48} />
              </Box>
              <Typography
                className="testimonial-text"
                sx={{
                  fontSize: '1.2rem',
                  color: 'text.primary',
                  fontWeight: 500,
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {testimonial.text}
              </Typography>
              <Box
                className="testimonial-author"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  paddingTop: '1rem',
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography
                  className="author-name"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    fontSize: '1rem',
                  }}
                >
                  {testimonial.author}
                </Typography>
                <Typography
                  className="author-role"
                  sx={{
                    fontSize: '0.9rem',
                    color: 'text.secondary',
                  }}
                >
                  {testimonial.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </div>
      </div>
    </Box>
  )
}

export default SocialProof

