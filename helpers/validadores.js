const Role = require("../models/role")

const esRoleValido=async(rol='')=>{
    const existeRol=await  Role.findOne({ rol });
    if (!existeRol){
       throw new Error(`El rol ${ rol } ingresado no es un rol válido`)
    }

 }
 
 module.exports= 
 {esRoleValido}