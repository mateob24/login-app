import express from 'express'
import morgan from "morgan"
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'

const app = express() // esta linea es el servidor

app.use(morgan('dev'))

app.use(express.json())

app.use(cookieParser())

app.use('/api', authRoutes)
app.use('/api', taskRoutes)

export default app