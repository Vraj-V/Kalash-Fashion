import { Stack, TextField, Typography ,Button, Menu, MenuItem, Select, Grid, FormControl, Radio, Paper, IconButton, Box, useTheme, useMediaQuery} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React, { useEffect, useState } from 'react'
import { Cart } from '../../cart/components/Cart'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addAddressAsync, selectAddressStatus, selectAddresses } from '../../address/AddressSlice'
import { selectLoggedInUser } from '../../auth/AuthSlice'
import { Link, useNavigate } from 'react-router-dom'
import { createOrderAsync, selectCurrentOrder, selectOrderStatus } from '../../order/OrderSlice'
import { resetCartByUserIdAsync, selectCartItems } from '../../cart/CartSlice'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SHIPPING, TAXES } from '../../../constants'
import {motion} from 'framer-motion'
import { createRazorpayOrder, verifyRazorpayPayment } from '../../payment/PaymentApi'
import { toast } from 'react-toastify'


export const Checkout = () => {

    const status=''
    const addresses=useSelector(selectAddresses)
    const [selectedAddress,setSelectedAddress]=useState(addresses[0])
    const [selectedPaymentMethod,setSelectedPaymentMethod]=useState('COD')
    const [isRazorpayLoading,setIsRazorpayLoading]=useState(false)
    const { register, handleSubmit, watch, reset,formState: { errors }} = useForm()
    const dispatch=useDispatch()
    const loggedInUser=useSelector(selectLoggedInUser)
    const addressStatus=useSelector(selectAddressStatus)
    const navigate=useNavigate()
    const cartItems=useSelector(selectCartItems)
    const orderStatus=useSelector(selectOrderStatus)
    const currentOrder=useSelector(selectCurrentOrder)
    const orderTotal=cartItems.reduce((acc,item)=>(item.product.price*item.quantity)+acc,0)
    const theme=useTheme()
    const is900=useMediaQuery(theme.breakpoints.down(900))
    const is480=useMediaQuery(theme.breakpoints.down(480))
    
    useEffect(()=>{
        if(addressStatus==='fulfilled'){
            reset()
        }
        else if(addressStatus==='rejected'){
            alert('Error adding your address')
        }
    },[addressStatus])

    useEffect(()=>{
        if(currentOrder && currentOrder?._id){
            dispatch(resetCartByUserIdAsync(loggedInUser?._id))
            navigate(`/order-success/${currentOrder?._id}`)
        }
    },[currentOrder])
    
    const handleAddAddress=(data)=>{
        const address={...data,user:loggedInUser._id}
        dispatch(addAddressAsync(address))
    }

    const loadRazorpayScript=()=> {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve(true)
                return
            }
            const script = document.createElement('script')
            script.src = 'https://checkout.razorpay.com/v1/checkout.js'
            script.onload = () => resolve(true)
            script.onerror = () => resolve(false)
            document.body.appendChild(script)
        })
    }

    const handleCreateOrder=async()=>{
        const totalAmount=orderTotal+SHIPPING+TAXES
        if(selectedPaymentMethod==='COD'){
            const order={user:loggedInUser._id,item:cartItems,address:selectedAddress,paymentMode:selectedPaymentMethod,total:totalAmount}
            dispatch(createOrderAsync(order))
            return
        }

        if(selectedPaymentMethod==='UPI'){
            setIsRazorpayLoading(true)
            const scriptLoaded = await loadRazorpayScript()
            if(!scriptLoaded){
                toast.error("Razorpay SDK failed to load")
                setIsRazorpayLoading(false)
                return
            }

            try{
                const razorpayOrder = await createRazorpayOrder({amount: totalAmount, currency:"INR"})

                const options = {
                    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                    amount: razorpayOrder.amount,
                    currency: razorpayOrder.currency,
                    name: "Kalash Fashion",
                    description: "Order Payment",
                    order_id: razorpayOrder.id,
                    handler: async (response) => {
                        try{
                            const verifyRes = await verifyRazorpayPayment(response)
                            if(verifyRes?.verified){
                                const order={
                                    user:loggedInUser._id,
                                    item:cartItems,
                                    address:selectedAddress,
                                    paymentMode:'UPI',
                                    total:totalAmount,
                                    paymentId: response.razorpay_payment_id,
                                    razorpayOrderId: response.razorpay_order_id,
                                    paymentSignature: response.razorpay_signature
                                }
                                dispatch(createOrderAsync(order))
                            }else{
                                toast.error("Payment verification failed")
                            }
                        }catch(err){
                            toast.error("Payment verification error")
                        }
                    },
                    prefill: {
                        name: loggedInUser?.name || "Customer",
                        email: loggedInUser?.email || "",
                    },
                    theme: { color: "#000000" },
                }

                const rzp = new window.Razorpay(options)
                rzp.on('payment.failed', () => {
                    toast.error("Payment failed")
                })
                rzp.open()
            }catch(err){
                toast.error("Unable to start Razorpay payment")
            }finally{
                setIsRazorpayLoading(false)
            }
        }
    }

  return (
    <Stack flexDirection={'row'} p={2} rowGap={10} justifyContent={'center'} flexWrap={'wrap'} mb={'5rem'} mt={2} columnGap={4} alignItems={'flex-start'}>

        {/* left box */}
        <Stack rowGap={4}>

            {/* heading */}
            <Stack flexDirection={'row'} columnGap={is480?0.3:1} alignItems={'center'}>
                <motion.div  whileHover={{x:-5}}>
                    <IconButton component={Link} to={"/cart"}><ArrowBackIcon fontSize={is480?"medium":'large'}/></IconButton>
                </motion.div>
                <Typography variant='h4'>Shipping Information</Typography>
            </Stack>

            {/* address form */}
            <Stack component={'form'} noValidate rowGap={2} onSubmit={handleSubmit(handleAddAddress)}>
                    <Stack>
                        <Typography  gutterBottom>Type</Typography>
                        <TextField placeholder='Eg. Home, Buisness' {...register("type",{required:true})}/>
                    </Stack>


                    <Stack>
                        <Typography gutterBottom>Street</Typography>
                        <TextField {...register("street",{required:true})}/>
                    </Stack>

                    <Stack>
                        <Typography gutterBottom>Country</Typography>
                        <TextField {...register("country",{required:true})}/>
                    </Stack>

                    <Stack>
                        <Typography  gutterBottom>Phone Number</Typography>
                        <TextField type='number' {...register("phoneNumber",{required:true})}/>
                    </Stack>

                    <Stack flexDirection={'row'}>
                        <Stack width={'100%'}>
                            <Typography gutterBottom>City</Typography>
                            <TextField  {...register("city",{required:true})}/>
                        </Stack>
                        <Stack width={'100%'}>
                            <Typography gutterBottom>State</Typography>
                            <TextField  {...register("state",{required:true})}/>
                        </Stack>
                        <Stack width={'100%'}>
                            <Typography gutterBottom>Postal Code</Typography>
                            <TextField type='number' {...register("postalCode",{required:true})}/>
                        </Stack>
                    </Stack>

                    <Stack flexDirection={'row'} alignSelf={'flex-end'} columnGap={1}>
                        <LoadingButton loading={status==='pending'} type='submit' variant='contained'>add</LoadingButton>
                        <Button color='error' variant='outlined' onClick={()=>reset()}>Reset</Button>
                    </Stack>
            </Stack>

            {/* existing address */}
            <Stack rowGap={3}>

                <Stack>
                    <Typography variant='h6'>Address</Typography>
                    <Typography variant='body2' color={'text.secondary'}>Choose from existing Addresses</Typography>
                </Stack>

                <Grid container gap={2} width={is900?"auto":'50rem'} justifyContent={'flex-start'} alignContent={'flex-start'}>
                        {
                            addresses.map((address,index)=>(
                                <FormControl item >
                                    <Stack key={address._id} p={is480?2:2} width={is480?'100%':'20rem'} height={is480?'auto':'15rem'}  rowGap={2} component={is480?Paper:Paper} elevation={1}>

                                        <Stack flexDirection={'row'} alignItems={'center'}>
                                            <Radio checked={selectedAddress===address} name='addressRadioGroup' value={selectedAddress} onChange={(e)=>setSelectedAddress(addresses[index])}/>
                                            <Typography>{address.type}</Typography>
                                        </Stack>

                                        {/* details */}
                                        <Stack>
                                            <Typography>{address.street}</Typography>
                                            <Typography>{address.state}, {address.city}, {address.country}, {address.postalCode}</Typography>
                                            <Typography>{address.phoneNumber}</Typography>
                                        </Stack>
                                    </Stack>
                                </FormControl>
                            ))
                        }
                </Grid>

            </Stack>
            
            {/* payment methods */}
            <Stack rowGap={3}>

                    <Stack>
                        <Typography variant='h6'>Payment Methods</Typography>
                        <Typography variant='body2' color={'text.secondary'}>Please select a payment method</Typography>
                    </Stack>
                    
                    <Stack rowGap={2}>

                        <Stack flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                            <Radio value={selectedPaymentMethod} name='paymentMethod' checked={selectedPaymentMethod==='COD'} onChange={()=>setSelectedPaymentMethod('COD')}/>
                            <Typography>Cash on Delivery</Typography>
                        </Stack>

                        <Stack flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                            <Radio value={selectedPaymentMethod} name='paymentMethod' checked={selectedPaymentMethod==='UPI'} onChange={()=>setSelectedPaymentMethod('UPI')}/>
                            <Typography>UPI (Razorpay)</Typography>
                        </Stack>

                    </Stack>


            </Stack>
        </Stack>

        {/* right box */}
        <Stack  width={is900?'100%':'auto'} alignItems={is900?'flex-start':''}>
            <Typography variant='h4'>Order summary</Typography>
            <Cart checkout={true}/>
            <LoadingButton fullWidth loading={orderStatus==='pending' || isRazorpayLoading} variant='contained' onClick={handleCreateOrder} size='large'>
                {selectedPaymentMethod==='COD' ? 'Pay and order' : 'Pay with Razorpay'}
            </LoadingButton>
        </Stack>

    </Stack>
  )
}
