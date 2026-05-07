const express = require('express')
const router = express.Router()
const produtoRoutes =require('./produtoRoutes')

router.get('/', (req, res) => {
    res.json({
        mensagem: 'API SABOR DIGITAL',
        versao: '5.0.8'
    })
})

router.use('/produtos', produtoRoutes) //Diversas rotas diferente e precisa de um arquivo que centraliza os end points
router.use('/pedidos', pedidoRoutes)
router.use('/cardapios', cardapioRoutes)


module.exports = router;