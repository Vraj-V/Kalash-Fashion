import {
    Chip, FormControl, IconButton, InputAdornment, InputLabel, MenuItem,
    Pagination, Paper, Select, Stack, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip, Typography,
} from '@mui/material'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const ROWS_PER_PAGE = 15

const STATUS_STYLE = {
    pending:    { bg: '#fff8e1', color: '#f57f17' },
    confirmed:  { bg: '#e3f2fd', color: '#1565c0' },
    dispatched: { bg: '#f3e5f5', color: '#6a1b9a' },
    shipped:    { bg: '#e8f5e9', color: '#2e7d32' },
    delivered:  { bg: '#e8f5e9', color: '#1b5e20' },
    cancelled:  { bg: '#ffebee', color: '#b71c1c' },
}

export const SalesRecords = ({ orders }) => {
    const [search, setSearch]         = useState('')
    const [statusFilter, setStatus]   = useState('all')
    const [categoryFilter, setCategory] = useState('all')
    const [page, setPage]             = useState(1)
    const navigate = useNavigate()

    // flatten orders → one row per order
    const rows = useMemo(() => {
        if (!orders?.length) return []
        return [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((o) => ({
            id:       o._id,
            date:     new Date(o.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
            customer: o.user?.name || '—',
            items:    o.item?.length || 0,
            total:    o.total || 0,
            status:   o.status || 'Pending',
            category: o.item?.[0]?.product?.category?.name || '—',
            products: o.item?.map(i => i.product?.title).join(', ') || '—',
        }))
    }, [orders])

    // unique categories from orders
    const categories = useMemo(() => {
        const set = new Set(rows.map(r => r.category).filter(c => c !== '—'))
        return Array.from(set)
    }, [rows])

    // filter + search
    const filtered = useMemo(() => {
        return rows.filter((r) => {
            const matchSearch = !search ||
                r.id.toLowerCase().includes(search.toLowerCase()) ||
                r.customer.toLowerCase().includes(search.toLowerCase()) ||
                r.products.toLowerCase().includes(search.toLowerCase())
            const matchStatus   = statusFilter === 'all' || r.status.toLowerCase() === statusFilter
            const matchCategory = categoryFilter === 'all' || r.category === categoryFilter
            return matchSearch && matchStatus && matchCategory
        })
    }, [rows, search, statusFilter, categoryFilter])

    const totalPages = Math.ceil(filtered.length / ROWS_PER_PAGE)
    const paginated  = filtered.slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE)

    const handleSearch = (e) => { setSearch(e.target.value); setPage(1) }
    const handleStatus = (e) => { setStatus(e.target.value); setPage(1) }
    const handleCategory = (e) => { setCategory(e.target.value); setPage(1) }

    return (
        <Stack rowGap={3} px={4} mb={5}>
            {/* heading */}
            <Stack>
                <Typography variant="h5" fontWeight={600}>Sales Records</Typography>
                <Typography variant="caption" color="text.secondary">
                    {filtered.length} record{filtered.length !== 1 ? 's' : ''} found
                </Typography>
            </Stack>

            {/* search + filters */}
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} alignItems="flex-start">
                <TextField
                    size="small"
                    placeholder="Search by order ID, customer or product…"
                    value={search}
                    onChange={handleSearch}
                    sx={{ flex: 2, minWidth: 220 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                />

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Status</InputLabel>
                    <Select value={statusFilter} label="Status" onChange={handleStatus}>
                        <MenuItem value="all">All Statuses</MenuItem>
                        {Object.keys(STATUS_STYLE).map(s => (
                            <MenuItem key={s} value={s} sx={{ textTransform: 'capitalize' }}>{s}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Category</InputLabel>
                    <Select value={categoryFilter} label="Category" onChange={handleCategory}>
                        <MenuItem value="all">All Categories</MenuItem>
                        {categories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                    </Select>
                </FormControl>
            </Stack>

            {/* table */}
            <TableContainer component={Paper} elevation={2}>
                <Table size="small">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                            {['#', 'Order ID', 'Date', 'Customer', 'Products', 'Items', 'Total (₹)', 'Status', 'Detail'].map((h, i) => (
                                <TableCell key={i} sx={{ fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>{h}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginated.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={9} align="center" sx={{ py: 4, color: 'text.secondary' }}>
                                    No records match your filters
                                </TableCell>
                            </TableRow>
                        ) : paginated.map((row, idx) => {
                            const statusKey = row.status.toLowerCase()
                            const style = STATUS_STYLE[statusKey] || STATUS_STYLE.pending
                            return (
                                <TableRow key={row.id} hover sx={{ '&:last-child td': { border: 0 } }}>
                                    <TableCell sx={{ color: 'text.secondary', fontSize: '0.88rem' }}>
                                        {(page - 1) * ROWS_PER_PAGE + idx + 1}
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '0.82rem', color: 'text.secondary', maxWidth: 130, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {row.id}
                                    </TableCell>
                                    <TableCell sx={{ whiteSpace: 'nowrap', fontSize: '0.88rem' }}>{row.date}</TableCell>
                                    <TableCell sx={{ fontSize: '0.88rem' }}>{row.customer}</TableCell>
                                    <TableCell sx={{ fontSize: '0.88rem', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {row.products}
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontSize: '0.88rem' }}>{row.items}</TableCell>
                                    <TableCell sx={{ fontWeight: 600, fontSize: '0.92rem' }}>₹{row.total.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.status}
                                            size="small"
                                            sx={{
                                                backgroundColor: style.bg,
                                                color: style.color,
                                                fontWeight: 700,
                                                fontSize: '0.8rem',
                                                border: `1px solid ${style.color}`,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="center" sx={{ p: 0 }}>
                                        <Tooltip title="View order detail">
                                            <IconButton size="small" onClick={() => navigate(`/admin/orders/${row.id}`)}>
                                                <MoreVertIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* pagination */}
            {totalPages > 1 && (
                <Stack alignItems="center" rowGap={1}>
                    <Pagination
                        page={page}
                        count={totalPages}
                        onChange={(_, p) => setPage(p)}
                        variant="outlined"
                        shape="rounded"
                    />
                    <Typography variant="caption" color="text.secondary">
                        Showing {(page - 1) * ROWS_PER_PAGE + 1}–{Math.min(page * ROWS_PER_PAGE, filtered.length)} of {filtered.length}
                    </Typography>
                </Stack>
            )}
        </Stack>
    )
}
