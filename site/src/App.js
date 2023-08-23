import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  const [list, setList] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [favorito, setFavorito] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/contato')
        setList(response.data)

      } catch (error) {
        console.log(error)
      }


    }
    FetchData()
  }, []);

  const post = async () => {
    const reqBody = {
      contato: nome,
      telefone: telefone,
      email: email,
      favorito: favorito,
      cadastro: data
    }
      
      const responsePost = await axios.post('http://localhost:5000/contato', reqBody)          

  }


  return (
    <>
      <div className="App">
        <div className='agenda'>
          <h2>agenda</h2>
          <div className='nomes'>
            <h6>nome</h6>
            <h6>telefone</h6>
            <h6>email</h6>
            <h6>favorito</h6>
            <h6>data</h6>
          </div>

          {list.map((item, index) =>
            <div className='contato' key={index}>
              
              <h6>{item.NM_CONTATO}</h6>
              <h6>{item.DS_TELEFONE}</h6>
              <h6> {item.DS_EMAIL} </h6>
              <h6> {item.BT_FAVORITO} </h6>
              <h6> {item.DT_CADASTRO} </h6>
            </div>)}

      
        </div>
      </div>
      <div className='inputs'>
        <input type='text' placeholder='nome' onChange={e => setNome(e.target.value)} />
        <input type='text' placeholder='telefone' onChange={e => setTelefone(e.target.value)} />
        <input type='text' placeholder='email' onChange={e => setEmail(e.target.value)} />
        <input type='text' placeholder='bt favorito' onChange={e => setFavorito(e.target.value)} />
        <input type='date' onChange={e => setData(e.target.value)} />
        <button onClick={post}>adicionar</button>
      </div>
    </>
  );
} 

export default App;
