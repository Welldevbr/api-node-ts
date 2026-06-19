# API Node.js com TypeScript

Uma API REST robusta construída com **Node.js**, **TypeScript** e **Express**, com suporte completo a autenticação, banco de dados e documentação automática via Swagger.

## ✨ Características

- ✅ **TypeScript** - Tipagem estática completa
- ✅ **Express** - Framework web rápido e minimalista
- ✅ **Prisma ORM** - Query builder type-safe para banco de dados
- ✅ **JWT** - Autenticação segura com JSON Web Tokens
- ✅ **Bcrypt** - Hash seguro de senhas
- ✅ **Zod** - Validação de schemas com tipos TypeScript
- ✅ **ESLint & Prettier** - Code quality e formatação automática
- ✅ **Node.js 20.x** - Versão LTS moderna

## 📋 Pré-requisitos

- **Node.js** 20.x ou superior
- **npm** ou **yarn**
- Um banco de dados configurado (PostgreSQL, MySQL, SQLite, etc.)

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/Welldevbr/api-node-ts.git
cd api-node-ts
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. **Configure o Prisma**
```bash
npx prisma migrate dev
```

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento com hot-reload |
| `npm start` | Inicia o servidor em produção |
| `npm run build` | Compila TypeScript para JavaScript |
| `npm run test` | Executa os testes com Jest |
| `npm run format` | Formata o código com Prettier |

## 📂 Estrutura do Projeto

```
src/
├── index.ts              # Ponto de entrada da aplicação
├── config/               # Configurações
├── controllers/          # Lógica de controle
├── services/             # Lógica de negócio
├── routes/               # Definição de rotas
├── middleware/           # Middlewares customizados
├── schemas/              # Validações Zod
├── types/                # Tipos TypeScript
└── utils/                # Utilitários
dist/                     # Build compilado
prisma/
├── schema.prisma         # Definição do schema do banco
└── migrations/           # Histórico de migrações
```

## 🔐 Autenticação

A API utiliza **JWT (JSON Web Tokens)** para autenticação. Para fazer requisições autenticadas, inclua o token no header `Authorization`:

```bash
curl -H "Authorization: Bearer SEU_TOKEN_AQUI" http://localhost:3000/api/endpoint
```

## 📚 Documentação da API

Acesse a documentação interativa do Swagger em:

```
http://localhost:3000/api-docs
```

## 🧪 Testes

Execute a suite de testes:

```bash
npm run test
```

Para ver a cobertura de testes:

```bash
npm run test -- --coverage
```

## 🔨 Desenvolvimento

### Build do Projeto

```bash
npm run build
```

Isso irá compilar o TypeScript para JavaScript na pasta `dist/`.

### Formatação de Código

```bash
npm run format
```

Formata automaticamente todo o código usando Prettier.

## 🐳 Docker (Opcional)

Para rodar em contêiner Docker:

```bash
docker build -t api-node-ts .
docker run -p 3000:3000 --env-file .env api-node-ts
```

## 📦 Dependências Principais

- **express** - Web framework
- **@prisma/client** - ORM type-safe
- **jsonwebtoken** - Geração e validação de JWT
- **bcryptjs** - Hash de senhas
- **zod** - Validação de dados
- **zod-openapi** - Integração Zod com OpenAPI
- **swagger-ui-express** - UI para documentação Swagger
- **http-status-codes** - Constantes de códigos HTTP
- **dotenv** - Variáveis de ambiente

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 👤 Autor

**Wellington Santana**

- GitHub: [@Welldevbr](https://github.com/Welldevbr)

## 🆘 Suporte

Se encontrar algum problema, abra uma [issue](https://github.com/Welldevbr/api-node-ts/issues) no repositório.

---

**⭐ Se este projeto foi útil, considere dar uma estrela!**
