const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    maxlength: 80
  },
  preco: {
    type: Number,
    required: true
  },
  descricao: {
    type: String,
    required: true,
    maxlength: 200
  },
  imagens: [String] // URLs do Cloudinary
}, { timestamps: true });

module.exports = mongoose.model('Produto', ProdutoSchema);