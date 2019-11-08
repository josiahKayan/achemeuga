const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb+srv://achemeuga:achemeuga@clusterapi-ixfe9.mongodb.net/achemeuga?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology:true});

app.use(express.json());


app.get('/',(req, res)=>{
    return res.json({'message':'Estou funcionando'});
});

app.use(routes);



app.listen(3333);