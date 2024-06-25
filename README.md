# SafeMedicine

SafeMedicine é uma aplicação web desenvolvida durante a Hackatona de Engenharia de Software de 2023 da PUCRS. A aplicação oferece aos médicos uma ferramenta para realizar uma segunda checagem de diagnósticos, permitindo que eles insiram prontuários, sintomas e suspeitas de problemas no chat, para receber uma análise adicional.

## Desenvolvido por

- Bruno de Sá Bolzan
- Brenda Pereira
- Eduardo Garcia
- João Schwingel
- Lazaro Maciel
- Gustavo Vidaletti

## Tecnologias Utilizadas

### Backend
- **Node.js** com **Express**: Utilizado para construir a API que consome a API da OpenAI (Chat GPT 3.5), conforme os requisitos da hackatona.
  
### Frontend
- **React**: Utilizado para criar a interface do usuário.
- **CSS**: Utilizado para estilizar a aplicação.

## Funcionalidades

- **Entrada de Dados Médicos**: Os médicos podem inserir prontuários, sintomas e suas suspeitas sobre o problema do paciente.
- **Análise Automatizada**: Utilizando a API do OpenAI, a aplicação realiza uma análise adicional para ajudar a identificar possíveis diagnósticos que podem ter sido deixados de lado.

## Como Executar o Projeto

### Requisitos
- Node.js
- npm (ou yarn)

### Passos para Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/BBolzan/SafeMedicine.git
   cd SafeMedicine

2. **Instale as dependências do backend:**
   ```bash
   cd backend
   npm install

3. **Configure as variáveis de ambiente:**
   Crie um arquivo .env na pasta backend e adicione suas credenciais da API do OpenAI:
   ```bash
   OPENAI_API_KEY=your_openai_api_key

4. **Inicie o servidor backend:**
   ```bash
   npm start
   
5. **Instale as dependências do frontend:**
   ```bash
   cd ../frontend
   npm install

6. **Inicie o servidor backend:**
   ```bash
   npm start

7. **Acesse a aplicação:**
   Abra o navegador e vá para `http://localhost:3000`.
