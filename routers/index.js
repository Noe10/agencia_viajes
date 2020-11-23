import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales,
    paginaViaje
} from '../controllers/paginaControllers.js';
import {
    controllerTestimoniales
} from '../controllers/controllerTestimoniales.js';
const router = express.Router();

router.get('/', paginaInicio)

router.get('/nosotros',paginaNosotros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaViaje)

router.get('/testimoniales',paginaTestimoniales)
router.post('/testimoniales',controllerTestimoniales)

router.get('/contacto', (req, res) => {
    res.send('contacto')
})

export default router;