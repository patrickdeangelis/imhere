import axios from 'axios'

const api = axios.create({
  baseURL: 'https://9812027d7500.ngrok.io' // ou ip da maquina
})

export default api
