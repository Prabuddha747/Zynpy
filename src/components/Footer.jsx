import { Box, Typography, Link, useTheme } from '@mui/material'
import './Footer.css'

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      id="support"
      className="footer"
      sx={{
        background: theme.palette.mode === 'dark' ? '#111827' : '#1F2937',
        color: 'white',
        padding: { xs: '3rem 0 1.5rem', md: '4rem 0 2rem' },
        position: 'relative',
      }}
    >
      <Box className="footer-container" sx={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <Box
          className="footer-content"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(200px, 1fr))' },
            gap: { xs: '2rem', md: '3rem' },
            marginBottom: '3rem',
          }}
        >
          <Box className="footer-section" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              className="footer-logo"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Zynpy
            </Typography>
            <Typography
              variant="body2"
              className="footer-tagline"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              Plan together. Pool money. Pay without stress.
            </Typography>
          </Box>
          
          <Box className="footer-section" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              className="footer-heading"
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'white',
              }}
            >
              Product
            </Typography>
            <Box component="ul" className="footer-links" sx={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0 }}>
              <li><Link href="#how-it-works" sx={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: 'white' } }}>How It Works</Link></li>
              <li><Link href="#features" sx={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: 'white' } }}>Features</Link></li>
              <li><Link href="#for-hosts" sx={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: 'white' } }}>For Hosts</Link></li>
              <li><Link href="#transparency" sx={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: 'white' } }}>Transparency</Link></li>
            </Box>
          </Box>
          
          <Box className="footer-section" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              className="footer-heading"
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'white',
              }}
            >
              Support
            </Typography>
            <Box component="ul" className="footer-links" sx={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0 }}>
              <li>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScKpdvnOgR4mTCRSN40AmDgY4HmvBeaMzHYw-zK8dFWoGeu9Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.95rem', '&:hover': { color: 'white' } }}
                >
                  Contact Us
                </Link>
              </li>
            </Box>
          </Box>
        </Box>
        
        <Box
          className="footer-bottom"
          sx={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            className="footer-copyright"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem',
            }}
          >
            © 2025 Zynpy. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer

