import axios from 'axios'

const api = axios.create({
  baseURL: 'https://f46ba6876dab.ngrok.io' // ou ip da maquina
})

export default api
