import './formstyle.css';
import React, { useState } from 'react';
import axios from 'axios';

const initialValue = {
    nome: '',
    profissao: '',
    datadenascimento: '',
    estadocivil: '',
    genero: '',   
    cep: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    telefone1: '',
    telefone2: '',
    contato: '',
    celular: '',
    email: '',
    identidade: '',
    cpf: '',
    veiculo: '',
    habilitacao: ''
  }

const Form = ()=> {

  const [values, setValues] = useState(initialValue);
    
  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onBlurCep(ev){
    const { name, value } = ev.target;

    const cep = value?.replace(/[^0-9]/g,'')

    if (cep?.length !== 8){
        return
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {

            values.bairro = data.bairro
            values.cidade = data.localidade
            values.estado = data.uf
            values.logradouro = data.logradouro
            setValues({ ...values, [name]: value });

        })
  }

  function onSubmit(ev) {
    ev.preventDefault();

    axios.post('http://localhost:7070/register', values,{
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    })
    .then(function (response) {
        if (response.data.erro ===555){
            alert('Erro: ' + response.data.mensagem);
            return
        }
        if (response.data.erro ===556){
            alert('Erro: ' + response.data.mensagem);
            return
        }
        else{
            alert('Seus dados já foram enviados para o nosso banco de dados. Obrigado pelo seu cadastro');
        }
      })
      .catch(function (error) {
        alert('Erro - Tente novamente em instantes: ' + error.code);
      });
  }
  return (
    <div>
      <header className="App-header">
          <div class="logo">
                    <h1/>
          </div>
        <div class="titulo">
            <h1>Cadastro de Currículos JobsNET</h1>
            <p>Cadastre suas informações para fazer parte do banco de currículos da Jobsnet</p>
        </div>
        <form class="formclass" action="" autocomplete="on" onSubmit={onSubmit} >           
          <fieldset class="grupo"> <br/>       
            <div>
                <h2 id="secao1">DADOS PESSOAIS</h2>
            </div>   
                <div id="check">
                    <label for="nome">Nome Completo:* </label>
                    <input type="text" id="box" name="nome" onChange={onChange} placeholder="Insira seu nome completo" required/>
                </div>

                 <div id="check">
                    <label for="profissao">Profissão:* </label>
                    <input type="text" id="box" name="profissao" onChange={onChange} required/>
                </div>

                <div id="check">
                    <label for="dNasc">Data de Nascimento:* </label>
                    <input type="date" id="box" name="datadenascimento" onChange={onChange} required/>
                </div>

                <div id="check">
                    <label for="estadocivil">Estado Civil:</label>
                        <select id="box" name="estadocivil" onChange={onChange}>
                            <option>-----</option>
                            <option>Solteiro(a)</option>
                            <option>Casado(a)</option>
                            <option>União estável</option>
                            <option>Divorciado(a)</option>
                            <option>Viúvo(a)</option>
                        </select>
                </div>
                <div id="check">
                    <label for="genero">Gênero:</label>
                        <select id="box" name="genero" onChange={onChange}>
                            <option>-----</option>
                            <option>Feminino</option>
                            <option>Masculino</option>
                            <option>Prefiro não declarar</option>
                        </select>
                </div>
                <div id="check">
                    <label for="cep">CEP:*</label>
                    <input type="text" id="box" name="cep"  onBlur={(ev) => onBlurCep(ev)} onChange={onChange}  required/>
                </div>
                <div id="check">
                    <label for="logradouro">Logradouro:*</label>
                    <input type="text" id="box" name="logradouro" value={values.logradouro}  onChange={onChange} placeholder="ex: Nome da rua, Bloco 5, APT 213" required/>
                </div>
                <div id="check">
                    <label for="numero">N°:* </label>
                    <input type="text" id="box" name="numero" onChange={onChange} required/>
                </div>
                <div id="check">
                    <label for="bairro">Bairro:* </label>
                    <input type="text" id="box" name="bairro" value={values.bairro} required/>
                </div>
                <div id="check">
                    <label for="cidade">Cidade:* </label>
                    <input type="text" id="box" name="cidade" value={values.cidade}required/>
                </div>
                <div id="check">
                    <label for="estado">UF:</label>
                    <input type="text" id="box" name="estado" value={values.estado}/>
                </div>
                <div id="check">
                    <label for="telefone1">Telefone Fixo 1:</label>
                    <input type="tel" id="box" name="telefone1" onChange={onChange}/>
                </div>
                <div id="check">
                    <label for="telefone2">Telefone Fixo 2</label>
                    <input type="tel" id="box" name="telefone2" onChange={onChange}/>
                </div>
                <div id="check">
                    <label for="celular">Celular:* </label>
                    <input type="tel" id="box" name="celular" onChange={onChange} required/>
                </div>
                <div id="check">
                    <label for="contato">Contato:</label>
                    <input type="text" id="box" name="contato" onChange={onChange}/>
                </div>

                <div id="check"> 
                    <label for="email">E-mail:* </label>
                    <input type="email" id="box" name="email" onChange={onChange} placeholder="meunome@exemplo.com" required/>
                </div>
                <br/>
            <div>
                <h2 id="secao2">DOCUMENTOS</h2>
            </div>

                <div id="check">
                    <label for="identidade">Identidade:</label>
                    <input type="text" id="box" name="identidade" onChange={onChange}/>
                </div>

                <div id="check">
                    <label for="cpf">CPF:*</label>
                    <input type="text" id="box" name="cpf"  placeholder="Digite somente os números" onChange={onChange} maxlength="11" required/>
                </div>

                <div id="check">
                    <label for="veiculo">Possui veículos:</label>
                    <select id="box"name="veiculo" onChange={onChange}>
                        <option>-----</option>
                        <option>Possuo</option>
                        <option>Não possuo</option>
                    </select>
                </div>

                <div id="check">
                    <label for="habilitacao">Habilitação:</label>
                    <select id="box" name="habilitacao" onChange={onChange}>
                        <option>-----</option>
                        <option>A</option>
                        <option>B</option>
                        <option>AB</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </div>
            </fieldset>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
      </header>

    </div>
  );
}

export default Form;
