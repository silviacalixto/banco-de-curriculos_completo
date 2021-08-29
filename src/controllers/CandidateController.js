const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {
        const { nome, cargo, dataNascimento, estadoCivil, sexo, cep, endereco, numero, bairro, cidade, estado, celular, telefoneFixo, email, identidade, cpf, possuiVeiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.sexo = sexo;
        newCandidate.cep = cep;
        newCandidate.endereco = endereco;
        newCandidate.numero = numero; 
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.celular = celular;
        newCandidate.telefoneFixo = telefoneFixo;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.possuiVeiculo = possuiVeiculo;
        newCandidate.habilitacao = habilitacao; 

        newCandidate.save((err, savedCandidate) => {
            if(err) {
                console.log(err);
                return res.status(500).send(err);
            }

            return res.status(200).send(savedCandidate);
        });
    },
};