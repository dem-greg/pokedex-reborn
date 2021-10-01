import {ThunkAction} from "redux-thunk";
import {pokemonAPI} from "../API/api";
import {pokemonListType, pokemonType} from "../Types/Type";
import {AppStateType, InferActionsType} from "./store";


export type initialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

let initialState = {
    pokemonListData: [] as Array<pokemonListType>,
    pokemon: [] as Array<pokemonType>,
    searchHistory: [] as Array<pokemonType>,
    typesData: [] as Array<{ name: string }>,
    activeFilter: [] as Array<{ type: string }>,
    errorBySearch: false as boolean,
    isShowPaginator: true as boolean,
    isLoading: false as boolean,

}

const pokedexReducer = (state = initialState, action: ActionsType): initialStateType => {


    switch (action.type) {



        case "SET_POKEMON": {
            return {
                ...state,
                pokemonListData: action.payload
            }
        }

        case "SET_POKEMON_TYPE_DATA": {
            return {
                ...state,
                typesData: action.payload

            }
        }

        case "TOGGLE_LOADING": {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case "TOGGLE_SHOW_PAGINATOR": {
            return {
                ...state,
                isShowPaginator: action.payload
            }
        }


        case "RESET_POKEMON_INFO": {
            return {
                ...state,
                pokemon: [],


            }
        }
        case "SET_POKEMON_INFO": {
            if (!state.pokemon.map(x => x.id).includes(action.payload.id))
                return {
                    ...state, pokemon: [...state.pokemon, action.payload],

                }
            else return state;
        }
        case "SET_FIND_POKEMON": {
            if (!state.searchHistory.map(x => x.id).includes(action.payload.id))
                return {
                    ...state, searchHistory: [...state.searchHistory, action.payload],
                }
            else return state;
        }
        case "DELETE_FIND_POKEMON": {
            return {
                ...state, searchHistory: [],
            }
        }

        case "ERROR_SEARCH": {
            return {
                ...state, errorBySearch: action.payload
            }
        }
        case "SET_ACTIVE_FILTER": {
            return {
                ...state, activeFilter: [...state.activeFilter, {type: action.payload}]
            }
        }
        case "DEL_ACTIVE_FILTER": {
            return {
                ...state, activeFilter: state.activeFilter.filter(item => item.type !== action.payload)

            }
        }

        default:
            return state;
    }
}





export const actions = {
    setPokemon: (pokemon: Array<pokemonListType>) => ({type: "SET_POKEMON", payload: pokemon} as const),
    toggleShowPaginator: (toggle: boolean) => ({type: "TOGGLE_SHOW_PAGINATOR", payload: toggle} as const),
    toggleLoading: (toggle: boolean) => ({type: "TOGGLE_LOADING", payload: toggle} as const),
    setActiveFilter: (activeFilter: string) => ({type: "SET_ACTIVE_FILTER", payload: activeFilter} as const),
    delActiveFilter: (delFilter: string) => ({type: "DEL_ACTIVE_FILTER", payload: delFilter} as const),
    errorSearch: (error: boolean) => ({type: "ERROR_SEARCH", payload: error} as const),
    setPokemonTypeData: (types: Array<{ name: string }>) => ({type: "SET_POKEMON_TYPE_DATA", payload: types} as const),
    setPokemonInfo: (info: pokemonType) => ({type: "SET_POKEMON_INFO", payload: info} as const),
    resetPokemonInfo: () => ({type: "RESET_POKEMON_INFO"} as const),
    setFindPokemon: (info: pokemonType) => ({type: "SET_FIND_POKEMON", payload: info} as const),
    deleteFindPokemon: () => ({type: "DELETE_FIND_POKEMON"} as const),
}





export const requestPokemon = (count: number, cardQuantity: number | any): ThunkType => {

    return async (dispatch) => {

        let response = await pokemonAPI.getPokemonList(count, cardQuantity)
        dispatch(actions.setPokemon(response.data.results));
        dispatch(actions.toggleShowPaginator(true))

    }
}
export const getPokemonData = (name: string): ThunkType => {

    return async (dispatch) => {
        let response = await pokemonAPI.getPokemonData(name)
        dispatch(actions.setPokemonInfo(response.data));
    }
}

export const findPokemon = (name: string): ThunkType => {

    return async (dispatch) => {
        try {
            let response = await pokemonAPI.getPokemonData(name)

            dispatch(actions.setFindPokemon(response.data))
            dispatch(actions.errorSearch(false))
        } catch (e) {
            dispatch(actions.errorSearch(true))
        }
    }
}
export const getTypes = (): ThunkType => {
    return async (dispatch) => {
        let response = await pokemonAPI.getTypes()
        dispatch(actions.setPokemonTypeData(response.data.results));

    }
}
export const  getPokemonWithTypes = (type: string): ThunkType => {
    return async (dispatch) => {
        let response = await pokemonAPI.pokemonType(type)
        dispatch(actions.setPokemon(response.data.pokemon))
        dispatch(actions.toggleShowPaginator(false))
        if (response.data.pokemon.length === 0) {
            alert("no pokemon with type " + response.data.name)
        }
    }


}
export default pokedexReducer;

