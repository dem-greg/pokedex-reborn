import React from "react";
import {connect} from "react-redux";
import {
     getPokemonData, requestPokemon,
} from "../../../Redux/pokedexReducer";
import { AppStateType } from "../../../Redux/store";
import {pokemonListType, pokemonType } from "../../../Types/Type";
import Paginator from "./Paginator";


type MapStateToPropsType = {
    pokemonInfo: Array<pokemonType>
    pokemonList: Array<pokemonListType>

}

type MapDispatchToPropsType = {
    requestPokemon:  (count: number, cardQuantity: number) => any
    getPokemonData: (name: string)=> void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

type StateType = {
    cardQuantity: number,
    viewCards10: number,
    viewCards20: number,
    viewCards50: number,
    viewCards100: number,
}

class PaginatorContainer extends React.Component<PropsType, StateType> {

    constructor(props: any) {
        super(props);
        this.state = {
            viewCards10: 10,
            viewCards20: 20,
            viewCards50: 50,
            viewCards100:100,
            cardQuantity: 20 };
    }



    onCardQuantity = (number: number) => {
        this.setState({
            cardQuantity: number
        });
    }

    onMorePokemon = (cardQuantity:number) => {
        let count = this.props.pokemonInfo.length
        this.props.requestPokemon(count, cardQuantity).then(() => {
            this.props.pokemonList.forEach(element => this.props.getPokemonData(element.name))
        })
    }




    render() {
        return <Paginator {...this.props}  viewCards20={this.state.viewCards20}  viewCards50={this.state.viewCards50}
                          viewCards100={this.state.viewCards100}
                          cardQuantity={this.state.cardQuantity} viewCards10={this.state.viewCards10}  onMorePokemon={this.onMorePokemon} onCardQuantity={this.onCardQuantity}/>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        pokemonList: state.pokedex.pokemonListData,
        pokemonInfo: state.pokedex.pokemon,


    }


}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    requestPokemon,
    getPokemonData,


})(PaginatorContainer);



