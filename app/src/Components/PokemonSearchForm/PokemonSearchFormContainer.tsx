import React from "react";
import {connect} from "react-redux";
import PokemonSearchForm from "./PokemonSearchForm";
import {findPokemon} from "../../Redux/pokedexReducer";
import { AppStateType } from "../../Redux/store";
type MapStateToPropsType = {
    errorBySearch: boolean
}
type MapDispatchToPropsType = {
    findPokemon: (name: string)=> void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class PokemonSearchFormContainer extends React.Component<PropsType> {


    onSearchPokemon = (name:string) => {
        if(name !== "")
        this.props.findPokemon(name)
    }

    render() {
        return <PokemonSearchForm {...this.props} onSearchPokemon={this.onSearchPokemon}/>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        errorBySearch: state.pokedex.errorBySearch,
    }
}




export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {findPokemon
})(PokemonSearchFormContainer);
