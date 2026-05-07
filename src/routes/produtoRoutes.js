const express = require("express");
const router = express.Router(); //Cuida das rotas
const produtoController = require("../controllers/produtoController");

router.get("/", produtoController.listarProduto);
router.get("/:id", produtoController.buscarProdutoPorId);
router.post("/", produtoController.cadastrarProduto);
router.put("/:id", produtoController.atualizarProduto);
router.delete("/:id", produtoController.apagarPrdouto);

module.exports = router; //Essa é apenas uma variavel
