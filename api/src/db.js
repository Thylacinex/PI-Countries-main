require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
<<<<<<< HEAD
const basename = path.basename(__filename);


// Creamos una conexion a la DB
=======

>>>>>>> 4893d8516300c4330b2b412c0e25812e4587a867
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
<<<<<<< HEAD

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
const modelDefiners = [];

=======
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
>>>>>>> 4893d8516300c4330b2b412c0e25812e4587a867
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

<<<<<<< HEAD

=======
>>>>>>> 4893d8516300c4330b2b412c0e25812e4587a867
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
<<<<<<< HEAD
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]); // hacerlo con regex dsps xq es un bardo esto
=======
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
>>>>>>> 4893d8516300c4330b2b412c0e25812e4587a867
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
<<<<<<< HEAD
// const { Countries, Activities } = sequelize.models;
=======
const { Pokemon } = sequelize.models;
>>>>>>> 4893d8516300c4330b2b412c0e25812e4587a867

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
<<<<<<< HEAD
  db: sequelize,     // para importart la conexión { conn } = require('./db.js');
=======
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
>>>>>>> 4893d8516300c4330b2b412c0e25812e4587a867
};
