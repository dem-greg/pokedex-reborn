import React from "react";
import {connect} from "react-redux";
import PokemonList from "./PokemonList";
import {
    actions,
    getPokemonData,
    requestPokemon,
} from "../../Redux/pokedexReducer";
import {AppStateType} from "../../Redux/store";
import {pokemonListType, pokemonType} from "../../Types/Type";



type MapStateToPropsType = {
    pokemonInfo: Array<pokemonType>
    searchHistory: Array<pokemonType>
    pokemonList: Array<pokemonListType>
    isShowPaginator: boolean
    isLoading: boolean
}

type MapDispatchToPropsType = {
    requestPokemon: (count: number, cardQuantity: number | any) => any
    getPokemonData: (name: string) => void
    deleteFindPokemon: () => void
    errorSearch: (error: boolean) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType


class PokemonListContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.requestPokemon(0, 20).then(() => {
            this.props.pokemonList.forEach(element => this.props.getPokemonData(element.name))
        })

    }

    onDeleteFindPokemon = () => {
        this.props.deleteFindPokemon()
        this.props.errorSearch(false)
    }


    render() {

        return (
             <PokemonList {...this.props} onDeleteFindPokemon={this.onDeleteFindPokemon}/>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        pokemonInfo: state.pokedex.pokemon,
        pokemonList: state.pokedex.pokemonListData,
        searchHistory: state.pokedex.searchHistory,
        isShowPaginator: state.pokedex.isShowPaginator,
        isLoading: state.pokedex.isLoading
    }

}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    requestPokemon,
    getPokemonData,
    deleteFindPokemon: actions.deleteFindPokemon,
    errorSearch: actions.errorSearch,
})(PokemonListContainer);

