const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/productControllers');
const upload = require('../middlewares/uploadIMG');

// GET /produtos - listar todos (JSON)
router.get('/', produtoController.listarProdutos);

// POST /produtos - criar produto (até 5 imagens)
router.post('/', upload.array('imagens', 5), produtoController.criarProduto);

module.exports = router;