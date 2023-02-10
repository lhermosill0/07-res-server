const { Router } =require ('express');
const router = Router();
const { check } = require('express-validator');
const {usuariosGET,usuariosPUT,usuariosDEL,usuariosPOST }= require('../controllers/usuarios');
const {  esRoleValido } = require('../helpers/validadores');
const { validarCampos } = require('../midelwares/validacion');


  router.get('/', usuariosGET) ;

  router.put('/:id',usuariosPUT) ;

  //ejecuta un midelware para validar la ruta
  //check('rol','El rol no es válido').isIn('ADMIN_ROLE','USER_ROLE'),
  //validar el rol, vs la Base de datos con el modelo. 
  //check('rol').custom((rol)=> esValido(rol)), se puede ejecutar de las dos maneras.
  router.post('/',
  [
  check('nombre','El nombre es obligatorio').not().isEmpty(),
  check('password','El password es obligatorio y debe de contener mas de 6 caracteres').isLength({min:6}),
  check('correo','El correo no es válido').isEmail(),
  check('rol').custom( esRoleValido ),
  validarCampos
   ],usuariosPOST);


 router.delete('/',usuariosDEL) ;

module.exports=router;