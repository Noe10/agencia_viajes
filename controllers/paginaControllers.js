import { Viajes } from '../models/Viajes.js' 
import { Testimoniales } from '../models/Testimoniales.js' 
const paginaInicio = async (req, res) => {
    const promiseDB = [];
        promiseDB.push(Viajes.findAll({limit:3}))
        promiseDB.push(Testimoniales.findAll({limit:3}));
        
    try{
        
        const resultado = await Promise.all(promiseDB);
        res.render('inicio',{
            clase:'home',
            viajes: resultado[0], 
            testimoniales: resultado[1]
        })
    }catch{
        console.log('Error al traer los viajes');
    }
    
}
const paginaNosotros = (req, res) => {
    res.render('nosotros',{
        pagina:'Nosotros'
    })
}
const paginaTestimoniales = async (req, res) => {
    try{
        const  testimoniales = await Testimoniales.findAll()
        res.render('testimoniales',{
            pagina:'Testimoniales',
            testimoniales
        })
    }catch{
        console.log('error al listar testimonios');
    }
    
}
const paginaViajes = async (req, res) => {
    const viajes = await Viajes.findAll();
    res.render('viajes',{
        pagina:'Próximos Viajes',
        viajes
    })
}
// escoge una solo viaje
const paginaViaje = async (req, res) => {
     const { slug } = req.params;
    try{
        const viaje = await Viajes.findOne({where:{slug}});
        res.render('viaje',{
        viaje
    })
    }catch{
        console.log('Error en paginaViaje');
    }
    
}
export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaViaje
}