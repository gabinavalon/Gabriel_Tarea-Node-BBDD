const mongoose = require('mongoose');
const LibroSchema = mongoose.Schema(
{
    titulo: {
        type:String,
        required: [true,'El titulo es obligatorio']
    },
    autor: {
        type:String,
        required: [true,'La autoría es obligatoria']
    },
    precio: {
        type:Number
    },
    isbn:{
        type: String,
        requires: [true, 'El ISBN es obligatorio']
    },    
    imagen: {
        type:String
    }
}
)
// Sobreescriubimos un método del Schema para modificar el objeto
LibroSchema.methods.toJSPON = function (){
    const {_id,...libro} = this.toObject();
    libro.id= _id;
    return libro;
 }
let Libro = mongoose.model('Libro',LibroSchema);
module.exports = Libro;