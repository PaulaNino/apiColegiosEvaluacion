const {Router} = require('express')

const route = Router() 

//Importar métodos del controlador
const {colegiosGet, colegiosPost, colegiosPut, colegiosDelete} = require('../controllers/colegios')

route.get('/', colegiosGet)

route.post('/', colegiosPost)

route.put('/', colegiosPut)


route.delete('/', colegiosDelete)

module.exports = route