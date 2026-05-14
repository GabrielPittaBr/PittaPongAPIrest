const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesControllers');

router.get('/', pagesController.getHome);
router.get('/produtos/listar', pagesController.getListarProdutos);
router.get('/produto/:id', pagesController.getProdutoDetalhe);
router.get('/carrinho', pagesController.getCarrinho);
router.get('/login', pagesController.getLogin);

module.exports = router;
