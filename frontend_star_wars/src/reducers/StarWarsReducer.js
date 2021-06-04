export const personajesStarWars = (state = false, action) => {
    switch (action.type){
        case "PERSONAJES_STAR_WARS":
            return action.payload;
        case "PERSOANJES_STAR_WARS_POR_ID":
            return action.payload;
        case "PERSONAJES_STAR_WARS_PELICULAS_POR_ID":
            return action.payload;
        default:
            return state;
    }
};