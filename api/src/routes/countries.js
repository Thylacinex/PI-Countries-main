const e = require('express');
const { Router } = require('express');
const { Country, db } = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async (req, res) => {
    let { name } = req.query;

    try {
        if (name) {
            name = name.replace(/\b([a-z])/g, ltr => ltr.toUpperCase());

            const queryResult = await Country.findOne({
                where: {
                    nombre: name
                },
                attributes: {
                    exclude: ['id']
                }
            })

            res.json(queryResult  || {message: `No such country named: ${name}`}) 
        }

        const queryResult = await Country.findAll({
            attributes: {
                exclude: ['id']
            }
        })

        res.json(queryResult.sort((a, b) => a.nombre.localeCompare(b.nombre))) // ordena alfabeticamente antes de enviar, REVISAR EL XQ!!

    } catch (err) {
        console.log(err)
    }

// ver paginacion
})

router.get('/:idPais', async (req, res) => {
    const { idPais } = req.params;

    try {
        const queryResult = await Country.findOne({
            where: {
                codigo: idPais.toUpperCase()
            },
            attributes: {
                exclude: ['id']
            }
        })

        res.json(queryResult || {message: `No such country code (${idPais})`})
        
    } catch (err) {
        console.log(err)
    }
    
})

module.exports = router;
