import axios from 'axios'

const api = axios.create({
  baseURL: 'https://68bbde47b2d7.ngrok.io' // ou ip da maquina
})

export default api
