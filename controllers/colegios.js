//Importar paquetes requeridos de Node
const {response} = require('express')


//Importación de los modelos



const Colegios = require('../models/colegios')

//Consultar
const colegiosGet = async(req, res = response) =>{
    const {id} = req.query //Desestructuración

    //Consultar todos los usuarios
    const colegios = await Colegios.find()
    /*.find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
*/
    res.json({
        colegios
    })   
}

//Registrar 
const colegiosPost = async (req, res = response) => {

    const body = req.body 
    let mensaje = ''
    console.log(body)
    
    try {
        const colegios = new Colegios(body)
       await colegios.save()
        mensaje = "Exito en la insersion"
    } catch (error) {
        console.log(error)
        if (error.name === 'ValidationError') {
            console.error(Object.values(error.errors).map(val => val.message))
            mensaje = Object.values(error.errors).map(val => val.message)
        }
    }
    
    console.log(mensaje)
    res.json({
        msg: mensaje
    })
}


//Modificar
const colegiosPut = async(req, res = response) => {

    const {_id,direccion, latitud,longitud, descripcion} = req.body
    let mensaje = ''

    try{
        const colegios = await Colegios.findOneAndUpdate({_id: _id},{direccion:direccion, latitud:latitud, longitud:longitud, descripcion:descripcion})
        mensaje = 'La modificación se efectuó exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}


//eliminar
const colegiosDelete = async(req, res = response) => {

    const {_id} = req.body
    let mensaje = ''

    try{
        const colegios= await Colegios.deleteOne({_id: _id})
        mensaje = 'La eliminiación se efectuó exitosamente.'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
 })
}

module.exports = {
    colegiosGet,
    colegiosPost,
    colegiosPut,
    colegiosDelete
}

/*Crear una API con los métodos GET y POST para registrar y consultar
en una colección el número de ambiente, la fecha, hora, temperatura y 
nombre usuario

*Desplegar la API en render o el servidor de su preferencia
*/
