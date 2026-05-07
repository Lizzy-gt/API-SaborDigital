const produtoRepository = require("../repositories/produtoRepository");
const ProdutoRepositorys = require("../repositories/produtoRepository");

//Validção de Regra de negócio
//Vai ter que listar aqui também

class produtoService {
  async listarProdutos() {
    //Get
    const produtos = await ProdutoRepositorys.listarProdutos();

    return {
      sucesso: true,
      dados: produtos,
      total: produtos.length,
    };
  }

  async buscarProdutoPorId(id) {
    //Get por id
    if (!id || isNaN(id)) {
      throw {
        status: 400, //Trabalha um exeção e devolver todos os erros, fazendo você retornar. O 400 não foi de achar a informação
        mensagem: "ID inválido",
      };
    }
    const produto = await ProdutoRepositorys.buscarProdutoPorId(id);

    if (!produto) {
      throw {
        status: 404,
        mensagem: "Produto não encontrado",
      };
    }

    return {
      sucesso: true,
      dados: produto,
    };
  }

  async cadastrarProduto(dados) {
    //Post
    const { nome, descricao, preco, categoria, disponivel } = dados;

    if (nome || descricao || preco === undefined) {
      throw {
        status: 400,
        mensagem: "Nome, descrição e preço são obrigatórios",
      };
    }
    if (typeof preco !== "number" || preco <= 0) {
      throw {
        status: 400,
        mensagem: "Preço deve ser um número positivo",
      };

      const novoProduto = {
        nome: nome.trim(),
        descricao: descricao.trim(),
        preco, //Não tem alteração, pois não tem dois pontos
        categoria: categoria || null,
        disponivel: disponivel || true,
      };
    }
    const resultado = await ProdutoRepository.cadastrarProduto(novoProduto);

    return {
      sucesso: true,
      mensagem: "Produto cadastrado com sucesso",
      resultado,
    };
  }

  async atualizarProduto(id, dados) {
    //Put
    if (!id || isNaN(id)) {
      throw {
        status: 400,
        mensagem: "id inválido",
      };
    }
    const produtoId = await produtoRepository.buscarProdutoPorId(id); //Vai buscar o produto no banco pelo id e salvar aqui mesmo
    if (!produtoId) {
      throw {
        status: 404,
        mensagem: "Produto não encontrado",
      };
    }
    const { nome, descricao, preco, categoria, disponivel } = dados;

    if (nome !== undefined && nome.trim() !== "")
      produtoAtualizado.nome = nome.trim();

    if (descricao !== undefined) produtoAtualizado.descricao = descricao.trim();

    if (preco !== undefined) {
      if (typeof preco !== "number" || preco <= 0) {
        throw {
          status: 400,
          mensagem: "Preço deve ser um número positivo",
        };
      }
      produtoAtualizado.preco = preco;
    }

    if (categoria !== undefined) produtoAtualizado.categoria = categoria;

    if (disponivel !== undefined) produtoAtualizado.disponivel = disponivel;

    if (Object.keys(produtoAtualizado).length === 0) {
      throw {
        status: 400,
        mensagem: "Nenhum dado enviado para a atualização",
      };
    }
    await produtoRepository.atualizarProduto(id, produtoAtualizado); //Não precisa de nada para ser chamado

    return {
      sucesso: true,
      mensagem: "Produto atualizado",
    };
  }

  async deletarProduto(id) {
    //Antes de deletar o produto precisamos saber se o id é valido
    if (!id || isNaN(id)) {
      throw {
        status: 400,
        mensagem: "id invalido",
      };
    }
    const idProduto = await produtoRepository.buscarProdutoPorId(id);

    if (!idProduto) {
      throw {
        status: 404,
        mensagem: "Produto não encontrado",
      };
    }
    await ProdutoRepositorys.apagarProduto(id)

    return{
      sucesso: true,
      mensagem: "Produto apagado"
    }
  }
}

module.exports = new produtoService()
