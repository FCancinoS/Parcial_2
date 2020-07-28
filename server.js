//Importamos modulos
const express = require("express")
const morgan = require("morgan");

//instancia de express
const app = express();

//declaracion de puerto
PORT = 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

//Rutas

app.get("/",(req,res)=>{
    res.send("You are on the homepage");
})
app.post("/post",(req,res)=>{
    res.send("Welcome " + req.body.user)
})

app.delete("/delete",(req,res)=>{
    res.json({delete:true});
})
app.put("/put/:id",(req,res)=>{
    res.send("Task " + req.params.id +" has been updated");
})
//Iniciador de servidor
app.listen(PORT,(error)=>{
    console.log("Corriendo");
})

