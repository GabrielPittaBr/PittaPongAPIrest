const Produto = require("../models/productModels");

exports.getHome = async (req, res) => {
    try {
        const produtos = await Produto.find().sort({ createdAt: -1 }).limit(4);
        res.render('index', { title: 'PittaPong', produtos });
    } catch (err) {
        console.error('Erro getHome:', err.message);
        res.status(500).send("Erro ao carregar a página inicial");
    }
};

exports.getListarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find().sort({ createdAt: -1 });
        res.render('listarProdutos/listar-produtos', { title: 'PittaPong - Produtos', produtos });
    } catch (err) {
        console.error('Erro getListarProdutos:', err.message);
        res.status(500).send("Erro ao carregar produtos");
    }
};

exports.getProdutoDetalhe = async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await Produto.findById(id);

        if (!produto) {
            return res.status(404).send("Produto não encontrado");
        }

        const outrosProdutos = await Produto.find({ _id: { $ne: id } }).sort({ createdAt: -1 }).limit(4);
        res.render('produto/produto', { title: `PittaPong - ${produto.nome}`, produto, outrosProdutos });
    } catch (err) {
        console.error('Erro getProdutoDetalhe:', err.message);
        res.status(500).send("Erro ao carregar o produto");
    }
};

exports.getCarrinho = async (req, res) => {
    try {
        const produtos = await Produto.find().sort({ createdAt: -1 }).limit(4);
        res.render('compra/carrinho', { title: 'PittaPong - Carrinho', produtos });
    } catch (err) {
        console.error('Erro getCarrinho:', err.message);
        res.status(500).send("Erro ao carregar o carrinho");
    }
};

exports.getCheckout = async (req, res) => {
    try {
        const produtos = await Produto.find().sort({ createdAt: -1 }).limit(4);
        res.render('compra/checkout', { title: 'PittaPong - Checkout', produtos });
    } catch (err) {
        console.error('Erro getCheckout:', err.message);
        res.status(500).send("Erro ao carregar o checkout");
    }
};

exports.getAcompanhamento = async (req, res) => {
    try {
        const produtos = await Produto.find().sort({ createdAt: -1 }).limit(4);
        res.render('compra/acompanhamento', { title: 'PittaPong - Acompanhamento', produtos });
    } catch (err) {
        console.error('Erro getAcompanhamento:', err.message);
        res.status(500).send("Erro ao carregar o acompanhamento");
    }
};

exports.getLogin = (req, res) => {
    res.render('usuario/login', { title: 'PittaPong - Login' });
};

exports.getCadastro = (req, res) => {
    res.render('usuario/cadastro', { title: 'PittaPong - Cadastro' });
};