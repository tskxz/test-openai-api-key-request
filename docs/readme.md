## Requisitos

Transferir o repositorio
```bash
git clone https://github.com/tskxz/test-openai-api-key-request.git
```
Mudar o nome do ficheiro .env.example para .env

```bash
mv .env.example .env
```
Criar uma api key openai - https://platform.openai.com/api-keys  
Definir OPENAI_API_KEY no .env

Instalar as dependencias com o seguinte comando
```bash
npm install
```

## Rodar o servidor
```bash
node server.js
```

## Exemplo do request  
![request example](./img/request.png)

## Mais informações
https://platform.openai.com/docs/quickstart  
https://platform.openai.com/docs/api-reference/introduction    