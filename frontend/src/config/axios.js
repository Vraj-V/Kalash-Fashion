import axios from 'axios'

const rawBaseURL = process.env.REACT_APP_BASE_URL || ''
const baseURL = rawBaseURL.replace(/^"|"$/g, '')

export const axiosi = axios.create({
  withCredentials: true,
  baseURL,
})