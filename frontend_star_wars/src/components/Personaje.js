import React, { useEffect, useState } from "react";
import {getPersonajeStarWars, getPersonajePeliculasStarWars} from "../actions/StarWarsApi";

const PersonajeIndividual = ({ match, history }) => {
    const [personaje, setPersonaje] = useState({});
    
    const [personajePeliculas, setPersonajePeliculas] = useState({});
    const { id } = match.params;
    
    useEffect(() => {
        const mostrarPersonajePorId = () => {
            getPersonajeStarWars(id).then(res => {
                setPersonaje(res.data)
            });
        }
        const mostrarPersonajePeliculasPorId = () => {
            getPersonajePeliculasStarWars(id).then(res => {
                setPersonajePeliculas(res.data);
            })
        }
        mostrarPersonajePorId();
        mostrarPersonajePeliculasPorId();
        
        
        
    },);
    console.log(personaje);
    console.log(personajePeliculas);
    

    

    return(
        <div className="mb-3" style={{padding: "50px"}}>
            <div className="card" style={{width: "18rem;", padding: "20px"}}>
                <div className="card-header">
                    Datos del Personaje :
                </div>
                <div className="card-body">
                    
                    <h6 className="card-subtitle mb-2 text-muted">Nombre: {personaje.name}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Altura: {personaje.height} metros</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Masa: {personaje.mass}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Color de pelo: {personaje.hair_color}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Color de piel: {personaje.skin_color}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Color de ojos: {personaje.eye_color}</h6>
                    
                    
                </div>
            </div>
            <div className="card" style={{width: "18rem;", padding: "20px"}}>
                <div className="card-header">
                    Pelicula relacionadas :
                </div>
                <div className="card-body">
                    
                    <h6 className="card-subtitle mb-2 text-muted">Titulo: {personajePeliculas.title}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Numero del episodio: {personajePeliculas.episode_id}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Opening crawl: <p>{personajePeliculas.opening_crawl}</p></h6>
                    <h6 className="card-subtitle mb-2 text-muted">Director: {personajePeliculas.director}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Producida por: {personajePeliculas.producer}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Desarrollada en el: {personajePeliculas.release_date}</h6>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default PersonajeIndividual;