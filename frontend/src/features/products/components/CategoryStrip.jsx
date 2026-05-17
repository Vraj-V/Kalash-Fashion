import { Box, CircularProgress, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = [
    {
        label: 'Lehenga',
        image: 'https://ik.imagekit.io/4sjmoqtje/tr:w-370,c-at_max/cdn/shop/files/mehendi-green-grace-with-classic-detail-sg373218-1_7c52c13c-8137-449d-8995-296382f3f548.jpg?v=1777378194',
    },
    {
        label: 'Chaniya Choli',
        image: 'https://i.pinimg.com/originals/89/97/04/8997043496cebf2f7d2313bcff7859aa.jpg',
    },
    {
        label: 'Saree',
        image: 'https://th.bing.com/th/id/R.f178b968de92806117ea1f844fcc851f?rik=2rlIFjMuMJHKFA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-CEpzYppQ55o%2fUMi-54j5_yI%2fAAAAAAAAFYI%2f6TJsTYx2scY%2fs1600%2fIndian%2bBridal%2bSarees%2b%2525283%252529.jpg&ehk=48t2498MFjmklRh3TCTYwWwEpjDxxH7k5%2b7IpaH3SP4%3d&risl=&pid=ImgRaw&r=0',
    },
]

const CategoryCard = ({ cat, isActive, onSelect }) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    return (
        <motion.div
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(isActive ? null : cat.label)}
            style={{ cursor: 'pointer', flex: 1, minWidth: 0 }}
        >
            <Box
                sx={{
                    width: '100%',
                    aspectRatio: '3/4',
                    borderRadius: 0,
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: isActive
                        ? '0 8px 40px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.10)'
                        : '0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)',
                    transition: 'box-shadow 0.3s ease',
                    backgroundColor: '#f5f5f5',
                }}
            >
                {/* spinner while loading */}
                {!loaded && !error && (
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{ position: 'absolute', inset: 0, zIndex: 1 }}
                    >
                        <CircularProgress size={28} thickness={4} sx={{ color: '#aaa' }} />
                    </Stack>
                )}

                {/* image */}
                <Box
                    component="img"
                    src={cat.image}
                    alt={cat.label}
                    onLoad={() => setLoaded(true)}
                    onError={() => { setError(true); setLoaded(true) }}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        display: 'block',
                        opacity: loaded ? 1 : 0,
                        transition: 'opacity 0.4s ease, transform 0.5s ease, filter 0.5s ease',
                        transformOrigin: 'center top',
                        '&:hover': {
                            transform: 'scale(1.07)',
                            filter: 'brightness(1.08)',
                        },
                    }}
                />

                {/* bottom shadow inside image — always visible, stronger on hover */}
                <Box
                    className="card-shadow"
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '55%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)',
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        px: 2,
                        py: 2.5,
                        zIndex: 2,
                    }}
                >
                    <Typography
                        sx={{
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.1rem' },
                            letterSpacing: '0.03em',
                            textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                            px: 0.5,
                        }}
                    >
                        {cat.label}
                    </Typography>
                </Box>

                {/* active tint overlay */}
                {isActive && (
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(120,60,100,0.15)',
                            pointerEvents: 'none',
                        }}
                    />
                )}
            </Box>
        </motion.div>
    )
}

export const CategoryStrip = ({ onSelect, selected }) => {
    const theme = useTheme()
    const is600 = useMediaQuery(theme.breakpoints.down(600))

    return (
        <Stack
            direction="row"
            alignItems="stretch"
            gap={is600 ? 1.5 : 2.5}
            py={is600 ? 2 : 3}
            px={is600 ? 2 : 8}
        >
            {categories.map((cat) => (
                <CategoryCard
                    key={cat.label}
                    cat={cat}
                    isActive={selected === cat.label}
                    onSelect={onSelect}
                />
            ))}
        </Stack>
    )
}
