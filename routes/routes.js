import {Router} from 'express'
import { getNum, createNum } from '../controllers/server.js'
const router = Router()

router.post('/api/newNum', createNum)

router.get('/api/newNum', getNum)
export default router