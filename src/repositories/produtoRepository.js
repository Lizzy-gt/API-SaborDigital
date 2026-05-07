const pool = require('../config/database')

class ProdutoRepositorys {
     async listarProdutos() { //vai retornar as informações do banco
        const listarProdutos = await pool.query('SELECT * FROM produto')
        return listarProdutos
    }

    async buscarProdutoPorId(id){
        const mostrarProduto = await pool.query('SELECT * FROM produto WHERE id = ?', [id])
        return mostrarProdut[0]
    }

    async cadastrarProduto(dadosProdutos){
        const resultadoCadastro = await pool.query('INSERT INTO produto SET ?', [dadosProdutos])
        return resultadoCadastro.insertId
    }
    
    async atualizarProduto(id, dadosDoProduto){
        const produtoAtualizado = await pool.query('UPDATE produto SET ? WHERE id = ?', [dadosDoProduto, id])
        return produtoAtualizado
    }

    async apagarProduto (id){
        await pool.query('DELETE FROM produto WHERE id = ?', [id])
        return true
    }
}

module.exports = ProdutoRepositorys()

//Aqui não vai validar os dados

