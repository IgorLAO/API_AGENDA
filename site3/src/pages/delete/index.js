import axios from "axios";
import './index.scss';

export default function Delete() {

    return (
        <>
            <div className="mainDelete">
                <div className="container">
                    <div className="menu">
                        <h1>Deletar</h1>
                        <button> aparecer </button>
                    </div>
                    <table >
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
                            <tr>
                                <td>item.id</td>
                                <td>item.NM_CONTATO</td>
                                <td>item.DS_TELEFONE</td>
                                <td>item.DS_EMAIL</td>
                                <td>item.favorito </td>
                                <td>item.DT_CADASTRO</td>
                            </tr>
                            <tr>
                                <td>item.id</td>
                                <td>item.NM_CONTATO</td>
                                <td>item.DS_TELEFONE</td>
                                <td>item.DS_EMAIL</td>
                                <td>item.favorito </td>
                                <td>item.DT_CADASTRO</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}