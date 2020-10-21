import { Router } from 'express'

import userRoutes from './user.routes'
import sessionRoutes from './session.routes'
import schoolSubjectRouter from './schoolSubject.routes'
const routes = Router()

routes.use('/users', userRoutes)
routes.use('/sessions', sessionRoutes)
routes.use('/schoolsubject', schoolSubjectRouter)


export default routes
