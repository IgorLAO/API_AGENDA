import { Link } from 'react-router-dom';
import './index.scss';


export default function Home() {

  return (
    <div className='pagina-home'>
      <div className='container'>
        <h1> AgendaON</h1>
        <nav>
          <Link to='/listar'> Consultar </Link>
          <Link to='/inserir'> Inserir </Link>
          <Link to='/deletar'> Delete </Link>
        </nav>
      </div>
    </div>
  )
}