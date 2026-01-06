import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { FaRocket } from 'react-icons/fa'

const ComingSoonModal = ({ open, onClose, platform = 'App' }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: fullScreen ? 0 : 4,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1F2937, #111827)'
            : 'linear-gradient(135deg, #FFFFFF, #F9FAFB)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 20px 60px rgba(0, 0, 0, 0.5)'
            : '0 20px 60px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <FaRocket
              size={32}
              style={{
                color: theme.palette.primary.main,
              }}
            />
          </motion.div>
        </Box>
        <IconButton
          onClick={onClose}
          sx={{
            color: 'text.secondary',
            '&:hover': {
              color: 'text.primary',
              backgroundColor: 'action.hover',
            },
          }}
        >
          <HiX size={24} />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            textAlign: 'center',
            py: 2,
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Coming Soon!
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                mb: 3,
                fontWeight: 500,
              }}
            >
              {platform === 'Android'
                ? 'Zynpy for Android is launching soon!'
                : platform === 'iOS'
                ? 'Zynpy for iOS is launching soon!'
                : 'Zynpy app is launching soon!'}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              We're working hard to bring you the best group money management
              experience. Stay tuned for updates!
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScKpdvnOgR4mTCRSN40AmDgY4HmvBeaMzHYw-zK8dFWoGeu9Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 3,
                  py: 1.5,
                  borderRadius: 3,
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(79, 70, 229, 0.1)'
                    : 'rgba(79, 70, 229, 0.05)',
                  border: `1px solid ${theme.palette.primary.main}20`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(79, 70, 229, 0.2)'
                      : 'rgba(79, 70, 229, 0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
                  },
                }}
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaRocket size={20} style={{ color: theme.palette.primary.main }} />
                </motion.div>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                  }}
                >
                  Get notified when we launch
                </Typography>
              </Box>
            </Link>
          </motion.div>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ComingSoonModal

