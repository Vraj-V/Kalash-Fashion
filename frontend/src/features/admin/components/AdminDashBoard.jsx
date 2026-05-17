import { Divider, Grid, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrdersAsync, selectOrders } from '../../order/OrderSlice'
import { AdminCharts } from './AdminCharts'
import { SalesRecords } from './SalesRecords'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

export const AdminDashBoard = () => {
    const orders = useSelector(selectOrders)
    const dispatch = useDispatch()
    const theme = useTheme()
    const is600 = useMediaQuery(theme.breakpoints.down(600))

    useEffect(() => { dispatch(getAllOrdersAsync()) }, [dispatch])

    const isSameDay = (date) => {
        const d = new Date(date), now = new Date()
        return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate()
    }

    const activeOrders = orders.filter(o => o.status !== 'Cancelled')
    const todayOrders  = orders.filter(o => isSameDay(o.createdAt) && o.status !== 'Cancelled')

    const totalSales = activeOrders.reduce((s, o) => s + (o.total || 0), 0)
    const todaySales = todayOrders.reduce((s, o) => s + (o.total || 0), 0)

    // avg profit % from discountPercentage across all sold items
    const allSoldItems = activeOrders.flatMap(o => o.item || [])
    const avgProfit = allSoldItems.length
        ? allSoldItems.reduce((s, i) => s + (i.product?.discountPercentage || 0), 0) / allSoldItems.length
        : 0

    const totalItemsToday = orders.filter(o => isSameDay(o.createdAt)).reduce((s, o) => s + (o.item?.reduce((a, i) => a + (i.quantity || 0), 0) || 0), 0)
    const pendingOrders = orders.filter(o => o.status === 'Pending').length

    return (
        <Stack rowGap={5} mt={is600 ? 2 : 5} mb="3rem">

            {/* stat cards */}
            <Grid container spacing={2} px={is600 ? 2 : 4}>

                {/* Total Sales card — split into Total | Today */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>

                        {/* top: profit badge */}
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={1.5}>
                            <Typography variant="subtitle2" color="text.secondary">Sales</Typography>
                            <Stack direction="row" alignItems="center" gap={0.4}
                                sx={{ bgcolor: '#e8f5e9', color: '#2e7d32', px: 1, py: 0.3, borderRadius: 2 }}>
                                <TrendingUpIcon sx={{ fontSize: '0.9rem' }} />
                                <Typography variant="caption" fontWeight={700}>
                                    {avgProfit.toFixed(1)}% avg margin
                                </Typography>
                            </Stack>
                        </Stack>

                        {/* divider row: Total | Today */}
                        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} gap={2}>
                            <Stack flex={1}>
                                <Typography variant="caption" color="text.secondary">Total</Typography>
                                <Typography variant="h6" color="#37c66e" fontWeight={700} noWrap>
                                    ₹{totalSales.toFixed(2)}
                                </Typography>
                            </Stack>
                            <Stack flex={1}>
                                <Typography variant="caption" color="text.secondary">Today</Typography>
                                <Typography variant="h6" color={todaySales > 0 ? '#1565c0' : 'text.secondary'} fontWeight={700} noWrap>
                                    {todaySales > 0 ? `₹${todaySales.toFixed(2)}` : '—'}
                                </Typography>
                            </Stack>
                        </Stack>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary">Total Ordered Items (Today)</Typography>
                        <Typography variant="h5" fontWeight={600}>{totalItemsToday}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="subtitle2" color="text.secondary">Total Customer Orders Pending</Typography>
                        <Typography variant="h5" fontWeight={600}>{pendingOrders}</Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* charts */}
            <AdminCharts orders={orders} />

            {/* sales records table */}
            <SalesRecords orders={orders} />

        </Stack>
    )
}
