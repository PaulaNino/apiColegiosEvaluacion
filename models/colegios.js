const {Schema, model} = require('mongoose')

const ColegiosSchema = Schema({
    direccion: {
        type: String,
        required: [true, 'la direccion es obligatoria'],
        unique: [true, 'El campo dirección no puede ser repetido']
    },


    
    latitud: {
        type: String,
        required: [ 'la latitud es obligatoria'],
        min: [6.14, 'La latitud debe estar entre 6.200 a 6.14'], //Minima y maxima cantidad de caracteres
        max: [6.200, 'La latitud debe estar entre 6.200 a 6.14']
    
    },
    longitud: {
        type: String,
        required: [true, 'la longitud es obligatorio'],
        min: [-75.50, 'La longitud debe estar entre -75.43 a -75.50'], //Minima y maxima cantidad de caracteres
        max: [-75.43, 'La longitud debe estar entre -75.43 a -75.50']
    
    },

    descripcion: {
        type: String,
        required: [true, 'la descripcion es obligatoria']
    },
    fechareporte: {
        type: Date, default: Date.now 
    }

})

module.exports = model('Colegios',ColegiosSchema)