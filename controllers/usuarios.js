const { response } = require('express');
const bcryptjs = require('bcryptjs')
const Usuario= require('../models/usuario');



const usuariosGET=(req,res=response)=> {
        const qry=req.query
        res.status(403).json(
         {ok:true,
         qry,
         msg:'GET_ API'})
}
const usuariosPUT=(req,res=response)=> {
    const id=req.params.id;
    res.status(300).json(
     {ok:true,
     id,
     msg:'PUT_ API'})
}

 const usuariosPOST=async(req,res=response)=> {
    
     const {nombre,correo, password,rol}=req.body;
     const usuario =new Usuario({nombre,correo, password,rol});
     //verificar que el correo exista 
     const existeMail = await Usuario.findOne({correo:correo})
     if (existeMail){
        return res.status(400).json(
               {
                msg:"Este correo ya existe",
                code:'BAD REQUEST'
               }
        )
     }
     //cifrar contraseña
     const salt= bcryptjs.genSaltSync();
     usuario.password= bcryptjs.hashSync(password,salt)
    
     await usuario.save();
     res.status(201).json(
     {
      ok:true,
      msg:'POST_ API',
      usuario
    })
}
const usuariosDEL=(req,res=response)=> {
     res.status(403).json(
     {ok:true,
     msg:'DELETE_ API'})
}



module.exports={usuariosGET,usuariosDEL,usuariosPUT,usuariosPOST}
