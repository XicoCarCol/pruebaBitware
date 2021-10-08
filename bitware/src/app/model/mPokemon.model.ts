export interface pokemon {
    name: string;
    url: string;
}


export interface detallePokemon {
    name: string;
    id: number;
    sprites: back_default;
    types: types[];
    stats: stats[];
}

export interface back_default {
    back_default: string;
}

export interface types {
    type: type;
}

export interface type {
    name: [];
}


export interface stats {
    base_stat: number

}
