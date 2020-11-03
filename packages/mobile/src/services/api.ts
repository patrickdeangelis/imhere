import axios from 'axios'

const api = axios.create({
  baseURL: 'https://e5de4f8d736d.ngrok.io' // ou ip da maquina
})

export default api
