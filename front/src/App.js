import './App.css';
function App() {
  return (
    <div>
      <header className="App-header">
        <div class="logo">
                    <h1></h1>
        </div>
        <div class="titulo">
            <h1>Cadastro de Currículos JobsNET</h1>
            <p>Cadastre suas informações para fazer parte do banco de currículos da Jobsnet</p>
        </div>
        <form class="formclass" action="" autocomplete="on">           
          <fieldset class="grupo"> <br/>       
            <div>
                <h2 id="secao1">DADOS PESSOAIS</h2>
            </div>   
                <div id="check">
                    <label for="nome">Nome Completo:* </label>
                    <input type="text" id="box" name="nome" placeholder="Insira seu nome completo" required/>
                </div>

                 <div id="check">
                    <label for="cargo">Profissão:* </label>
                    <input type="text" id="box" name="cargo" required/>
                </div>

                <div id="check">
                    <label for="dNasc">Data de Nascimento:* </label>
                    <input type="date" id="box" required/>
                </div>

                <div id="check">
                    <label for="eCivil">Estado Civil:</label>
                        <select id="box" name="eCivil">
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
                        <select id="box" name="genero">
                            <option>-----</option>
                            <option>Feminino</option>
                            <option>Masculino</option>
                            <option>Prefiro não declarar</option>
                        </select>
                </div>
                <div id="check">
                    <label for="cep">CEP:*</label>
                    <input type="text" id="box" name="cep" required/>
                </div>
                <div id="check">
                    <label for="logradouro">Logradouro:*</label>
                    <input type="text" id="box" name="logradouro" placeholder="ex: Nome da rua, Bloco 5, APT 213"/>
                </div>
                <div id="check">
                    <label for="complemento">N°:* </label>
                    <input type="text" id="box" name="complemento"/>
                </div>
                <div id="check">
                    <label for="bairro">Bairro:* </label>
                    <input type="text" id="box" name="bairro"/>
                </div>
                <div id="check">
                    <label for="localidade">Cidade:* </label>
                    <input type="text" id="box" name="localidade"/>
                </div>
                <div id="check">
                    <label for="uf">UF:</label>
                    <input type="text" id="box" name="uf"/>
                </div>
                <div id="check">
                    <label for="tel1">Telefone Fixo:</label>
                    <input type="tel" id="box" name="tel1"/>
                </div>
                <div id="check">
                    <label for="cel">Celular:* </label>
                    <input type="tel" id="box" name="cel"/>
                </div>
                
                <div id="check">
                    <label for="contato">Contato:</label>
                    <input type="text" id="box" name="contato"/>
                </div>

                <div id="check"> 
                    <label for="email">E-mail:* </label>
                    <input type="email" id="box" name="email" placeholder="meunome@exemplo.com"/>
                </div>
                <br/>
            <div>
                <h2 id="secao2">DOCUMENTOS</h2>
            </div>

                <div id="check">
                    <label for="ident">Identidade:</label>
                    <input type="text" id="box" name="ident"/>
                </div>

                <div id="check">
                    <label for="cpf">CPF:*</label>
                    <input type="text" id="box" name="cpf" maxlength="11"/>
                </div>

                <div id="check">
                    <label for="veiculo">Possui veículos:</label>
                    <select id="box"name="veiculo">
                        <option>-----</option>
                        <option>Possuo</option>
                        <option>Não possuo</option>
                    </select>
                </div>

                <div id="check">
                    <label for="hab">Habilitação:</label>
                    <select id="box" name="hab">
                        <option>-----</option>
                        <option>A</option>
                        <option>B</option>
                        <option>AB</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </div>
            </fieldset>
        </form>
        <button>Enviar</button>
      </header>

    </div>
  );
}

export default App;
