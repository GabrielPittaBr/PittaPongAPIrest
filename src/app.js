const express = require('express');
const path = require('path');
require('dotenv').config();

const conectarDB = require('./config/db');
const produtoRoutes = require('./routes/productRoutes');
const pagesController = require('./controllers/pagesControllers');
const productController = require('./controllers/productControllers');
const upload = require('./middlewares/uploadIMG');

const app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ── API de produtos (JSON) ──
app.use('/produtos', produtoRoutes);

// ── Rotas de páginas ──
app.get('/', pagesController.getHome);
app.get('/vender', productController.getVender);
app.get('/produtos/listar', pagesController.getListarProdutos);
app.get('/produto/:id', pagesController.getProdutoDetalhe);
app.get('/carrinho', pagesController.getCarrinho);
app.get('/checkout', pagesController.getCheckout);
app.get('/acompanhamento', pagesController.getAcompanhamento);
app.get('/login', pagesController.getLogin);
app.get('/cadastro', pagesController.getCadastro);

// Conectar ao MongoDB e iniciar servidor
conectarDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});