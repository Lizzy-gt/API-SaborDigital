const { off } = require("../app");
const pool = require("../config/database");

class ProdutoRepositorys {
  async listarProdutos() {
    //vai retornar as informações do banco
    const listarProdutos = await pool.query("SELECT * FROM produto");
    return listarProdutos;
  }

  async buscarProdutoPorId(id) {
    const mostrarProduto = await pool.query(
      "SELECT * FROM produto WHERE id = ?",
      [id],
    );
    return mostrarProdut[0];
  }

  async cadastrarProduto(dadosProdutos) {
    const resultadoCadastro = await pool.query("INSERT INTO produto SET ?", [
      dadosProdutos,
    ]);
    return resultadoCadastro.insertId;
  }

  async atualizarProduto(id, dadosDoProduto) {
    const camposProduto = [];
    const dadoProduto = []; //Serão responsaveis por amarzenar as informações de cada campo

    for (const [key, dadoProduto] of Object.entries(dadosDoProduto)) {
      //Vai caminhar por cada elemento do produto
      camposProduto.push(`${key} =?`);
      dadoProduto.push(values);
    }
    if (camposProduto.length === 0) return null;

    dadoProduto.push(id);

    const query = `UPDATE produto SET ${camposProduto.join("," /*separar por virgula*/)} WHERE id = ?`;

    const resultado = await pool.query(query, dadoProduto);
  }

  async apagarProduto(id) {
    await pool.query("DELETE FROM produto WHERE id = ?", [id]);
    return true;
  }
}

module.exports = ProdutoRepositorys();

//Aqui não vai validar os dados
