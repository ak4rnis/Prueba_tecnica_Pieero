import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {getPersonajesStarWars} from "../actions/StarWarsApi";


const PersonajesStarWars = () => {
    const [personajes, setPersonajes] = useState([]);
    
    useEffect(() => {
        
        getPersonajesStarWars().then(res => {
            setPersonajes(res.data.results);
            

        });
    }, []);
    
    
    
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Personajes</th>
                        <th scope="col">Funciones</th>
                    </tr>
                </thead>
                {personajes.map((personaje, i) => 
                    <tbody>
                        <tr>
                            <th scope="row" key={personaje.id}>{personaje.name}</th>
                            <td>
                                <button className="btn btn-success btn-sm">
                                    
                                    <Link style={{color: "white"}} key={i+1} to={`/personaje/${i+1}`}>
                                        Ver Personaje
                                    </Link>
                                </button>
                                
                                
                            </td>
                            
                        </tr>
                        
                    </tbody>
                )} 

            </table>
            
                    
            
            
        </>
    )
}

export default PersonajesStarWars;