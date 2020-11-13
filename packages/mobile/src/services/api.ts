import axios from 'axios'

const api = axios.create({
  baseURL: 'https://3a304cac5712.ngrok.io' // ou ip da maquina
})

export default api
