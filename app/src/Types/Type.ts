
export type pokemonListType = {
    pokemon: {name: string}
    name:string
}



export type statsType={
    base_stat: number
}

export type typesType={
    type: {name: string}
}

export type spritesType={
    front_default:string
    other: spritesOtherType
}

export type spritesOtherType={
    dream_world:{front_default:string}
}


export type pokemonType = {
    name: string
    id: number
    height: number
    weight: number
    sprites: spritesType
    stats: Array<statsType>
    types: Array<typesType>
}