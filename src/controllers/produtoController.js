const produtoServices = require("../services/produtoServices");
const ProdutoSevice = require("../services/produtoServices");

class produtoController {
  //Vai trabalhar os atributos req e res
  //Erro e sucesso vão ser aqui
  async listarProduto(req, res) {
    // get, saber quem vai chamar e mandar a respota de volta
    try {
      const resultado = await produtoServices.listarProdutos();
      res.json(resultado); //Ja vai dar 200, não precisa de status
    } catch (error) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro, //O erro que vai vir do banco ou do própio catch
      });
    }
  }

  async buscarProdutoPorId(req, res) {
    try {
      const resultado = await produtoServices.buscarProdutoPorId(req.params.id);
      res.json(resultado);
    } catch (error) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async cadastrarProduto(req, res) {
    try {
      const resultado = await ProdutoSevice.cadastrarProduto(req.body); //Pega todos os dados da body
      res.json(resultado);
    } catch (error) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async atualizarProduto(req, res) {
    try {
      const resultado = await ProdutoSevice.atualizarProduto(
        req.params.id,
        req.body,
      );
      res.json(resultado);
    } catch (error) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async apagarPrdouto(req, res) {
    try {
      const resultado = await ProdutoSevice.apagarPrdouto(req.params.id);
      res.json(resultado);
    } catch (error) {
      res.status(error.status || 500).json({
        sucesso: false,
        mensagem: error.mensagem || "Erro interno do servidor",
        erro: error.stack || error,
      });
    }
  }
}

module.exports = new produtoController()