import { Router } from "express";
import { Agenda, BuscarNome, Inserir, BuscarFav, Data, Alterar, Delete } from "../repository/agendaRepository.js";

let server = Router();

server.get('/contato', async (req, resp) => {
    try {
        let data = await Agenda()
        resp.send(data)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.post('/contato', async (req, resp) => {
    try {
        const add = req.body
        const data = await Inserir(add)

        resp.send(data)
    } catch (err) {
        erro: err.message
    }
})

server.get('/contato/buscar', async (req, resp) => {
    try {
        const { nome } = req.query
        const data = await BuscarNome(nome)
        resp.send(data)
    } catch (err) {
        erro: err.message
    }
})

server.get('/contato/favorito', async (req, resp) => {
    try {
        let data = await BuscarFav()
        resp.send(data)
    } catch (err) {
        erro: err.message
    }
})

server.get('/contato/cadastro', async (req, resp) => {
    const { inicio } = req.query
    const { fim } = req.query
    const data = await Data(inicio, fim)
    resp.send(data)
})

server.put('/contato/:id', async (req, resp) => {
    try {
        let addId = req.params.id
        let add = req.body

        const resposta = await Alterar(addId, add)
        if (resposta != 1)
            throw new Error('O contato não pode ser alterado')
        else
            resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }


})

server.delete('/contato/:id', async (req, resp) => {
    try {
        let addId = req.params.id
        const resposta = await Delete(addId)
        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server