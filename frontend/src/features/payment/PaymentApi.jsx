import { axiosi } from '../../config/axios'

export const createRazorpayOrder = async (payload) => {
  try {
    const res = await axiosi.post('/payments/razorpay/order', payload)
    return res.data
  } catch (error) {
    throw error.response?.data || error
  }
}

export const verifyRazorpayPayment = async (payload) => {
  try {
    const res = await axiosi.post('/payments/razorpay/verify', payload)
    return res.data
  } catch (error) {
    throw error.response?.data || error
  }
}
