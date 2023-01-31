const app = require ('./app');
require ('dotenv').config();
const swaggerDocs = require ('../swagger')

const PORT = process.env.PORT || 8000;

app.listen (PORT, ()=> {
    console.log (`Servidor escuchado en puert ${PORT}`)
    swaggerDocs(app, PORT)
});