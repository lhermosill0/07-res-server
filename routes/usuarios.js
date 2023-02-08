const { Router } =require ('express');
const {usuariosGET,usuariosPUT,usuariosDEL,usuariosPOST }= require('../controllers/usuarios');

const router = Router();

  router.get('/', usuariosGET) ;

  router.put('/:id',usuariosPUT) ;

  router.post('/',usuariosPOST);


 router.delete('/',usuariosDEL) ;

module.exports=router;