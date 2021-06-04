import axios from "axios";

export const getPersonajesStarWars = async () => await axios.get('https://swapi.dev/api/people', {

});

export const getPersonajeStarWars = async (id) => await axios.get(`https://swapi.dev/api/people/${id}`, {

});

export const getPersonajePeliculasStarWars = async (id) => await axios.get(`https://swapi.dev/api/films/${id}`, {

});

