import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllOrdersAsync, resetOrderUpdateStatus, selectOrderUpdateStatus, selectOrders, updateOrderByIdAsync } from '../../order/OrderSlice'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Chip, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import {noOrdersAnimation} from '../../../assets/index'
import Lottie from 'lottie-react'


export const AdminOrders = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const orders=useSelector(selectOrders)
  const [editId, setEditId] = useState(null)
  const orderUpdateStatus=useSelector(selectOrderUpdateStatus)
  const theme=useTheme()
  const is1620=useMediaQuery(theme.breakpoints.down(1620))
  const is1200=useMediaQuery(theme.breakpoints.down(1200))
  const is820=useMediaQuery(theme.breakpoints.down(820))
  const is480=useMediaQuery(theme.breakpoints.down(480))

  const {register,handleSubmit,formState: { errors },} = useForm()

  useEffect(()=>{
    dispatch(getAllOrdersAsync())
  },[dispatch])


  useEffect(()=>{
    if(orderUpdateStatus==='fulfilled'){
      toast.success("Status udpated")
    }
    else if(orderUpdateStatus==='rejected'){
      toast.error("Error updating order status")
    }
  },[orderUpdateStatus])

  useEffect(()=>{
    return ()=>{
      dispatch(resetOrderUpdateStatus())
    }
  },[])


  const handleUpdateOrder=(data)=>{
    const update={...data,_id:editId}
    setEditId(null)
    dispatch(updateOrderByIdAsync(update))
  }


  const editOptions=['Pending','Dispatched','Out for delivery','Delivered','Cancelled']

  const getStatusColor=(status)=>{
    if(status==='Pending'){
      return {bgcolor:'#dfc9f7',color:'#7c59a4'}
    }
    else if(status==='Dispatched'){
      return {bgcolor:'#feed80',color:'#927b1e'}
    }
    else if(status==='Out for delivery'){
      return {bgcolor:'#AACCFF',color:'#4793AA'}
    }
    else if(status==='Delivered'){
      return {bgcolor:"#b3f5ca",color:"#548c6a"}
    }
    else if(status==='Cancelled'){
      return {bgcolor:"#fac0c0",color:'#cc6d72'}
    }
  }


  return (

    <Stack px={{ xs: 2, sm: 3, md: 4 }} py={4}>

      <Stack component={'form'} noValidate onSubmit={handleSubmit(handleUpdateOrder)}>

        {
          orders.length?
          <TableContainer sx={{ overflowX: 'auto', width: '100%' }} component={Paper} elevation={2}>
            <Table aria-label="simple table" sx={{ minWidth: 1100 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}>#</TableCell>
                  <TableCell sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}>Order ID</TableCell>
                  <TableCell sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}>Items</TableCell>
                  <TableCell sx={{ fontWeight: 700, whiteSpace: 'nowrap' }} align="right">Total (₹)</TableCell>
                  <TableCell sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}>Shipping Address</TableCell>
                  <TableCell sx={{ fontWeight: 700, whiteSpace: 'nowrap' }} align="center">Payment</TableCell>
                  <TableCell sx={{ fontWeight: 700, whiteSpace: 'nowrap' }} align="center">Order Date</TableCell>
                  <TableCell sx={{ fontWeight: 700, whiteSpace: 'nowrap' }} align="center">Status</TableCell>
                  <TableCell sx={{ fontWeight: 700, whiteSpace: 'nowrap' }} align="center">Edit</TableCell>
                  <TableCell sx={{ fontWeight: 700, whiteSpace: 'nowrap' }} align="center">Detail</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>

                {
                [...orders].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map((order,index) => (

                  <TableRow key={order._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                    <TableCell sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>{index + 1}</TableCell>
                    <TableCell sx={{ fontSize: '0.72rem', color: 'text.secondary', maxWidth: 130, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {order._id}
                    </TableCell>
                    <TableCell>
                      {
                        order.item.map((product, i)=>(
                          <Stack key={i} mt={1} flexDirection={'row'} alignItems={'center'} columnGap={1.5}>
                            <Avatar src={product.product.thumbnail} variant="rounded" sx={{ width: 40, height: 40 }} />
                            <Typography variant="body2" sx={{ maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {product.product.title}
                            </Typography>
                          </Stack>
                        ))
                      }
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>₹{order.total}</TableCell>
                    <TableCell>
                      <Stack>
                        <Typography variant="body2">{order.address[0].street}</Typography>
                        <Typography variant="body2">{order.address[0].city}</Typography>
                        <Typography variant="body2">{order.address[0].state}</Typography>
                        <Typography variant="body2">{order.address[0].postalCode}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="center">{order.paymentMode}</TableCell>
                    <TableCell align="center" sx={{ whiteSpace: 'nowrap', fontSize: '0.8rem' }}>{new Date(order.createdAt).toDateString()}</TableCell>

                    {/* order status */}
                    <TableCell align="center">
                        {
                          editId===order._id?(
                        <FormControl size="small" sx={{ minWidth: 160 }}>
                          <InputLabel id="demo-simple-select-label">Update status</InputLabel>
                          <Select
                            defaultValue={order.status}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Update status"
                            {...register('status',{required:'Status is required'})}
                            >
                            {
                              editOptions.map((option)=>(
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                              ))
                            }
                          </Select>
                        </FormControl>
                        ):<Chip label={order.status} sx={getStatusColor(order.status)}/>
                        }
                    </TableCell>

                    {/* actions */}
                    <TableCell align="center">
                      {
                        editId===order._id?(
                          <IconButton type='submit' color="success"><CheckCircleOutlinedIcon/></IconButton>
                        )
                        :
                        <IconButton onClick={()=>setEditId(order._id)}><EditOutlinedIcon/></IconButton>
                      }
                    </TableCell>

                    {/* detail */}
                    <TableCell align="center">
                      <Tooltip title="View order detail">
                        <IconButton onClick={()=>navigate(`/admin/orders/${order._id}`)}>
                          <MoreVertIcon/>
                        </IconButton>
                      </Tooltip>
                    </TableCell>

                  </TableRow>
                ))}

              </TableBody>
            </Table>
          </TableContainer>
          :
          <Stack width={is480?"auto":'30rem'} justifyContent={'center'}>
            <Stack rowGap={'1rem'}>
                <Lottie animationData={noOrdersAnimation}/>
                <Typography textAlign={'center'} alignSelf={'center'} variant='h6' fontWeight={400}>There are no orders currently</Typography>
            </Stack>
          </Stack>  
        }
    
    </Stack>
    
    </Stack>
  )
}
