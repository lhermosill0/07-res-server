const {Schema, model}= require ('mongoose');

const UsarioSchema=Schema({
    nombre:{
        type:String,
        required:[true, 'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true, 'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'la contraseña es obligatoria']
    },
    img:{
        type:String,
        required:[false, 'La imagen es obligatorio']
    },
    rol:{
        type:String,
        required:[true, 'El rol es obligatorio'],
        enum:['ADMIN_ROLE', 'USER_ROLE']
    },
    estado:{
        type:Boolean,
        default:true,
    },
    google:{
        type:Boolean,
        default:true,
    },
})
UsarioSchema.methods.toJSON=function(){
    //aqui va a ignorar el v , y el password. sólo va tomar el objeto usuario quitando esas opciones.
    const {__v, password, ...usuario}=this.toObject()
    return usuario
}

module.exports=model('Usuario',UsarioSchema);