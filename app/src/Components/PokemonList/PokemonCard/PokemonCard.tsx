import React, {useState} from 'react';
import  "./PokemonCard.css"
import "../../../assets/images/search.svg"


type PropsType = {
    type: string

    hp: number
    attack: number
    defense:number
    specialAttack:number
    specialDefense:number
    speed: number
    id:number
    name:string
    weight:number
    height:number
    photo:string

}


    let PokemonCard: React.FC<PropsType> = (props)=> {
    let[side, setSide] = useState(true);



    return ( <div className={`card card_${props.type}`}>
            {!side && <div onClick={()=>{
            setSide(!side)
            }
            } className={`backside sideTrue`}>
                <div>
                <label>HP:{props.hp}</label>
                <progress max="100" value={props.hp}/>
                </div>
                <div>
                <label>Attack:{props.attack}</label>
                <progress max="100" value={props.attack}/>
                </div>
                <div>
                <label>Defense:{props.defense}</label>
                <progress max="100" value={props.defense}/>
                </div>
                <div>
                <label>Special Attack:{props.specialAttack}</label>
                <progress max="100" value={props.specialAttack}/>
                </div>
                <div>
                <label>Special Defense:{props.specialDefense}</label>
                <progress max="100" value={props.specialDefense}/>
                </div>
                <div>
                <label>Speed:{props.speed}</label>
                <progress max="100" value={props.speed}/>
                </div>

            </div>
            }
        {side &&  <div onClick={()=>{
            setSide(!side)
        }
        } className="front_side">
            <div>
                <div className="pokemon_id">index: {props.id}</div>
                <img className="photo" src={props.photo} alt={props.name}/>
            </div>
        <div className="main">
            <div className="name">{props.name}</div>
            <div className="hp">HEALTH: {props.hp}</div>
        </div>
            <div className="stats">
                <div className="stats_item"> {props.weight} kg<span className={`tag tag_${props.type}`}>Weight</span></div>
                <div className="stats_item center_item"> {props.type} <span className={`tag tag_${props.type}`}>Type</span></div>
                <div className="stats_item">{props.height} m<span className={`tag tag_${props.type}`}>Height</span></div>
            </div>
            </div>
        }
    </div>
    );
}

export default PokemonCard;