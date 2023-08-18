import { Router } from "express";
import { Agenda, BuscarNome, Inserir, BuscarFav, Data, Alterar } from "../repository/agendaRepository.js";

let server = Router();

server.get('/contato', async (req, resp) =>{
    let data = await Agenda()
    resp.send(data)
});

server.post('/contato', async (req, resp) =>{
    const add = req.body
    const data = await Inserir(add)

    resp.send(data)
})

server.get('/contato/buscar', async (req, resp) => {
    const { nome } = req.query
    const data = await BuscarNome(nome)
    resp.send(data)
})

server.get('/contato/favorito', async (req, resp) => {
    let data = await BuscarFav()
    resp.send(data)
})

server.get('/contato/cadastro', async (req, resp) =>{
    const { inicio } = req.query
    const { fim } = req.query
    const data = await Data(inicio, fim)
    resp.send(data)
})

server.put('/contato/:id', async (req, resp) => {
    let addId = req.params
    let add = req.body

    const resposta = await Alterar(addId, add)
    if(resposta != 1)
            throw new Error('O filme não pode ser alterado')
    else
    resp.status(204).send()
})

export default server