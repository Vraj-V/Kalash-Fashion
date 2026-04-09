import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { banner3 } from '../assets'

export const WelcomePage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${banner3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        px: { xs: 3, md: 8 },
      }}
    >
      <Stack maxWidth="800px" textAlign="center" rowGap={2}>
        <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.3rem' }}>
          Kalash Fashion
        </Typography>
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 700 }}>
          Welcome to Kalash Fashion
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400 }}>
          Celebrate tradition with modern elegance. Discover curated festive collections, premium fabrics,
          and handcrafted designs made for every occasion.
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.85)' }}>
          10,000+ satisfied customers, 200+ exclusive designs, and nationwide delivery with fast turnaround.
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2} mt={2} flexWrap="wrap">
          <Button variant="contained" component={Link} to="/login" sx={{ px: 4 }}>
            Go to Login
          </Button>
          <Button variant="outlined" component={Link} to="/signup" sx={{ px: 4, color: 'white', borderColor: 'white' }}>
            Create Account
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
