const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ObjectId } = require('mongodb');
const app = express();

app.use(bodyParser.urlencoded({'extended': false}));
app.use(bodyParser.json());
app.use(cors());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://adm:elperro@db-trab2.llw6g6k.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db('TAREFAS');

async function insereElemento(titulo, concluido){
    const tarefas = db.collection('tarefa');
    const newTarefa = {titulo: titulo, concluido: concluido};
    await tarefas.insertOne(newTarefa);

}

async function editaElemento(_id, titulo, concluido){
    const tarefas = db.collection('tarefa');
    const filtro = { _id: new ObjectId(_id) };
    const update = { "$set": { titulo: titulo, concluido: concluido } };
    await tarefas.updateOne(filtro, update);

}

async function removeElemento(titulo){
    const tarefas = db.collection('tarefa');
    tarefas.findOneAndDelete({ titulo: titulo });
}

async function pegaTodos(res){
    const tarefas = await db.collection('tarefa').find();
    let tarefasres= [];
    for await (let tarefa of tarefas){
        tarefasres.push(tarefa);
    }
    res.json(tarefasres);
}


app.post('/tarefas', (req, res) => {
    const {titulo, concluido } = req.body;
    insereElemento(titulo, concluido);
    res.json("Inserido");
})

app.delete('/tarefas', (req, res) => {
    const {titulo} = req.body;
    removeElemento(titulo);
    res.json("Deletado");
})

app.get('/tarefas', (req, res) => {
    pegaTodos(res);
})

app.put('/tarefas', (req, res) => {
    const {_id, titulo, concluido} = req.body;
    editaElemento(_id, titulo, concluido);
    res.json("Editado");
});


app.listen(3001, () => {
    console.log("Servidor online na porta 3001");
})
