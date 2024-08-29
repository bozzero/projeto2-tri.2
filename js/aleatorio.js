const nomes = ["Pamela Voorhees", " Jason Voorhees", "Richie Amber", "Wes Mindy", "Belzebu", "Pazúzu"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
