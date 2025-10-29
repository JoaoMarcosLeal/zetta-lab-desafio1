# 🎬 Movie Explorer Project

Bem-vindo ao repositório do projeto **Movie Explorer**! Este projeto é uma aplicação web desenvolvida para explorar informações sobre filmes e séries, consumindo dados diretamente da API do **The Movie Database (TMDB)**.

## ✨ Tecnologias Utilizadas

O projeto foi construído utilizando um conjunto robusto de tecnologias para garantir performance, escalabilidade e uma interface de usuário moderna:

* **Frontend Framework:** **React**
    * *Descrição:* Biblioteca JavaScript para construir interfaces de usuário baseadas em componentes.
* **Linguagem de Programação:** **TypeScript**
    * *Descrição:* Superset do JavaScript que adiciona tipagem estática, tornando o código mais seguro e fácil de manter.
* **Estilização:** **Sass (Syntactically Awesome Style Sheets)**
    * *Descrição:* Pré-processador CSS que adiciona recursos como variáveis, aninhamento e mixins, otimizando a escrita de estilos.
* **Framework CSS:** **Bootstrap 5**
    * *Descrição:* Framework front-end para design responsivo e componentes de interface prontos para uso.
* **API:** **The Movie Database (TMDB)**
    * *Descrição:* Fonte de dados primária para informações de filmes, séries e celebridades.

## 🛠️ Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou **yarn**) instalados em sua máquina.

## ⚙️ Configuração e Execução

Para colocar o projeto no ar, siga os passos abaixo no terminal:

### 1. Clonar o Repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DO_DIRETORIO_DO_PROJETO>
2. Variáveis de Ambiente (Chave da API)
Você precisará de uma chave de API do TMDB. Crie um arquivo chamado .env na raiz do projeto e adicione sua chave:

Snippet de código

# Exemplo de variável, o nome real pode variar (ex: VITE_TMDB_API_KEY, REACT_APP_TMDB_API_KEY)
REACT_APP_TMDB_API_KEY="SUA_CHAVE_AQUI"
3. Instalando Dependências
Execute o comando para baixar todas as dependências do projeto:

Bash

npm install 
# ou
# npm i
4. Executando o Mini-Backend (Opcional)
Se o seu projeto possuir um mock de API ou um servidor de dados locais, inicie-o com o seguinte comando:

Bash

npm run start:backend
5. Rodando o Front-end
Inicie o servidor de desenvolvimento do React:

Bash

npm run dev
Após a execução, o projeto estará acessível no seu navegador, geralmente em http://localhost:5173 ou na porta indicada no seu terminal.
