import { Router } from 'express'

const router = Router()

//apenas teste
router.get('/', (req, res) => {
  res.json('hello world!')
})

router.post('/sighup', (req, res) => {})
router.post('/sighin', (req, res) => {})

export default router
