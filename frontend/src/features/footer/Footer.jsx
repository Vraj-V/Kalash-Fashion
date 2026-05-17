import { Box, Divider, IconButton, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import { Link } from 'react-router-dom'
import { facebookPng, instagramPng, twitterPng, linkedinPng } from '../../assets'

export const Footer = () => {
    const theme = useTheme()
    const is700 = useMediaQuery(theme.breakpoints.down(700))
    const is480 = useMediaQuery(theme.breakpoints.down(480))

    const linkStyle = {
        fontWeight: 300,
        fontSize: '0.9rem',
        color: '#b0b0b0',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'color 0.2s',
    }

    const headingStyle = {
        fontWeight: 600,
        fontSize: '1rem',
        color: '#ffffff',
        letterSpacing: '0.5px',
        marginBottom: '0.5rem',
    }

    return (
        <Box sx={{ backgroundColor: '#111111', color: '#b0b0b0' }}>

            {/* main footer content */}
            <Stack
                direction={is700 ? 'column' : 'row'}
                flexWrap="wrap"
                justifyContent="space-between"
                px={is480 ? 2 : is700 ? 3 : 6}
                pt={5}
                pb={4}
                gap={4}
            >

                {/* brand + newsletter */}
                <Stack rowGap={1.5} maxWidth={260}>
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: '1.4rem' }}>
                        Kalash Fashion
                    </Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: '#b0b0b0' }}>
                        Discover the finest ethnic wear — lehengas, sarees, and more, delivered to your door.
                    </Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: '#fff', fontWeight: 500, mt: 1 }}>
                        Subscribe for exclusive offers
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="Enter your email"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: '#fff',
                                '& fieldset': { borderColor: '#444' },
                                '&:hover fieldset': { borderColor: '#888' },
                                '&.Mui-focused fieldset': { borderColor: '#fff' },
                            },
                            '& input::placeholder': { color: '#666', opacity: 1 },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton size="small" sx={{ color: '#fff' }}>
                                        <SendIcon fontSize="small" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>

                {/* support */}
                <Stack rowGap={1} minWidth={180}>
                    <Typography sx={headingStyle}>Support</Typography>
                    <Typography sx={{ fontSize: '0.88rem', color: '#b0b0b0' }}>
                        India
                    </Typography>
                    <Typography
                        component="a"
                        href="mailto:support@kalashfashion.com"
                        sx={{ ...linkStyle, '&:hover': { color: '#fff' } }}
                    >
                        support@kalashfashion.com
                    </Typography>
                    <Typography
                        component="a"
                        href="tel:+911234567890"
                        sx={{ ...linkStyle, '&:hover': { color: '#fff' } }}
                    >
                        +91 12345 67890
                    </Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: '#666', mt: 0.5 }}>
                        Mon – Sat, 10am – 7pm IST
                    </Typography>
                </Stack>

                {/* account */}
                <Stack rowGap={1} minWidth={140}>
                    <Typography sx={headingStyle}>Account</Typography>
                    {[
                        { label: 'My Profile', to: '/profile' },
                        { label: 'My Orders', to: '/orders' },
                        { label: 'Cart', to: '/cart' },
                        { label: 'Wishlist', to: '/wishlist' },
                    ].map(({ label, to }) => (
                        <Link key={label} to={to} style={linkStyle}>
                            <Typography
                                sx={{ fontSize: '0.88rem', color: '#b0b0b0', '&:hover': { color: '#fff' }, transition: 'color 0.2s' }}
                            >
                                {label}
                            </Typography>
                        </Link>
                    ))}
                </Stack>

                {/* quick links */}
                <Stack rowGap={1} minWidth={140}>
                    <Typography sx={headingStyle}>Quick Links</Typography>
                    {[
                        { label: 'Home', to: '/' },
                        { label: 'Contact Us', to: '/contact' },
                    ].map(({ label, to }) => (
                        <Link key={label} to={to} style={linkStyle}>
                            <Typography
                                sx={{ fontSize: '0.88rem', color: '#b0b0b0', '&:hover': { color: '#fff' }, transition: 'color 0.2s' }}
                            >
                                {label}
                            </Typography>
                        </Link>
                    ))}
                </Stack>

                {/* social */}
                <Stack rowGap={1.5} minWidth={140}>
                    <Typography sx={headingStyle}>Follow Us</Typography>
                    <Stack direction="row" gap={1}>
                        {[
                            { src: facebookPng,  alt: 'Facebook',  href: 'https://facebook.com' },
                            { src: instagramPng, alt: 'Instagram', href: 'https://instagram.com' },
                            { src: twitterPng,   alt: 'Twitter',   href: 'https://twitter.com' },
                            { src: linkedinPng,  alt: 'LinkedIn',  href: 'https://linkedin.com' },
                        ].map(({ src, alt, href }) => (
                            <Box
                                key={alt}
                                component="a"
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: 34, height: 34,
                                    borderRadius: '50%',
                                    border: '1px solid #444',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    transition: 'border-color 0.2s',
                                    '&:hover': { borderColor: '#fff' },
                                }}
                            >
                                <img src={src} alt={alt} style={{ width: 18, height: 18, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                            </Box>
                        ))}
                    </Stack>
                </Stack>

            </Stack>

            <Divider sx={{ borderColor: '#2a2a2a' }} />

            {/* bottom bar */}
            <Stack
                direction={is480 ? 'column' : 'row'}
                justifyContent="center"
                alignItems="center"
                px={is480 ? 2 : 6}
                py={2}
                gap={1}
            >
                <Typography sx={{ fontSize: '0.82rem', color: '#555', textAlign: 'center' }}>
                    &copy; Kalash Fashion {new Date().getFullYear()}. All rights reserved.
                </Typography>
            </Stack>

        </Box>
    )
}
