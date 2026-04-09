import React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { banner2 } from '../assets'

export const ContactPage = () => {
  return (
    <Stack minHeight="calc(100vh - 4rem)" alignItems="center" justifyContent="center" px={2} py={4}>
      <Paper elevation={1} sx={{ width: '100%', maxWidth: 1000, overflow: 'hidden' }}>
        <Box
          sx={{
            height: { xs: 220, md: 320 },
            backgroundImage: `url(${banner2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Stack p={3} rowGap={2}>
          <Typography variant="h4" fontWeight={600}>Contact Kalash Fashion</Typography>
          <Typography color="text.secondary">
            We are here to help with orders, sizing, and custom styling. Reach out anytime.
          </Typography>

          <Stack rowGap={1}>
            <Typography><strong>Email:</strong> support@kalashfashion.com</Typography>
            <Typography><strong>Phone:</strong> +91 72627 27774</Typography>
            <Typography><strong>Address:</strong> Kalash Fashion, Surat, Gujarat, India</Typography>
            <Typography><strong>Hours:</strong> Mon–Sat, 10:00 AM – 7:00 PM</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  )
}
