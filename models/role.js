const {Schema, model}= require ('mongoose');

const roleSchema=Schema({
    rol:{
        type:String,
        required:[true, 'El rol es obligatorio']
    }}
    )

    //se exporta el rol schema y 'Role' = al nombre que se le da al modelo
module.exports=model('Role',roleSchema)