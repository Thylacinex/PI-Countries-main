const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.post('/', async (req, res) => {
    const { id, nombre, dificultad, duracion, temporada } = req.body;

    // Dificultad (Entre 1 y 5)
    // Temporada (Verano, Otoño, Invierno o Primavera)
    // -Recibe los datos recolectados desde el formulario controlado
    //  de la ruta de creación de actividad turística por body
    // -Crea una actividad turística en la base de datos
    res.json({message: `Funciona!`}) 
    
})


module.exports = router;
