Node tutorial Josias.

1. Iniciar o projeto

npm init

2. criar a pasta src e o arquivo server.js

3. instalar o express

npm install express

4. Criar as config do servidor

// Adicionando o express
const express = require('express');
const app = express();

//Usado para usar json no body
app.use(express.json());

// A porta
app.listen(3333);

5. Rotas

#Criar o arquivo routes.js 

#Pegar params in request
//req.query - Acessar query params
//req.params - Acessar route params
//req.body - Acessar params request

#Importar o express e adicionar no routes.js
const express = require('express');
const routes = express.Router();

#exporta o routes
module.exports = routes;

#Adicionar no início do server.js
const routes = require('./routes');

#E no fim
app.use(routes);

#Sequelize para sql - muitos relacionamentos

6. Mongo db
mongodb+srv://achemeuga:achemeuga@clusterapi-ixfe9.mongodb.net/test?retryWrites=true&w=majority

//achemeuga
//achemeuga

7. Instalar o mongoose
npm install mongoose

8. Separa o projeto em MVC e Criar o User.js em models
#Importar o mongoose
const mongoose = require('mongoose');
#Criar o Schema
const UserSchema = new mongoose.Schema({
    email:String,
    senha:String
});
#Exportar
module.exports = mongoose.model('User',UserSchema);

9. Criar o sessioncontroller

//Adicionar no outro sessioncontroller.js
const User = require('../models/User');

module.exports = {


    async store(req, res){

        const email = req.body.email;

        const user = await User.create({email});

        return res.json({user});
    }

Troca a rita
const express = require('express');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();


routes.post('/sessions',SessionController.store);


module.exports = routes;


};

59.18 minutes ( configurando o multer)