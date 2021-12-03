//librerias para levantar el servidor
var bodyParser = require('body-parser');
const express = require('express');
var cors=require('cors');
//imports
let dbConector=require('./dbConector');
// dbConector.testConnection().then(function(e){
//    console.log('promesa correcta, el return de la promesa es: '+ e)
//    return e
// })

//a traves de estas lineas se puede observar los datos relacionados con mi filtro
// dbConector.findData('clientes',{ //clientes es el nombre de mi coleccion dentro de la baase de datos y clienteId va a ser mi filtro
//     clienteId:'1236'
// })
// .then(function(e){
//     console.log(e);
// });


//LEVANTAR EL SERVIDOR

//configuracion app
const port = 8080
//inicializar

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//regist routes

app.post('/clientes', async (req, res) => {
    // console.log(req.params) // se usan para ver si estan llegando los datos deesde el logiin en el front
    // console.log(req.body)
    let data= await dbConector.findData('clientes',{ // nombre de la coleccion
        username: req.body.nombre, // el body.nombre sale de lo que yo quiero usar como parametros para loguearme al igual que el body.clienteId
        password: req.body.clienteId,
    });
    res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

