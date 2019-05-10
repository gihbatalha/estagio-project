const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const uri = "mongodb+srv://estagioYuri2019:estagio2019@cluster0-opccq.mongodb.net/test?retryWrites=true";

MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    category = client.db("estagioYuri2019").collection("category");
    console.log("Conectado com o banco");
    app.listen(3000, function(){
        console.log("Servidor inicializado na porta 3000");
    });
});

app.post('/category', (req,res) => {
    console.log("Salvando nova categoria: ", req.body);
    category.insertOne(req.body)
        .then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send("Error: "+ error);
        });
});

app.get('/category', (req,res) => {
    console.log("Recuperando todas as categorias");

    category.find()
        .toArray()
        .then(results => {
            res.status(200).send(results);
        }).catch(error => {
            res.status(500).send("Error: "+ error);
        });
});

app.get('/category/:id', (req,res) => {
    console.log("Recuperando a categoria com id ", req.params.id);

    category
        .findOne({_id:ObjectId(req.params.id)})
            .then(result => {
                res.status(200).send(result);
            }).catch(error => {
                res.status(500).send("Error: "+ error);
            });
});

app.put('/category/:id', (req,res) => {
    console.log("Alterando a categoria com id ", req.params.id);

    category
        .updateOne({_id:ObjectId(req.params.id)}, {$set:req.body}, { upsert: true })
            .then(result => {
                res.status(200).send(result);
            }).catch(error => {
                res.status(500).send("Error: "+ error);
            });
});


app.delete('/category/:id', (req,res) => {
    console.log("Deletando a categoria por id ", req.params.id);

    category
        .remove({_id:ObjectId(req.params.id)})
            .then(result => {
                res.status(200).send(result);
            }).catch(error => {
                res.status(500).send("Error: "+ error);
            });
});

