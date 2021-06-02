function Carta(color, texto){
    this.color = color;
    this.texto = texto;
    this.ponerCartaEnDiv = (printPath) => {
        const div_card = document.createElement('div');
        div_card.className = `card`
        div_card.className += ` ${this.color}-card`

        div_card.innerText = this.texto;
        printPath.append(div_card)
    }
}

function elegirCartaRandom(deck){
    cartaRandom = deck[Math.floor(Math.random() * deck.length)];
    deck.splice(deck.indexOf(cartaRandom), 1)
    return cartaRandom;
}

function ponerCartaNegraEnTablero(deck, printPath){
    elegirCartaRandom(deck).ponerCartaEnDiv(printPath)
}

function repartirManoInicialCadaPersona(deck, printPath){
    for (let i = 0; i < 10; i++) {
        elegirCartaRandom(deck).ponerCartaEnDiv(printPath);
    }
}

function asignarCartasPlaceholder(printPath, cantJugadores){
    for (let i = 0; i < cantJugadores; i++) {
        const div_card = document.createElement('div');
        div_card.className = `card`
        div_card.className += ` placeholder-card`
        printPath.append(div_card)
    }
}