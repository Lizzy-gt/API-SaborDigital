const pool = require("../config/database");

class ProdutoRepositorys {
  async listarProdutos() {
    const [listarProdutos] = await pool.query("SELECT * FROM produto");
    return listarProdutos;
  }

  async buscarProdutoPorId(id) {
    const [mostrarProduto] = await pool.query(
      "SELECT * FROM produto WHERE id = ?",
      [id],
    );
    return mostrarProduto[0];
  }

  async cadastrarProduto(dadosProdutos) {
    const [resultadoCadastro] = await pool.query("INSERT INTO produto SET ?", [
      dadosProdutos,
    ]);
    return resultadoCadastro.insertId;
  }

  async atualizarProduto(id, dadosDoProduto) {
    const camposProduto = [];
    const valoresProduto = [];

    for (const [key, valor] of Object.entries(dadosDoProduto)) {
      camposProduto.push(`${key} = ?`);
      valoresProduto.push(valor);
    }
    if (camposProduto.length === 0) return null;

    valoresProduto.push(id);

    const query = `UPDATE produto SET ${camposProduto.join(", ")} WHERE id = ?`;

    const [resultado] = await pool.query(query, valoresProduto);
    return resultado;
  }

  async apagarProduto(id) {
    await pool.query("DELETE FROM produto WHERE id = ?", [id]);
    return true;
  }
}

module.exports = new ProdutoRepositorys();

//Aqui não vai validar os dados
