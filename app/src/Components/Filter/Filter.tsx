import React from 'react';
import "./Filter.css"
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";


type PropsType = {
    typesData: Array<{ name: string }>
    setCheckType: (name: string) => void
    delCheckType: (name: string) => void
    onShowAllPokemon: () => any
    onShowPokemon: () => any
    activeFilter: Array<{ type: string }>
    activeBtn: boolean
    isLoading: boolean

}


let Filter: React.FC<PropsType> = ({isLoading,
                                       activeBtn, typesData, setCheckType, delCheckType,
                                       onShowAllPokemon, onShowPokemon, activeFilter
                                   }) => {

    let TypesElement = typesData.map(p => <FilterCheckbox key={p.name}
                                                          name={p.name}
                                                          setCheckType={setCheckType}
                                                          delCheckType={delCheckType}/>)


    return (<div>
            <div className="types_block">
                {TypesElement}
            </div>

            <div className="types_block_find">
                {activeBtn && <button className={"btn_find_type"} disabled={isLoading} onClick={() => {
                    onShowAllPokemon()
                }}>ALL TYPES
                </button>}


                <button className="btn_find_type" disabled={activeFilter.length === 0} onClick={() => {
                    onShowPokemon()
                }}>FIND
                </button>

            </div>
        </div>
    );
}

export default Filter;