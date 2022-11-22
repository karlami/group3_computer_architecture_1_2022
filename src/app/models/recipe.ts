export interface recipe {
    id: number,
    State: number
}

export var recipeState: recipe[] = [
    { id: 0, State: 1 }, // esta en el punto A = 1 o punto B = 0
    { id: 1, State: 0 } // esta cargado = 1 o no tiene cacrga = 0
];