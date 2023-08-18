import config from "./connection.js";

export async function Agenda(){
    let sql = `SELECT * FROM TB_AGENDA`;
    let [resp] = await config.query(sql)

    return resp
};

export async function Inserir(contato){
    let sql = `INSERT INTO TB_AGENDA(NM_CONTATO, DS_TELEFONE, DS_EMAIL, BT_FAVORITO, DT_CADASTRO)
    VALUES (?, ?, ?, ?, ?);`
    let [resp] = await config.query(sql, [contato.contato, contato.telefone, contato.email, contato.favorito, contato.cadastro])
    return contato
}

export async function BuscarNome (nome){
    let sql = `SELECT *
    FROM TB_AGENDA
    WHERE NM_CONTATO LIKE ?`;

    let [resp] = await config.query (sql, [`%${nome}%`])
    return resp[0]
}

export async function BuscarFav (){
    let sql = `SELECT *
    FROM TB_AGENDA
    WHERE BT_FAVORITO = true;`

    let [resp] = await config.query (sql)
    return resp[0];
}

export async function Data(inicio, fim){
    let sql = `SELECT *
    FROM TB_AGENDA
    WHERE DT_CADASTRO BETWEEN ? AND ?;`

    let [resp] = await config.query (sql, [inicio, fim ])
    return resp[0];
}

export async function Alterar ( id, contato){
    let sql = `UPDATE TB_AGENDA
    SET NM_CONTATO = ?,
        DS_TELEFONE = ?,
        DS_EMAIL = ?,
        BT_FAVORITO = ?,
        DT_CADASTRO = ?
        WHERE ID_AGENDA = ?`;

        let [resp] = await config.query(sql, [contato.contato, contato.telefone, contato.email, contato.favorito, contato.cadastro, id])
        return resp.affectedRows
}

export async function Delete(id) {
    let sql = `DELETE FROM TB_AGENDA
                    WHERE ID_AGENDA = ?`
    let [resp] = await config.query(sql, id)
    
    return resp.affectedRows
}
