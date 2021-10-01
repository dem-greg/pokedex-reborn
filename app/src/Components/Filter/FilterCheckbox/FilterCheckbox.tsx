import React, {useState} from 'react';
import "./FilterCheckbox.css"


type PropsType = {
    setCheckType: (name: string)=> void
    delCheckType: (name: string)=> void
    name: string
}




let FilterCheckbox: React.FC<PropsType> = ({setCheckType, delCheckType, name })=> {

    let [activeType, setActiveType] = useState<boolean>(false);


    return (


        <div className="checkboxContainer">
            <input type="checkbox" id={"cb-"+name} className="checkboxType" checked={activeType} onChange={() => {
                setActiveType(!activeType)
                if (!activeType) {
                    setCheckType(name)
                }else delCheckType(name)

            }
            }/>
            <label  htmlFor={"cb-"+name}>{name}</label>

        </div>

    );
}

export default FilterCheckbox;