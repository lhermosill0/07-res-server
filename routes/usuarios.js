const { Router } =require ('express');
const router = Router();
const { check } = require('express-validator');
const {usuariosGET,usuariosPUT,usuariosDEL,usuariosPOST }= require('../controllers/usuarios');
const {  esRoleValido, emailExiste, IDExiste, validaID } = require('../helpers/validadores');
const { validarCampos } = require('../midelwares/validacion');


  router.get('/', usuariosGET) ;

  router.put('/:id',[
 
  check('id','El id no es válido').isMongoId(),
  check('id').custom( IDExiste ),
  check('rol').custom( esRoleValido ),
   validarCampos
  ],usuariosPUT) ;
  
  //ejecuta un midelware para validar la ruta
  //check('rol','El rol no es válido').isIn('ADMIN_ROLE','USER_ROLE'),
  //validar el rol, vs la Base de datos con el modelo. 
  //check('rol').custom((rol)=> esValido(rol)), se puede ejecutar de las dos maneras.
  router.post('/',
  [
  check('nombre','El nombre es obligatorio').not().isEmpty(),
  check('password','El password es obligatorio y debe de contener mas de 6 caracteres').isLength({min:6}),
  check('correo','El correo no es válido').isEmail(),
  check('correo').custom( emailExiste ),
  check('rol').custom( esRoleValido ),
  validarCampos
   ],usuariosPOST);


 router.delete('/:id',[ 
  check('id','El id no es válido').isMongoId(),
  check('id').custom( IDExiste ),
 validarCampos],usuariosDEL) ;

module.exports=router;