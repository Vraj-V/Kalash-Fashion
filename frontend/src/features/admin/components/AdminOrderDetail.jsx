import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
    Avatar, Box, Button, Chip, Divider, FormControl, IconButton,
    InputLabel, MenuItem, Paper, Rating, Select, Stack, TextField,
    Typography, useMediaQuery, useTheme
} from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import {
    getAllOrdersAsync, resetOrderUpdateStatus,
    selectOrderUpdateStatus, selectOrders, updateOrderByIdAsync
} from '../../order/OrderSlice'
import {
    fetchReviewsByProductIdAsync, selectReviews, selectReviewFetchStatus
} from '../../review/ReviewSlice'
import { axiosi } from '../../../config/axios'

const STATUS_OPTIONS = ['Pending', 'Dispatched', 'Out for delivery', 'Delivered', 'Cancelled']

const getStatusColor = (status) => {
    const map = {
        'Pending':          { bgcolor: '#dfc9f7', color: '#7c59a4' },
        'Dispatched':       { bgcolor: '#feed80', color: '#927b1e' },
        'Out for delivery': { bgcolor: '#AACCFF', color: '#4793AA' },
        'Delivered':        { bgcolor: '#b3f5ca', color: '#548c6a' },
        'Cancelled':        { bgcolor: '#fac0c0', color: '#cc6d72' },
    }
    return map[status] || {}
}

export const AdminOrderDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const theme = useTheme()
    const is600 = useMediaQuery(theme.breakpoints.down(600))

    const orders = useSelector(selectOrders)
    const orderUpdateStatus = useSelector(selectOrderUpdateStatus)

    const order = orders.find(o => o._id === id)

    // status edit
    const [editingStatus, setEditingStatus] = useState(false)
    const { register, handleSubmit } = useForm()

    // per-product reviews
    const [productReviews, setProductReviews] = useState({})   // { productId: [reviews] }
    const [adminReplies, setAdminReplies] = useState({})        // { reviewId: text }
    const [submittedReplies, setSubmittedReplies] = useState({}) // { reviewId: text }

    // customer message
    const [msgText, setMsgText] = useState('')

    useEffect(() => {
        if (!orders.length) dispatch(getAllOrdersAsync())
    }, [dispatch, orders.length])

    // fetch reviews for every product in the order
    useEffect(() => {
        if (!order) return
        const productIds = [...new Set(order.item.map(i => i.product._id || i.product))]
        productIds.forEach(async (pid) => {
            try {
                const res = await axiosi.get(`/reviews/product/${pid}`)
                setProductReviews(prev => ({ ...prev, [pid]: res.data }))
            } catch (_) {}
        })
    }, [order])

    useEffect(() => {
        if (orderUpdateStatus === 'fulfilled') {
            toast.success('Status updated')
            setEditingStatus(false)
            dispatch(resetOrderUpdateStatus())
        } else if (orderUpdateStatus === 'rejected') {
            toast.error('Error updating order status')
            dispatch(resetOrderUpdateStatus())
        }
    }, [orderUpdateStatus])

    const handleUpdateStatus = (data) => {
        dispatch(updateOrderByIdAsync({ ...data, _id: id }))
    }

    const handleSendReply = (reviewId) => {
        const text = adminReplies[reviewId]?.trim()
        if (!text) return
        // store reply locally (extend with a real API call if you add admin-reply to backend)
        setSubmittedReplies(prev => ({ ...prev, [reviewId]: text }))
        setAdminReplies(prev => ({ ...prev, [reviewId]: '' }))
        toast.success('Reply saved')
    }

    const handleSendMsg = () => {
        if (!msgText.trim()) return
        // placeholder — wire to a real notification/email API as needed
        toast.success('Message sent to customer')
        setMsgText('')
    }

    if (!order) {
        return (
            <Stack alignItems="center" justifyContent="center" minHeight="60vh">
                <Typography variant="h6" color="text.secondary">Loading order…</Typography>
            </Stack>
        )
    }

    const customer = order.address?.[0]
    const allReviews = Object.values(productReviews).flat()

    return (
        <Stack maxWidth={900} mx="auto" px={is600 ? 2 : 4} py={4} rowGap={3}>

            {/* back */}
            <Stack direction="row" alignItems="center" columnGap={1}>
                <IconButton onClick={() => navigate('/admin/orders')} size="small">
                    <ArrowBackIosNewOutlinedIcon fontSize="small" />
                </IconButton>
                <Typography variant="h6" fontWeight={600}>Order Detail</Typography>
            </Stack>

            {/* ── top card: product images + customer + status ── */}
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                <Stack direction={is600 ? 'column' : 'row'} columnGap={4} rowGap={3}>

                    {/* LEFT — product images */}
                    <Stack rowGap={2.5} minWidth={220} maxWidth={260}>
                        <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>
                            Products
                        </Typography>
                        {order.item.map((item, idx) => (
                            <Stack key={idx} rowGap={1}>
                                <Box
                                    component="img"
                                    src={item.product.thumbnail}
                                    alt={item.product.title}
                                    sx={{
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        bgcolor: '#f5f5f5',
                                    }}
                                />
                                <Typography variant="body2" fontWeight={500}>
                                    {item.product.title}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    Qty: {item.quantity} &nbsp;|&nbsp; ₹{item.product.price}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>

                    <Divider orientation={is600 ? 'horizontal' : 'vertical'} flexItem />

                    {/* RIGHT — customer info + status + message */}
                    <Stack rowGap={2.5} flex={1}>

                        {/* customer name */}
                        <Stack>
                            <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>
                                Customer
                            </Typography>
                            <Typography variant="body1" fontWeight={500}>
                                {customer?.fullName || 'N/A'}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {customer?.street}, {customer?.city}, {customer?.state} – {customer?.postalCode}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {customer?.phoneNumber}
                            </Typography>
                        </Stack>

                        <Divider />

                        {/* order meta */}
                        <Stack direction="row" flexWrap="wrap" gap={2}>
                            <Box>
                                <Typography variant="caption" color="text.secondary">Order ID</Typography>
                                <Typography variant="body2" fontFamily="monospace">{order._id}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" color="text.secondary">Date</Typography>
                                <Typography variant="body2">{new Date(order.createdAt).toDateString()}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" color="text.secondary">Payment</Typography>
                                <Typography variant="body2">{order.paymentMode}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" color="text.secondary">Total</Typography>
                                <Typography variant="body2" fontWeight={600}>₹{order.total}</Typography>
                            </Box>
                        </Stack>

                        <Divider />

                        {/* status update */}
                        <Stack rowGap={1}>
                            <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>
                                Status Update
                            </Typography>

                            {editingStatus ? (
                                <Stack
                                    component="form"
                                    noValidate
                                    onSubmit={handleSubmit(handleUpdateStatus)}
                                    direction="row"
                                    alignItems="center"
                                    columnGap={1}
                                >
                                    <FormControl size="small" sx={{ minWidth: 200 }}>
                                        <InputLabel>Status</InputLabel>
                                        <Select
                                            defaultValue={order.status}
                                            label="Status"
                                            {...register('status', { required: true })}
                                        >
                                            {STATUS_OPTIONS.map(opt => (
                                                <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <IconButton type="submit" color="success">
                                        <CheckCircleOutlinedIcon />
                                    </IconButton>
                                    <Button size="small" onClick={() => setEditingStatus(false)}>Cancel</Button>
                                </Stack>
                            ) : (
                                <Stack direction="row" alignItems="center" columnGap={1.5}>
                                    <Chip label={order.status} sx={getStatusColor(order.status)} />
                                    <IconButton size="small" onClick={() => setEditingStatus(true)}>
                                        <EditOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </Stack>
                            )}
                        </Stack>

                        <Divider />

                        {/* message to customer */}
                        <Stack rowGap={1}>
                            <Typography variant="subtitle2" color="text.secondary" fontWeight={600}>
                                Message to Customer
                            </Typography>
                            <Stack direction="row" columnGap={1} alignItems="flex-start">
                                <TextField
                                    multiline
                                    minRows={2}
                                    size="small"
                                    fullWidth
                                    placeholder="Write a message to the customer…"
                                    value={msgText}
                                    onChange={e => setMsgText(e.target.value)}
                                />
                                <IconButton color="primary" onClick={handleSendMsg} sx={{ mt: 0.5 }}>
                                    <SendOutlinedIcon />
                                </IconButton>
                            </Stack>
                        </Stack>

                    </Stack>
                </Stack>
            </Paper>

            {/* ── customer reviews ── */}
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="subtitle1" fontWeight={600} mb={2}>
                    Customer Reviews
                </Typography>

                {allReviews.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                        No reviews yet for the products in this order.
                    </Typography>
                ) : (
                    <Stack rowGap={3}>
                        {allReviews.map((review) => (
                            <Stack key={review._id} rowGap={1.5}>
                                <Stack direction="row" alignItems="center" columnGap={1.5}>
                                    <Avatar
                                        src={review.user?.profilePicture}
                                        sx={{ width: 36, height: 36 }}
                                    >
                                        {review.user?.name?.[0]?.toUpperCase()}
                                    </Avatar>
                                    <Stack>
                                        <Typography variant="body2" fontWeight={600}>
                                            {review.user?.name || 'Customer'}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {new Date(review.createdAt).toDateString()}
                                        </Typography>
                                    </Stack>
                                    <Rating value={review.rating} readOnly size="small" sx={{ ml: 'auto' }} />
                                </Stack>

                                <Typography variant="body2" color="text.primary" pl={0.5}>
                                    {review.comment}
                                </Typography>

                                {/* admin reply already submitted */}
                                {submittedReplies[review._id] && (
                                    <Box
                                        sx={{
                                            ml: 2, pl: 2,
                                            borderLeft: '3px solid',
                                            borderColor: 'primary.main',
                                            bgcolor: 'action.hover',
                                            borderRadius: 1,
                                            py: 1, px: 1.5
                                        }}
                                    >
                                        <Typography variant="caption" color="primary" fontWeight={600}>
                                            Admin Reply
                                        </Typography>
                                        <Typography variant="body2">{submittedReplies[review._id]}</Typography>
                                    </Box>
                                )}

                                {/* reply input */}
                                <Stack direction="row" columnGap={1} alignItems="flex-start" pl={1}>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        placeholder="Comment on this review…"
                                        value={adminReplies[review._id] || ''}
                                        onChange={e =>
                                            setAdminReplies(prev => ({ ...prev, [review._id]: e.target.value }))
                                        }
                                    />
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleSendReply(review._id)}
                                        sx={{ mt: 0.5 }}
                                    >
                                        <SendOutlinedIcon />
                                    </IconButton>
                                </Stack>

                                <Divider />
                            </Stack>
                        ))}
                    </Stack>
                )}
            </Paper>

        </Stack>
    )
}
