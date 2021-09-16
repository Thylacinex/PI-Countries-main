const axios = require('axios');
const API_URL = 'https://restcountries.eu/rest/v2/all';
// Models
const { Country } = require('../db');

// Hace un fetch de los 250 paises y devuelve ese array.
const fetchData = async (url) => {
    const response = await axios.get(url).then(res => res.data);

    return response;
}

//Formatea cada pais del array con los datos relevantes y lo devuelve.
const formatData = async (url) => {
    const data = await fetchData(url);
    // recive un arr de objetos pais
    return data.map(pais => {
      //.sort((a, b) => a.name.localeCompare(b.name))
        
        return {
            nombre: pais.name.replace(/\b([a-z])/g, ltr => ltr.toUpperCase()) || 'No Data', // UpperCase all words
            capital: pais.capital || 'No Data',
            codigo: pais.alpha3Code || 'No Data',
            bandera: pais.flag || 'No Data',
            continente: pais.region || 'No Data',
            subregion: pais.subregion || 'No Data',
            area: pais.area || 0,
            poblacion: pais.population || 0,
            limitrofes: pais.borders || []
        }

    });

}

const populateDatabase = async (url) => {
  const entries = await formatData(url);

    try { // agregar async await en el foreach iof needed
      await entries.forEach(country => {
              const { nombre, codigo, bandera, continente, subregion, capital, area, poblacion, limitrofes } = country;
              const newCountry = Country.create({ nombre, codigo, bandera, continente, subregion, capital, area, poblacion, limitrofes });
      })
      console.log({message: 'Database populated'})

    } catch (err) {
      console.log({error: err.message})
    }
}

module.exports = { fetchData, formatData, populateDatabase }
