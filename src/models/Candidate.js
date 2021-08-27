const mongoose = require('mongoose'); 

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    dataNascimento: { type: Date, unique: false, required: false },
    estadoCivil: { type: Number, unique: false, required: false },
    sexo: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: true },
    endereco: { type: String, unique: false, required: true },
    numero: { type: Number, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: {type: String, unique: false, required: true },
    celular: { type: String, unique: true, required: true },
    telefoneFixo: { type: String, unique: true, required: false},
    email: { type: String, unique: true, required: true },
    identidade: { type: String, unique: true, required: true },
    cpf: { type: String, unique: true, required: true },
    possuiVeiculo: { type: String, unique: false, required: false},
    habilitacao: { type: String, unique: false, required: false }
},{
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);