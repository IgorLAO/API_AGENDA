import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';


export default function Inserir() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cadastro, setCadastro] = useState('');
  const [favorito, setFavorito] = useState(false);


  async function salvarContato() {
    let contato = {
      nome: nome,
      telefone: telefone,
      email: email,
      favorito: favorito,
      cadastro: cadastro
    }


    let url = 'http://localhost:5000/contato';
    let resp = await axios.post(url, contato);

  }

  return (
    <div className='pagina-inserir'>
      <div className='container'>
        <h1> Novo contato</h1>
        <section className='form'>
          <div>
            <label>Nome: </label>
            <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div>
            <label>Telefone: </label>
            <input type='text' value={telefone} onChange={e => setTelefone(e.target.value)} />
          </div>
          <div>
            <label>E-mail: </label>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Cadastro: </label>
            <input type='date'  value={cadastro} onChange={e => setCadastro(e.target.value)} />
          </div>
          <div>
            <label>Favorito: </label>
            <div>
              <input type='checkbox'  value={favorito} onChange={e => setFavorito(e.target.checked)} /> Sim
            </div>
          </div>
          <div className='right'>
            <button onClick={salvarContato}> Salvar </button>
          </div>
        </section>

        <div className='voltar'>
          <hr />
          <Link to='/'> Voltar </Link>
        </div>
      </div>
    </div>
  )
}