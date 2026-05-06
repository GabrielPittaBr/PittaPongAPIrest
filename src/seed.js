require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require('./models/productModels');

const produtos = [
  {
    nome: 'Olden Racket',
    preco: 229.99,
    descricao: 'Desbloqueie seu verdadeiro potencial com essa mega raquete. Usada pelo profissional Oldenburg no Torneio 20x CIMOL.',
    imagens: ['/img/Olden Racket.png', 'https://res.cloudinary.com/do3wgxuwp/image/upload/v1778027335/OldenRacket2.png', '/img/Olden Racket.png', 'https://res.cloudinary.com/do3wgxuwp/image/upload/v1778027335/OldenRacket2.png']
  },
  {
    nome: 'Roiesk Balls',
    preco: 39.99,
    descricao: 'Bolinhas de tênis de mesa profissionais da Roiesk. Perfeitas para treino e competição, com qualidade e durabilidade garantidas.',
    imagens: ['/img/Roiesk Balls.png', 'https://res.cloudinary.com/do3wgxuwp/image/upload/v1778027360/RoieskBall2.png', '/img/Roiesk Balls.png', 'https://res.cloudinary.com/do3wgxuwp/image/upload/v1778027360/RoieskBall2.png']
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado ao MongoDB');

    for (const dados of produtos) {
      const existe = await Produto.findOne({ nome: dados.nome });
      if (!existe) {
        const p = new Produto(dados);
        await p.save();
        console.log(`✅ Produto criado: ${dados.nome}`);
      } else {
        console.log(`⚠️  Produto já existe: ${dados.nome}`);
      }
    }
  } catch (err) {
    console.error('❌ Erro:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Desconectado do MongoDB');
  }
}

seed();
