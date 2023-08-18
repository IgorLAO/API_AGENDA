import "dotenv/config"
import cors from "cors"
import express from 'express'

import agendaController from './controller/agendaController.js'

const server = express()
server.use(cors())
server.use(express.json())

server.listen(process.env.PORT, () => console.log(`
    api online na porta ${process.env.PORT}
`))


server.use(agendaController)
