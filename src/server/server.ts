import express from 'express'

const server = express()

// server.use(express.json())
// server.use(router)

server.get('/', (_, res) => {
    return res.send('Olá')
})

export { server }