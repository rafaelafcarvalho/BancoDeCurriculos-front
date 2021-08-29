const User = require('../models/User');

module.exports = {
    async register(req, res) {
        
        const {nome, profissao, datadenascimento, estadocivil, genero, cep, logradouro, numero, bairro, cidade, estado, telefone1, telefone2, contato, celular, email, identidade, cpf, veiculo, habilitacao} = req.body;

        const newUser = new User();

        newUser.nome = nome;
        newUser.profissao = profissao;
        newUser.datadenascimento = datadenascimento;
        newUser.estadocivil = estadocivil;
        newUser.genero = genero;
        newUser.cep = cep;
        newUser.logradouro = logradouro;
        newUser.numero = numero;
        newUser.bairro = bairro;
        newUser.cidade = cidade;
        newUser.estado = estado;
        newUser.telefone1 = telefone1;
        newUser.telefone2 = telefone2;
        newUser.contato = contato;
        newUser.celular = celular;
        newUser.email = email;
        newUser.identidade = identidade;
        newUser.cpf = cpf;
        newUser.veiculo = veiculo;
        newUser.habilitacao = habilitacao;

        const existeCpf = await User.exists({cpf: cpf})
        const existeEmail = await User.exists({email: email})

        if (existeCpf === true){
            res.json({erro: 555,mensagem:'CPF Já cadastrado no banco de dados.'});
            return
        } 
        if (existeEmail === true){

            res.json({erro: 556,mensagem:'Email Já cadastrado no banco de dados.'});
            return
        }
        else {
            newUser.save((err, savedUser) =>{
                if (err) {
                    return res.status().send('Erro no Cadastro.');
                }

                return res.status(200).send(savedUser);
            });
        }
    },
};