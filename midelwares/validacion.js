const { validationResult } = require('express-validator');
const validarCampos= (req,res, next)=>{
    const errors= validationResult(req)
    if (!errors.isEmpty){
    return res.status(400).json(
        {
            msg:errors,
            response:"error aqui en el validador"
        })
    }

    next();  
}

module.exports ={ validarCampos }