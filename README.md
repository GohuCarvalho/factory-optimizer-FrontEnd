# 🏭 Factory Optimizer - Frontend

> Interface moderna e responsiva para o gerenciamento de produção industrial, integrada à Factory Optimizer API.

O **Factory Optimizer** é uma aplicação Full Stack que permite controlar matérias-primas e produtos, calculando automaticamente a produção máxima com base no estoque disponível.

---

## 🎯 Objetivo do Sistema

Ajudar gestores de fábrica a:
* **Gerenciar Inventário:** Controle total de matérias-primas e produtos.
* **Otimizar Recursos:** Definir composições técnicas precisas.
* **Planejar Produção:** Gerar planos que maximizam o valor financeiro sem exceder o estoque.

---

## 🛠 Tecnologias Utilizadas

* **Framework:** [Vue 3](https://vuejs.org/) (Composition API)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **HTTP Client:** [Axios](https://axios-http.com/)
* **Testes:** [Vitest](https://vitest.dev/) & [Vue Test Utils](https://test-utils.vuejs.org/)
* **Estilização:** CSS3 / Componentes Base Customizados

---

## ⚙️ Funcionalidades

### 📦 Gestão de Produtos & Materiais
* CRUD completo (Criar, Listar, Atualizar e Deletar).
* Validação de campos em tempo real.

### 📈 Planejamento de Produção
* Visualização do plano otimizado gerado pelo algoritmo do Back-End.
* Cálculo automático de quantidade produzível e valor total estimado.

---

## 🧩 Estrutura de Pastas

```text
src
 ├── components        # Componentes reutilizáveis (botões, inputs, tabelas)
 ├── pages             # Views principais (Produtos, Materiais, Plano)
 ├── services          # Integração com API (Axios)
 ├── composables       # Lógica compartilhada (ex: Toast/Notificações)
 └── tests             # Testes unitários e de integração

🚀 Como Executar
Instalar dependências:

npm install

Executar a aplicação em modo de desenvolvimento:

npm run dev

A aplicação estará disponível em: http://localhost:5173

🧪 Testes
Para garantir a qualidade da interface e o comportamento dos componentes:

# Executar testes unitários
npm run test:unit

Resultado esperado: 
Test Files  4 passed (4)                                                                                                        
      Tests  7 passed (7)

🔗 Integração com API (Endpoints)
Recurso Endpoint Verbos
Produtos  /products   GET, POST, PUT, DELETE
Matérias-Primas/   raw-materials   GET, POST, PUT, DELETE
Plano de Produção/  production-plan   GET

👨‍💻 Autor
Hugo Avelino de Carvalho Desenvolvedor Full Stack
