import { Testimoniales } from '../models/Testimoniales.js'
const controllerTestimoniales = async (req, res) => {
    const {nombre, correo, mensaje} = req.body;
    const  testimoniales = await Testimoniales.findAll()
    const errores=[];
    if(nombre.trim() === ""){
        errores.push({mensaje:'El nombre esta vacio'})
    }
    if(correo.trim() === ""){
        errores.push({mensaje:'El correo esta vacio'})
    }
    if(mensaje.trim() === ""){
        errores.push({mensaje:'El mensaje esta vacio'})
    }
    if(errores.length > 0){
        res.render('testimoniales',{
            pagina:'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        try{
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales')
        }catch{
            console.log('error al pasar testimonios')
        }
    }
   
}

export {
    controllerTestimoniales
}