import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Pagination, Paper, Select, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AddIcon from '@mui/icons-material/Add'
import { selectBrands } from '../../brands/BrandSlice'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { selectCategories } from '../../categories/CategoriesSlice'
import { ProductCard } from '../../products/components/ProductCard'
import { deleteProductByIdAsync, fetchProductsAsync, selectProductIsFilterOpen, selectProductTotalResults, selectProducts, toggleFilters, undeleteProductByIdAsync } from '../../products/ProductSlice'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ClearIcon from '@mui/icons-material/Clear'
import { ITEMS_PER_PAGE } from '../../../constants'

const sortOptions = [
    { name: 'Price: low to high', sort: 'price', order: 'asc' },
    { name: 'Price: high to low', sort: 'price', order: 'desc' },
]

export const AdminProducts = () => {
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState(null)
    const [page, setPage] = useState(1)

    const brands = useSelector(selectBrands)
    const categories = useSelector(selectCategories)
    const products = useSelector(selectProducts)
    const totalResults = useSelector(selectProductTotalResults)
    const isProductFilterOpen = useSelector(selectProductIsFilterOpen)
    const dispatch = useDispatch()
    const theme = useTheme()
    const is500 = useMediaQuery(theme.breakpoints.down(500))
    const is488 = useMediaQuery(theme.breakpoints.down(488))

    useEffect(() => { setPage(1) }, [totalResults])

    useEffect(() => {
        const finalFilters = { ...filters }
        finalFilters['pagination'] = { page, limit: ITEMS_PER_PAGE }
        finalFilters['sort'] = sort
        dispatch(fetchProductsAsync(finalFilters))
    }, [filters, sort, page])

    const handleBrandFilters = (e) => {
        const s = new Set(filters.brand || [])
        e.target.checked ? s.add(e.target.value) : s.delete(e.target.value)
        setFilters({ ...filters, brand: Array.from(s) })
        setPage(1)
    }

    const handleCategoryFilters = (e) => {
        const s = new Set(filters.category || [])
        e.target.checked ? s.add(e.target.value) : s.delete(e.target.value)
        setFilters({ ...filters, category: Array.from(s) })
        setPage(1)
    }

    const handleFilterClose = () => dispatch(toggleFilters())

    return (
        <>
        {/* filter sidebar */}
        <motion.div
            style={{ position: 'fixed', backgroundColor: 'white', height: '100vh', padding: '1rem', overflowY: 'scroll', width: is500 ? '100vw' : '30rem', zIndex: 500 }}
            variants={{ show: { left: 0 }, hide: { left: -500 } }}
            initial="hide"
            transition={{ ease: 'easeInOut', duration: 0.7, type: 'spring' }}
            animate={isProductFilterOpen ? 'show' : 'hide'}
        >
            <Stack mb="5rem" sx={{ overflowY: 'scroll' }}>
                <Typography variant="h5" fontWeight={600}>Filters</Typography>
                <IconButton onClick={handleFilterClose} style={{ position: 'absolute', top: 15, right: 15 }}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><ClearIcon /></motion.div>
                </IconButton>

                <Stack mt={3}>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<AddIcon />}><Typography>Brands</Typography></AccordionSummary>
                        <AccordionDetails sx={{ p: 0 }}>
                            <FormGroup>
                                {brands?.map((b) => (
                                    <motion.div key={b._id} style={{ width: 'fit-content' }} whileHover={{ x: 5 }}>
                                        <FormControlLabel sx={{ ml: 1 }} control={<Checkbox onChange={handleBrandFilters} value={b._id} />} label={b.name} />
                                    </motion.div>
                                ))}
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                </Stack>

                <Stack mt={2}>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<AddIcon />}><Typography>Category</Typography></AccordionSummary>
                        <AccordionDetails sx={{ p: 0 }}>
                            <FormGroup>
                                {categories?.map((c) => (
                                    <motion.div key={c._id} style={{ width: 'fit-content' }} whileHover={{ x: 5 }}>
                                        <FormControlLabel sx={{ ml: 1 }} control={<Checkbox onChange={handleCategoryFilters} value={c._id} />} label={c.name} />
                                    </motion.div>
                                ))}
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </Stack>
        </motion.div>

        <Stack rowGap={4} mt={3} mb="3rem" px={4}>
            {/* header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" fontWeight={600}>Product Management</Typography>
                <Button variant="contained" component={Link} to="/admin/add-product">+ Add Product</Button>
            </Stack>

            {/* sort */}
            <Stack direction="row" justifyContent="flex-end">
                <Stack width="12rem">
                    <FormControl fullWidth>
                        <InputLabel id="sort-dd">Sort</InputLabel>
                        <Select variant="standard" labelId="sort-dd" label="Sort" onChange={(e) => setSort(e.target.value)} value={sort}>
                            <MenuItem value={null}>Reset</MenuItem>
                            {sortOptions.map((o) => <MenuItem key={o.name} value={o}>{o.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Stack>
            </Stack>

            {/* product grid */}
            <Grid gap={2} container justifyContent="center">
                {products.map((product) => (
                    <Stack key={product._id}>
                        <Stack sx={{ opacity: product.isDeleted ? 0.7 : 1 }}>
                            <ProductCard id={product._id} title={product.title} thumbnail={product.thumbnail} brand={product.brand.name} price={product.price} isAdminCard={true} />
                        </Stack>
                        <Stack px={2} direction="row" justifyContent="flex-end" columnGap={is488 ? 1 : 2}>
                            <Button component={Link} to={`/admin/product-update/${product._id}`} variant="contained">Update</Button>
                            {product.isDeleted
                                ? <Button onClick={() => dispatch(undeleteProductByIdAsync(product._id))} color="error" variant="outlined">Un-delete</Button>
                                : <Button onClick={() => dispatch(deleteProductByIdAsync(product._id))} color="error" variant="outlined">Delete</Button>
                            }
                        </Stack>
                    </Stack>
                ))}
            </Grid>

            {/* pagination */}
            <Stack alignSelf={is488 ? 'center' : 'flex-end'} mr={is488 ? 0 : 5} rowGap={2}>
                <Pagination size={is488 ? 'medium' : 'large'} page={page} onChange={(e, p) => setPage(p)} count={Math.ceil(totalResults / ITEMS_PER_PAGE)} variant="outlined" shape="rounded" />
                <Typography textAlign="center">Showing {(page - 1) * ITEMS_PER_PAGE + 1} to {Math.min(page * ITEMS_PER_PAGE, totalResults)} of {totalResults} results</Typography>
            </Stack>
        </Stack>
        </>
    )
}
