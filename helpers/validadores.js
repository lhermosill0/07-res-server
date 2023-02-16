const Role = require("../models/role");
const Usuario = require("../models/usuario")
const mongoose = require('mongoose');
const esRoleValido=async(rol='')=>{
    const existeRol=await  Role.findOne({ rol });
    if (!existeRol){
       throw new Error(`El rol ${ rol } ingresado no es un rol válido`)
    }

 }


 const emailExiste = async( correo = '' ) => {

   // Verificar si el correo existe
   const existeEmail = await Usuario.findOne({ correo });
   if ( existeEmail ) {
       
      throw  new Error(`El correo: ${ correo }, ya está registrado `);
   }
}
const IDExiste = async( id = '' ) => {

   // Verificar si el correo existe
   const idusuario = await Usuario.findById({ id });
   if ( ! idusuario ) {
       
      throw  new Error(`El id: ${ id }, no  existe `);
   }
}

const validaID = ( id = '' ) => {

   const idusuario =  mongoose.Types.ObjectId.isValid(id);
   if (!idusuario) {
       
      throw  new Error(`El id: ${ id }, no es valido `);
   }
}

 module.exports= 
 { 
   esRoleValido, validaID,
   emailExiste ,IDExiste
 }