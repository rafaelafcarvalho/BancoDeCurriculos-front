const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    //personalizar campos

    nome: { type: String, unique: false, required: true },
    profissao: { type: String, unique: false, required: true },
    datadenascimento: { type: String, unique: false, required: true },
    estadocivil: { type: String, unique: false, required: false },
    genero: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: false },
    telefone1: { type: String, unique: false, required: false },
    telefone2: { type: String, unique: false, required: false },
    contato: { type: String, unique: false, required: false },
    celular: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    identidade: { type: String, unique: false, required: false },
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: false},
    habilitacao: { type: String, unique: true, required: false },
}, {
    timestamps:true
});

module.exports = mongoose.model('User', UserSchema);