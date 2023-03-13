const bodyParser = require('body-parser')
const funcionarios = require('./funcionariosroutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(funcionarios)
}