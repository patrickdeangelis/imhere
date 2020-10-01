import express from 'express'
import router from './routes/index'
import 'reflect-metadata'
import '.database'

const app = express()

app.use(express.json())
app.use(router)

//  app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3333, () => {
  console.log('🚀 Server started ')
})
