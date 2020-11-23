import express from 'express'
import router from './routers/index.js'
import db from './config/db.js'
const app = express();
import dotenv from 'dotenv'
dotenv.config({path:'variables.env'});

// Requerir la base de datos
db.authenticate()
.then(() => console.log('Base de datos conectada...'))
.catch( err => console.log(`error detectado: ${err}`))
//definir host
const host =  process.env.HOST || '0.0.0.0' ;
// definir puerto 
const port =  process.env.port || 4000;
//habilitar pug
app.set('view engine', 'pug');
//obtener el año actual en el local se puede usar en el template de pug
app.use(express.urlencoded({extended:true}))
app.use((req, res, next)=>{
    const year= new Date();
    res.locals.titleSity = "Agencia de Viajes"
    res.locals.yearActuality = year.getFullYear();
    next();
})
// definir la carpeta publica
app.use(express.static('public'));
//usar las rutas
app.use('/', router)

app.listen( port, host, ()=>{
    console.log(`server listening port: ${port}`);
})