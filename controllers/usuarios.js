const { response } = require('express');
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
     const body=req.body;
     const usuario =new Usuario(body);
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
