import { Box, Typography, Link, useTheme } from '@mui/material'
import './Footer.css'

const Footer = () => {
  const theme = useTheme()

  // shared gradient style (same as Zynpy)
  const gradientText = {
    background: 'linear-gradient(135deg, #4F46E5, rgb(124, 58, 237))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  return (
    <Box
      component="footer"
      id="support"
      className="footer"
      sx={{
        background: theme.palette.mode === 'dark' ? '#F9FAFB' : '#1F2937',
        padding: { xs: '3rem 0 1.5rem', md: '4rem 0 2rem' },
        position: 'relative',
      }}
    >
      <Box
        className="footer-container"
        sx={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}
      >
        <Box
          className="footer-content"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(200px, 1fr))' },
            gap: { xs: '2rem', md: '3rem' },
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <Box className="footer-section" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              className="footer-logo"
              sx={{
                ...gradientText,
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1rem',
              }}
            >
              Zynpy
            </Typography>

            <Typography
              variant="body2"
              className="footer-tagline"
              sx={{
                ...gradientText,
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              Plan together. Pool money. Pay without stress.
            </Typography>
          </Box>

          {/* Product */}
          <Box className="footer-section" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              className="footer-heading"
              sx={{
                ...gradientText,
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              Product
            </Typography>

            <Box
              component="ul"
              className="footer-links"
              sx={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <Link
                  href="#how-it-works"
                  sx={{ ...gradientText, textDecoration: 'none', fontSize: '0.95rem', '&:hover': { opacity: 0.85 } }}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  sx={{ ...gradientText, textDecoration: 'none', fontSize: '0.95rem', '&:hover': { opacity: 0.85 } }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#for-hosts"
                  sx={{ ...gradientText, textDecoration: 'none', fontSize: '0.95rem', '&:hover': { opacity: 0.85 } }}
                >
                  For Hosts
                </Link>
              </li>
              <li>
                <Link
                  href="#transparency"
                  sx={{ ...gradientText, textDecoration: 'none', fontSize: '0.95rem', '&:hover': { opacity: 0.85 } }}
                >
                  Transparency
                </Link>
              </li>
            </Box>
          </Box>

          {/* Support */}
          <Box className="footer-section" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              className="footer-heading"
              sx={{
                ...gradientText,
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              Support
            </Typography>

            <Box
              component="ul"
              className="footer-links"
              sx={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScKpdvnOgR4mTCRSN40AmDgY4HmvBeaMzHYw-zK8dFWoGeu9Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ ...gradientText, textDecoration: 'none', fontSize: '0.95rem', '&:hover': { opacity: 0.85 } }}
                >
                  Contact Us
                </Link>
              </li>
            </Box>
          </Box>
        </Box>

        {/* Bottom */}
        <Box
          className="footer-bottom"
          sx={{
            paddingTop: '2rem',
            borderTop: '1px solid rgb(124, 58, 237)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            className="footer-copyright"
            sx={{
              ...gradientText,
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
