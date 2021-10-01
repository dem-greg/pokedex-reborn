import React from 'react';
import PokemonCard from "./PokemonCard/PokemonCard";
import "./PokemonList.css"
import PaginatorContainer from "./Paginator/PaginatorContainer";
import { pokemonType } from '../../Types/Type';



type PropsType = {
    pokemonInfo: Array<pokemonType>
    searchHistory: Array<pokemonType>
    isShowPaginator: boolean
    onDeleteFindPokemon: ()=> void

}

let PokemonList: React.FC<PropsType> = ({pokemonInfo,isShowPaginator, searchHistory,  onDeleteFindPokemon})=> {

    pokemonInfo.sort(function (a, b) {
        return a.id - b.id
    })

    let onMapping = (mapName: Array<pokemonType>) => {
        return mapName.map(p => <PokemonCard key={p.id} id={p.id} hp={p.stats[0].base_stat}
                                             height={p.height} weight={p.weight}
                                             type={p.types[0].type.name}
                                             name={p.name}
                                             photo={p.sprites.other.dream_world.front_default == null ? p.sprites.front_default : p.sprites.other.dream_world.front_default}
                                             attack={p.stats[1].base_stat} defense={p.stats[2].base_stat}
                                             specialAttack={p.stats[3].base_stat}
                                             specialDefense={p.stats[4].base_stat}
                                             speed={p.stats[5].base_stat}/>)
 }
    return (<div>
            {searchHistory.length > 0  &&  <div className="found_border">
                <h1>Found Pokemon:</h1>
                <div className="container">
                    {onMapping(searchHistory)}
                </div>
                <button className={"btn_close_searchHistory"} onClick={() => {
                    onDeleteFindPokemon()
                }}> close
                </button>
            </div>}
            <div className="container">
                {onMapping(pokemonInfo)}
            </div>
            {isShowPaginator && <PaginatorContainer/>}
        </div>
    );
}




export default PokemonList;