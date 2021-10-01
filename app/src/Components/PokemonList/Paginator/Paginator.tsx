import React from 'react';
import './Paginator.css';

type PropsType = {
     cardQuantity: number,
     viewCards10: number,
     viewCards20: number,
     viewCards50: number,
     viewCards100: number,
    onCardQuantity: (count:number)=> void,
    onMorePokemon: (count:number)=> void
}

let Paginator: React.FC<PropsType> = ({cardQuantity,viewCards10,viewCards20,viewCards50,viewCards100,
                                          onCardQuantity,onMorePokemon}) => {
    return (
        <div className={"paginator"}>
            <span
                 className={(cardQuantity === viewCards10 && "active_value paginator_value") || "paginator_value"}
                onClick={() => {
                    onCardQuantity(viewCards10)
                }}>{viewCards10}</span>
            <span
                className={(cardQuantity === viewCards20 && "active_value paginator_value") || "paginator_value"}
                onClick={() => {
                    onCardQuantity(viewCards20)
                }}>{viewCards20}</span>
            <div className={"btn_more"}>
                <button onClick={() => {
                    onMorePokemon(cardQuantity)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    More
                </button>
            </div>
            <span
                className={(cardQuantity === viewCards50 && "active_value paginator_value") || "paginator_value"}
                onClick={() => {
                    onCardQuantity(viewCards50)
                }}>{viewCards50}</span>
            <span
                 className={(cardQuantity === viewCards100 && "active_value paginator_value") || "paginator_value"}
                onClick={() => {
                    onCardQuantity(viewCards100)
                }}>{viewCards100}</span>
        </div>
    );
}

export default Paginator;