const { response } = require('express');
const bcryptjs = require('bcryptjs')
const Usuario= require('../models/usuario');



const usuariosGET=async(req,res=response)=> {
        const { limit =3, desde=0} =req.query;//argumentos opcionales que vienen desde el qry
        const query={estado:true}
        const [total , usuarios ]= await Promise.all( [ Usuario.countDocuments(query),
            Usuario.find({query})
            .limit(limit)
            .skip(desde)
        ])
        res.json({total,usuarios})
}
const usuariosPUT=async (req,res=response)=> {
    
    //excluyo los primeros parámetros y envío el resto
    const { id } =req.params;
    const { _id ,password, correo,google,... resto}=req.body
    if (password){
        //si trae pass lo actualiza de nuevo
        const salt= bcryptjs.genSaltSync();
        resto.password= bcryptjs.hashSync(password,salt)
       
    }
     //actualiza 
    const usuario=await Usuario.findByIdAndUpdate(id,resto)
    res.json(usuario);
}

 const usuariosPOST=async(req,res=response)=> {
    
     const {nombre,correo, password,rol}=req.body; 
     const usuario =new Usuario({ nombre,correo, password,rol});
     //verificar que el correo exista 
     
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
const usuariosDEL= async(req,res=response)=> {
    const  { id  } =req.params
    //borrado fisico 
    //const usuario =  await Usuario.findByIdAndDelete(id);
    //borrado lógico
    const usuario =  await Usuario.findByIdAndUpdate(id, {estado:false});
     res.status(403).json(
     {usuario})
}



module.exports={usuariosGET,usuariosDEL,usuariosPUT,usuariosPOST}
