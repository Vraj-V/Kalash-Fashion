import { useState, useMemo } from 'react'
import { Box, Button, ButtonGroup, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import {
    Chart as ChartJS,
    CategoryScale, LinearScale, BarElement, LineElement,
    PointElement, Title, Tooltip, Legend, Filler,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale, LinearScale, BarElement, LineElement,
    PointElement, Title, Tooltip, Legend, Filler
)

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

// ── helpers ────────────────────────────────────────────────────────────────
const getMonth = (dateStr) => new Date(dateStr).getMonth()  // 0-11

const buildMonthlyData = (orders) => {
    const revenue   = Array(12).fill(0)
    const cost      = Array(12).fill(0)
    const salesQty  = Array(12).fill(0)
    const purchaseQty = Array(12).fill(0)

    orders.forEach((order) => {
        if (!order.createdAt) return
        const m = getMonth(order.createdAt)
        const total = order.total || 0
        const qty = order.item?.reduce((s, i) => s + (i.quantity || 0), 0) || 0

        if (order.status !== 'Cancelled') {
            revenue[m] += total
            salesQty[m] += qty
            // estimate cost as 70% of revenue (no purchase data in seed)
            cost[m] += total * 0.7
            purchaseQty[m] += qty
        }
    })

    const profit = revenue.map((r, i) => +(r - cost[i]).toFixed(2))

    return { revenue, cost, profit, salesQty, purchaseQty }
}

const chartOptions = (title) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: 'top' },
        title: { display: false },
        tooltip: { mode: 'index', intersect: false },
    },
    scales: {
        x: { grid: { display: false } },
        y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,0.05)' },
        },
    },
})

// ── Chart 1: Profit / Loss ─────────────────────────────────────────────────
const ProfitLossChart = ({ data }) => {
    const [mode, setMode] = useState('amount')  // 'amount' | 'quantity'

    const chartData = useMemo(() => {
        const isAmount = mode === 'amount'
        const values = isAmount ? data.profit : data.salesQty.map((s, i) => s - data.purchaseQty[i])
        return {
            labels: MONTHS,
            datasets: [{
                label: isAmount ? 'Profit / Loss (₹)' : 'Net Quantity',
                data: values,
                backgroundColor: values.map(v => v >= 0 ? 'rgba(46,125,50,0.7)' : 'rgba(183,28,28,0.7)'),
                borderColor:     values.map(v => v >= 0 ? '#2e7d32' : '#b71c1c'),
                borderWidth: 1.5,
                borderRadius: 6,
            }],
        }
    }, [mode, data])

    return (
        <Paper elevation={2} sx={{ p: 3, flex: 1, minWidth: 0 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap" gap={1}>
                <Stack>
                    <Typography variant="h6" fontWeight={600}>Profit / Loss Trend</Typography>
                    <Typography variant="caption" color="text.secondary">Month-wise breakdown</Typography>
                </Stack>
                <ButtonGroup size="small" variant="outlined">
                    <Button
                        onClick={() => setMode('amount')}
                        variant={mode === 'amount' ? 'contained' : 'outlined'}
                        sx={{ textTransform: 'none' }}
                    >
                        Amount (₹)
                    </Button>
                    <Button
                        onClick={() => setMode('quantity')}
                        variant={mode === 'quantity' ? 'contained' : 'outlined'}
                        sx={{ textTransform: 'none' }}
                    >
                        Quantity
                    </Button>
                </ButtonGroup>
            </Stack>
            <Box sx={{ height: 280 }}>
                <Bar data={chartData} options={chartOptions('Profit / Loss')} />
            </Box>
        </Paper>
    )
}

// ── Chart 2: Sales & Purchase ──────────────────────────────────────────────
const SalesPurchaseChart = ({ data }) => {
    const [mode, setMode] = useState('both')  // 'both' | 'sales' | 'purchase'

    const chartData = useMemo(() => {
        const datasets = []

        if (mode === 'both' || mode === 'sales') {
            datasets.push({
                label: 'Sales (₹)',
                data: data.revenue,
                borderColor: '#1565c0',
                backgroundColor: 'rgba(21,101,192,0.12)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
            })
        }

        if (mode === 'both' || mode === 'purchase') {
            datasets.push({
                label: 'Purchase Cost (₹)',
                data: data.cost,
                borderColor: '#e65100',
                backgroundColor: 'rgba(230,81,0,0.10)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
            })
        }

        return { labels: MONTHS, datasets }
    }, [mode, data])

    return (
        <Paper elevation={2} sx={{ p: 3, flex: 1, minWidth: 0 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap" gap={1}>
                <Stack>
                    <Typography variant="h6" fontWeight={600}>Sales & Purchase</Typography>
                    <Typography variant="caption" color="text.secondary">Month-wise revenue vs cost</Typography>
                </Stack>
                <ButtonGroup size="small" variant="outlined">
                    <Button
                        onClick={() => setMode('both')}
                        variant={mode === 'both' ? 'contained' : 'outlined'}
                        sx={{ textTransform: 'none' }}
                    >
                        Both
                    </Button>
                    <Button
                        onClick={() => setMode('sales')}
                        variant={mode === 'sales' ? 'contained' : 'outlined'}
                        sx={{ textTransform: 'none' }}
                    >
                        Sales
                    </Button>
                    <Button
                        onClick={() => setMode('purchase')}
                        variant={mode === 'purchase' ? 'contained' : 'outlined'}
                        sx={{ textTransform: 'none' }}
                    >
                        Purchase
                    </Button>
                </ButtonGroup>
            </Stack>
            <Box sx={{ height: 280 }}>
                <Line data={chartData} options={chartOptions('Sales & Purchase')} />
            </Box>
        </Paper>
    )
}

// ── Main export ────────────────────────────────────────────────────────────
export const AdminCharts = ({ orders }) => {
    const theme = useTheme()
    const is800 = useMediaQuery(theme.breakpoints.down(800))

    const data = useMemo(() => buildMonthlyData(orders || []), [orders])

    return (
        <Stack
            direction={is800 ? 'column' : 'row'}
            gap={3}
            px={is800 ? 2 : 4}
        >
            <ProfitLossChart data={data} />
            <SalesPurchaseChart data={data} />
        </Stack>
    )
}
