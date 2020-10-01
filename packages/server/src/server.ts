import express from 'express'
import router from './routes'

const app = express()

app.use(router)

//  app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3333, () => {
  console.log('🚀 Server started ')
})
