<h1>✅ ToDo App</h1>

<p>Aplicação simples de lista de tarefas (ToDo) construída com React 19, TailwindCSS e executada dentro de um container Docker.</p>

<p>O objetivo deste projeto é praticar conceitos de componentização em React, estilização com TailwindCSS e containerização com Docker.</p>

<h2>🚀 Tecnologias utilizadas</h2>

<p>⚛️ React 19 – Biblioteca para construção da interface</p>
<p>🎨 TailwindCSS – Estilização rápida e responsiva</p>

<p>🐳 Docker – Container para isolar e rodar a aplicação</p>

<h2>📦 Como rodar o projeto</h2>
<h3>1️⃣ Clonar o repositório</h3>
<p>git clonehttps://github.com/leonardomarcattidasilva/project_management.git</p>
<p>cd project_management</p>

<h3>2️⃣ Construir a imagem Docker</h3>
<p>docker build -t todo-app . </p>

<h3>3️⃣ Rodar o container</h3>
<p>docker run -d -p 3000:3000 --name todo-app -h todo-app -v pasta_projeto:/my_app todo-app</p>

<h3>4️⃣ Acessar no navegador</h3>
<p>👉 http://localhost:3000</p>

<h3>📝 Funcionalidades</h3>

<ul>
   <li>➕ Adicionar novas tarefas</li>
   <li>✅ Marcar tarefas como concluídas</li>
   <li>❌ Remover tarefas</li>
</ul>

<h3>💾 Persistência em memória durante a execução</h3>
<p>Os dados das tarefas são guardados em localStage</p>

<h4>📂 Estrutura do projeto</h4>
<p>📦 projeto-todo</p>
 <p>┣ 📂 src</p>
 <p>┃ ┣ 📂 components</p>
 <p>┃ ┣ 📂 pages</p>
 <p>┃ ┗ 📜 App.jsx</p>
 <p>┣ 📜 package.json</p>
 <p>┣ 📜 tailwind.config.js</p>
 <p>┣ 📜 Dockerfile</p>
 <p>┗ 📜 README.md

<h3>🐳 Dockerfile usado</h3>
<p>FROM node:latest</p>
<p>WORKDIR /my_app</p>
<p>COPY . . </p>
<p>RUN npm install</p>
<p>EXPOSE 3000</p>
<p>CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]</p>

<h3>🤝 Contribuição</h3>

<p>Contribuições são bem-vindas!</p>
<p>Faça um fork do projeto</p>
<p>Crie uma branch (git checkout -b minha-feature)</p>
<p>Commit suas alterações (git commit -m 'Adiciona nova feature')</p>
<p>Faça push para a branch (git push origin minha-feature)</p>
<p>Abra um Pull Request 🚀</p>

<h3>📜 Licença</h3>
<p>Este projeto está sob a licença MIT – sinta-se livre para usar e modificar.</p>