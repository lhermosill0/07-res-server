const mongoose = require('mongoose');

const cnn= async()=>{
   try {
       await mongoose.connect(process.env.MONGO_DB_CONEXION);
     console.log('Conectado exitosamente.')
    } 
    catch (error) {
        console.log(error)
        console.log('No Conectado.')
        
   }
}
module.exports=cnn