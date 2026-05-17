import {Grid, IconButton, Stack, Typography, useMediaQuery, useTheme, CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAsync, resetProductFetchStatus, selectProductFetchStatus, selectProductIsFilterOpen, selectProductTotalResults, selectProducts, toggleFilters } from '../ProductSlice'
import { ProductCard } from './ProductCard'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import { selectBrands } from '../../brands/BrandSlice'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { selectCategories } from '../../categories/CategoriesSlice'
import Pagination from '@mui/material/Pagination';
import { ITEMS_PER_PAGE } from '../../../constants'
import {createWishlistItemAsync, deleteWishlistItemByIdAsync, resetWishlistItemAddStatus, resetWishlistItemDeleteStatus, selectWishlistItemAddStatus, selectWishlistItemDeleteStatus, selectWishlistItems} from '../../wishlist/WishlistSlice'
import {selectLoggedInUser} from '../../auth/AuthSlice'
import {toast} from 'react-toastify'
import { resetCartItemAddStatus, selectCartItemAddStatus } from '../../cart/CartSlice'
import { motion } from 'framer-motion'
import { ProductBanner } from './ProductBanner'
import ClearIcon from '@mui/icons-material/Clear';
import { CategoryStrip } from './CategoryStrip'


const bannerImages=[
    'https://th.bing.com/th/id/R.cd66eb97266ccdb121243e439568c0d2?rik=pxWYA6s%2bmaHj5w&riu=http%3a%2f%2fwww.chinayabanaras.com%2fcdn%2fshop%2farticles%2fBlog_Banner_-291123-Lehenga_Styling_by_Chinaya-Banaras.jpg%3fv%3d1701261387&ehk=n8kkI0x8SW7p%2ftla0M7V%2bZk4tW%2fa4gPUvKEhQFFjet0%3d&risl=&pid=ImgRaw&r=0',
    'https://mnnsha.com/wp-content/uploads/2022/08/LEHENGA_BANNER-1.jpg',
    'https://cdn.shopify.com/s/files/1/0611/9017/6900/files/bridal_lehenga.webp?v=1745215420',
]

export const ProductList = () => {
    const [filters,setFilters]=useState({})
    const [page,setPage]=useState(1)
    const [selectedCategory,setSelectedCategory]=useState(null)
    const [isInitialLoad,setIsInitialLoad]=useState(true)
    const theme=useTheme()

    const is600=useMediaQuery(theme.breakpoints.down(600))
    const is500=useMediaQuery(theme.breakpoints.down(500))
    const is488=useMediaQuery(theme.breakpoints.down(488))

    const brands=useSelector(selectBrands)
    const categories=useSelector(selectCategories)
    const products=useSelector(selectProducts)
    const totalResults=useSelector(selectProductTotalResults)
    const loggedInUser=useSelector(selectLoggedInUser)

    const productFetchStatus=useSelector(selectProductFetchStatus)

    const wishlistItems=useSelector(selectWishlistItems)
    const wishlistItemAddStatus=useSelector(selectWishlistItemAddStatus)
    const wishlistItemDeleteStatus=useSelector(selectWishlistItemDeleteStatus)

    const cartItemAddStatus=useSelector(selectCartItemAddStatus)

    const isProductFilterOpen=useSelector(selectProductIsFilterOpen)

    const dispatch=useDispatch()

    const handleBrandFilters=(e)=>{
        const filterSet=new Set(filters.brand || [])
        if(e.target.checked){ filterSet.add(e.target.value) }
        else{ filterSet.delete(e.target.value) }
        setFilters({...filters, brand: Array.from(filterSet)})
        setPage(1)
    }

    const handleCategoryFilters=(e)=>{
        const filterSet=new Set(filters.category || [])
        if(e.target.checked){ filterSet.add(e.target.value) }
        else{ filterSet.delete(e.target.value) }
        setFilters({...filters, category: Array.from(filterSet)})
        setPage(1)
    }

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    },[])

    useEffect(()=>{
        setPage(1)
    },[totalResults])


    useEffect(()=>{
        const finalFilters={...filters}
        finalFilters['pagination']={page:page,limit:ITEMS_PER_PAGE}
        if(!loggedInUser?.isAdmin){
            finalFilters['user']=true
        }
        dispatch(fetchProductsAsync(finalFilters))
            .finally(()=>setIsInitialLoad(false))
    },[filters,page])


    const handleAddRemoveFromWishlist=(e,productId)=>{
        if(e.target.checked){
            const data={user:loggedInUser?._id,product:productId}
            dispatch(createWishlistItemAsync(data))
        }

        else if(!e.target.checked){
            const index=wishlistItems.findIndex((item)=>item.product._id===productId)
            dispatch(deleteWishlistItemByIdAsync(wishlistItems[index]._id));
        }
    }

    useEffect(()=>{
        if(wishlistItemAddStatus==='fulfilled'){
            toast.success("Product added to wishlist")
        }
        else if(wishlistItemAddStatus==='rejected'){
            toast.error("Error adding product to wishlist, please try again later")
        }

    },[wishlistItemAddStatus])

    useEffect(()=>{
        if(wishlistItemDeleteStatus==='fulfilled'){
            toast.success("Product removed from wishlist")
        }
        else if(wishlistItemDeleteStatus==='rejected'){
            toast.error("Error removing product from wishlist, please try again later")
        }
    },[wishlistItemDeleteStatus])

    useEffect(()=>{
        if(cartItemAddStatus==='fulfilled'){
            toast.success("Product added to cart")
        }
        else if(cartItemAddStatus==='rejected'){
            toast.error("Error adding product to cart, please try again later")
        }
        
    },[cartItemAddStatus])

    useEffect(()=>{
        if(productFetchStatus==='rejected'){
            toast.error("Error fetching products, please try again later")
        }
    },[productFetchStatus])

    useEffect(()=>{
        return ()=>{
            dispatch(resetProductFetchStatus())
            dispatch(resetWishlistItemAddStatus())
            dispatch(resetWishlistItemDeleteStatus())
            dispatch(resetCartItemAddStatus())
        }
    },[])


    const handleFilterClose=()=>{
        dispatch(toggleFilters())
    }

    const handleCategoryStripSelect=(label)=>{
        setSelectedCategory(label)
        if(label){
            // "Wedding" tile maps to Lehenga category (bridal lehengas)
            const searchName = label === 'Wedding' ? 'Lehenga' : label
            const matched=categories.find(c=>c.name.toLowerCase()===searchName.toLowerCase())
            if(matched){
                setFilters(prev=>({...prev,category:[matched._id]}))
            }
        } else {
            setFilters(prev=>{
                const next={...prev}
                delete next.category
                return next
            })
        }
        setPage(1)
    }

  return (
    <>
    {/* filters side bar */}

    {
        (productFetchStatus==='pending' && isInitialLoad)?
        <Stack width={'100%'} height={'calc(100vh - 4rem)'} justifyContent={'center'} alignItems={'center'}>
            <CircularProgress size={56} thickness={4} sx={{color:'#1a1a1a'}}/>
        </Stack>
        :
        <>
        <motion.div style={{position:"fixed",backgroundColor:"white",height:"100vh",padding:'1rem',overflowY:"scroll",width:is500?"100vw":"30rem",zIndex:500}}  variants={{show:{left:0},hide:{left:-500}}} initial={'hide'} transition={{ease:"easeInOut",duration:.7,type:"spring"}} animate={isProductFilterOpen===true?"show":"hide"}>

            {/* filters section */}
            <Stack mb={'5rem'}  sx={{scrollBehavior:"smooth",overflowY:"scroll"}}>

                <Typography variant='h4'>Filters</Typography>

                <IconButton onClick={handleFilterClose} style={{position:"absolute",top:15,right:15}} disableRipple sx={{'&:hover':{backgroundColor:'transparent'}}}>
                    <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
                        <ClearIcon fontSize='medium'/>
                    </motion.div>
                </IconButton>

                    {/* brand filters */}
                    <Stack mt={3}>
                        <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<AddIcon />}  aria-controls="brand-filters" id="brand-filters" >
                                    <Typography>Brands</Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{p:0}}>
                                <FormGroup>
                                    {
                                        brands?.map((brand)=>(
                                            <motion.div key={brand._id} style={{width:"fit-content"}} whileHover={{x:5}} whileTap={{scale:0.9}}>
                                                <FormControlLabel sx={{ml:1}} control={<Checkbox onChange={handleBrandFilters} value={brand._id}/>} label={brand.name} />
                                            </motion.div>
                                        ))
                                    }
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </Stack>

                    {/* category filters */}
                    <Stack mt={2}>
                        <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<AddIcon />}  aria-controls="category-filters" id="category-filters" >
                                    <Typography>Category</Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{p:0}}>
                                <FormGroup>
                                    {
                                        categories?.map((category)=>(
                                            <motion.div key={category._id} style={{width:"fit-content"}} whileHover={{x:5}} whileTap={{scale:0.9}}>
                                                <FormControlLabel sx={{ml:1}} control={<Checkbox onChange={handleCategoryFilters} value={category._id}/>} label={category.name} />
                                            </motion.div>
                                        ))
                                    }
                                </FormGroup>
                            </AccordionDetails>
                        </Accordion>
                    </Stack>
            </Stack>

        </motion.div>
        
        <motion.div
            style={{ marginLeft: 0 }}
            variants={{
                open:  { marginLeft: is500 ? 0 : '30rem' },
                closed: { marginLeft: 0 }
            }}
            initial='closed'
            animate={isProductFilterOpen && !is500 ? 'open' : 'closed'}
            transition={{ ease: 'easeInOut', duration: 0.7, type: 'spring' }}
        >
        <Stack mb={'3rem'}>
            

                {/* banners section */}
                {
                    !is600 && 
                <Stack sx={{width:"100%"}}>
                    <ProductBanner images={bannerImages}/>
                </Stack>
                }

                {/* category strip */}
                <CategoryStrip onSelect={handleCategoryStripSelect} selected={selectedCategory}/>

                {/* products */}
                <Stack rowGap={5} mt={is600?2:0} px={is600?3:8}>
                    
                    {/* product grid */}
                <Grid container spacing={2}>
                {
                    products.map((product)=>(
                        <Grid key={product._id} item xs={6} sm={6} md={isProductFilterOpen && !is500 ? 4 : 3}>
                            <ProductCard id={product._id} title={product.title} thumbnail={product.thumbnail} brand={product.brand.name} price={product.price} handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}/>
                        </Grid>
                            ))
                        }
                    </Grid>
                    
                    {/* pagination */}
                    <Stack alignSelf={is488?'center':'flex-end'} mr={is488?0:5} rowGap={2} p={is488?1:0}>
                        <Pagination size={is488?'medium':'large'} page={page}  onChange={(e,page)=>setPage(page)} count={Math.ceil(totalResults/ITEMS_PER_PAGE)} variant="outlined" shape="rounded" />
                        <Typography textAlign={'center'}>Showing {(page-1)*ITEMS_PER_PAGE+1} to {page*ITEMS_PER_PAGE>totalResults?totalResults:page*ITEMS_PER_PAGE} of {totalResults} results</Typography>
                    </Stack>    
                
                </Stack>
                
        </Stack>
        </motion.div>
        </>
    }

    </>
  )
}
