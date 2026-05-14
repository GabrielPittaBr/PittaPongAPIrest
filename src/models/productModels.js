const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
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
  categoria: {
    type: String,
    enum: ['Raquetes', 'Bolinhas', 'Redes', 'Acessórios', 'Outros'],
    default: 'Outros'
  },
  imagens: [String] // URLs do Cloudinary
}, { timestamps: true });

module.exports = mongoose.model('Produto', ProdutoSchema);