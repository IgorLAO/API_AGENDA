import { Link } from 'react-router-dom';
import './index.scss';

import axios from 'axios';
import { useEffect, useState } from 'react';

let url = 'http://localhost:5000/contato';

export default function Listar() {
  const [listaContatos, setListaContatos] = useState([]);
  const [hide, setHIde] = useState(false);
  const [idDelete, setIdDelete] = useState()
  const [nome, setNome] = useState('')

  useEffect(() => {

    async function listarTodos() {
      const resp = await axios.get(`${url}/buscar?nome=${nome}`);
      let data = [resp.data]
    
      setListaContatos(data);
      console.log(data)

    }
    listarTodos();
  }, [nome]);

  const reveal = (id) => {
    setHIde(!hide)
  };


  async function Deletar(e) {
    let response = axios.delete(url + "/" + e)
  };


  return (
    <div className='pagina-listar'>
      <div className='container'>
        <h1> Consultar </h1>
        <div className='filtros'>
          <input type='text' onChange={e => setNome(e.target.value)} />
        </div>

        <table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Favorito</th>
              <th>Cadastro</th>
            </tr>
          </thead>
          <tbody>
            {listaContatos.map(item =>
              <tr>

                <td>{item.ID_AGENDA}</td>
                <td>{item.NM_CONTATO}</td>
                <td>{item.DS_TELEFONE}</td>
                <td>{item.DS_EMAIL}</td>
                <td>{item.favorito == 1 ? 'Sim' : 'Não'}</td>
                <td>{item.DT_CADASTRO }</td>

                <td> <button
                  value={item.ID_AGENDA}
                  onClick={(e) => Deletar(e.target.value)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 5,
                    height: 5,
                    margin: 0,
                    backgroundColor: "grey",
                    borderRadius: 50
                  }}> x </button></td>

              </tr>
            )}
          </tbody>
        </table>

        <div className='voltar'>
          <hr />
          <Link to='/'> Voltar </Link>
        </div>

      </div>
    </div>
  )
}