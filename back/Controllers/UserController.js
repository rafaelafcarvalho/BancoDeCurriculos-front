const User = require('../models/User');

module.exports = {
    async register(req, res) {
        
        const {nome, profissao, datadenascimento, estadocivil, genero, cep, logradouro, numero, bairro, cidade, estado, telefone, celular, email, identidade, cpf, veiculo, habilitacao} = req.body;

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
        newUser.telefone = telefone;
        newUser.celular = celular;
        newUser.email = email;
        newUser.identidade = identidade;
        newUser.cpf = cpf;
        newUser.veiculo = veiculo;
        newUser.habilitacao = habilitacao;

        //const retorno = await User.find({ cpf: '201692554621' }).exec();
        console.log("cpf" + " " + cpf);
        const existeCpf = await User.exists({cpf: cpf})
        const existeEmail = await User.exists({email: email})
        console.log(existeCpf);

        if (existeCpf === true){
            console.log("Entrou 2");
            res.json({erro: 555,mensagem:'CPF Já cadastrado no banco de dados.'});
            return
        } 
        if (existeEmail === true){
            console.log("Entrou email");
            res.json({erro: 556,mensagem:'Email Já cadastrado no banco de dados.'});
        }
        else {
            console.log("Entrou no else");
            newUser.save((err, savedUser) =>{
                console.log("Entrou 1");
                if (err) {
                    console.log(err);
                    return res.status().send('Erro no Cadastro.');
                }

                return res.status(200).send(savedUser);
            });
        }
    },
};