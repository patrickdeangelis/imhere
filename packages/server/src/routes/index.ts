import { Router } from 'express'

import userRoutes from './user.routes'
import sessionRoutes from './session.routes'
import disciplineRouter from './Discipline.routes'
const routes = Router()

routes.use('/users', userRoutes)
routes.use('/sessions', sessionRoutes)
routes.use('/discipline', disciplineRouter)


export default routes
