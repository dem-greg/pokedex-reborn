import  axios from "axios";



const instance = axios.create({
    baseURL:'https://pokeapi.co/api/v2/'

})

export const pokemonAPI = {
    getPokemonList(count: number, cardQuantity: number) {
        return instance.get(`pokemon?limit=${cardQuantity}&offset=${count}`)
            .then(response => {
                return response
            });
    },
    getPokemonData(name: string) {
        return instance.get(`pokemon/${name}`)
            .then(response => {
                return response
            })
    },
    getTypes() {
        return instance.get(`type`)
            .then(response => {
                return response
            });
    },
    pokemonType(type: string) {
        return instance.get(`type/${type}`)
            .then(response => {
                return response
            });
    },

}
