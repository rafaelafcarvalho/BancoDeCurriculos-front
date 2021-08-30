# Desafio Gama Academy Banco de Currículos
Link documentação dos recursos Web Services REST: https://api-bancodecurriculos.herokuapp.com/docs/

Link da Landing page: https://bancodecurriculos.herokuapp.com/

*Obs.: Em caso de erro é necessário a instalação da extensão Moesif Origin devido a um problema com CORS*
## Proposta
Desenvolver uma página para atração de profissionais para conectar as oportunidades de emprego.

### Frontend

#### Fase 1 - Criação da Página

Apresentar a estrutura do projeto no github;

Landing page com formulário para preenchimento de candidatura;

Não existe uma regra para o layout da página, use a imaginação com todos os conhecimentos adquiridos no front-end;

Indicamos o Netlify para hospedar sua pagina gratuitamente.


### Backend

#### Domínio - Modelagem de Dados

Cadastro de candidatos com os campos: Id, Nome, Data Nascimento, Endereço {cep, logradouro, numero, bairro, cidade e estado}, Telefone, Email e Profissão e demais campos mencionados na imagem de ilustração de formulário de candidatos.
 
Para a conclusão do cadastro, consultar o seu endereço pelo CEP informado (Consultar a API VIA Cep);
NOTA: O sistema deverá utilizar de algum client API para buscar um endereço do serviço via cep conforme link: https://viacep.com.br/ws/{SEU_CEP}/json/

#### Regra de Negócio

Não pode haver 2 cadastros de candidatos com o mesmo cpf;

Todo candidato precisará preencher os campos: CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Profissão e Celular;

#### Integração entre a Página de Formulário e o Back-end;

Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados;

Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger.
