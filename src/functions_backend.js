function Jugador(id, nombre, isCzar = false){
    this.id = id;
    this.nombre = nombre;
    this.isCzar = isCzar;
    this.ponerCartaEnDiv = (printPath) => {
        const div_card = document.createElement('div');
        div_card.className = `card`
        div_card.className += ` ${this.color}-card`

        div_card.innerText = this.texto;
        printPath.append(div_card)
    }
}

let repartirManoInicialACadaJugador = (deck) => {
    let jugadorCartas = [];
    for (let i = 0; i < 10; i++) {
        jugadorCartas.push(elegirCartaRandom(deck));
    }
    
    return jugadorCartas;
}

let asignarMazosAJugadores = (cantidadJugadores, deck) => {
    let jugadoresYMazos = {};
    for (let i = 1; i <= cantidadJugadores; i++) {
        jugadoresYMazos[`jugador${i}`] = {'cartas' : repartirManoInicialACadaJugador(deck)}
    }
    // jugadoresYMazos[`jugador${i}`] = repartirManoInicialACadaJugador(deck);
    return jugadoresYMazos;
}