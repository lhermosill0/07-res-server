const express = require('express')
var cors = require('cors');
const cnn = require('../database/config');
require('dotenv').config()
class  Server  {
 constructor(){
   //conectar BD 
    this.cnnToDB();
    this.usuariosPATH='/api/usuarios';
    this.app = express();
    this.PORT=process.env.PORT;
    //rutas de mi aplicación
    this.middlewares();
    this.routes();
 }
  async cnnToDB(){
    await cnn()
  }
 middlewares(){
   //otro midelware para formatear el body de la peticion req.
   this.app.use(express.json())
   //midelware del cors 
    this.app.use(cors())

    //direcctorio público
    this.app.use(express.static('public'))
 }
 routes(){
   this.app.use(this.usuariosPATH,require('../routes/usuarios'))
   

 }
 listen(){
    this.app.listen(this.PORT, ()=>{
        console.log('proceso corriendo en  puerto ',this.PORT)
    }) 
 }
}
module.exports =Server;
