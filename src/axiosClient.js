import axios from "axios"

const { VITE_MEALS_API_BASE_URL } = import.meta.env

const axiosClient = axios.create({
  baseURL: VITE_MEALS_API_BASE_URL,
})

export default axiosClient
