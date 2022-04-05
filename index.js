import express from 'express'
import path from 'path'
// import { requestTime, logger } from './middlewares.js'
import serverRoutes from './routes/routes.js'
import cors from 'cors'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'views')))
app.use(express.json())
// app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(serverRoutes)

app.get('/', (req, res) => {
    res.sendFile((path.resolve(__dirname, 'views', 'Form.html')))
})

app.listen(PORT, ()=>{
    `server has been started on port ${PORT}`
})


