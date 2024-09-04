import express from 'express'
import cors from 'cors'
import { router } from './routes'

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

server.get('/', (_, res) => {
    return res.send('Olá')
})

export default server