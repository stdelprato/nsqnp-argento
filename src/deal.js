const cards_path_json = '../data/cah.json' 

fetch(cards_path_json)
    .then(response => response.json())
    .then(data => {
        const containerIdWhites = document.getElementById('white-cards-container');
        const containerWhiteTabletop = document.querySelector('.white-placeholder');
        const containerIdBlack = document.getElementById('black-card');
        let white_deck_original = data['white'];
        let white_deck_copy = white_deck_original.map(carta => {
            return new Carta('white', carta)
        })
        //////////////////////////////////////////////////
        let black_deck_original = data['black'];
        let black_deck_copy = black_deck_original.map(carta => {
            return new Carta('black', carta[0])
        })
        //////////////////////////////////////////////////
        
        let cantidadJugadores = 6;
        let allPlaceholders;


        console.log(asignarMazosAJugadores(cantidadJugadores, white_deck_copy));

        
        repartirManoInicialCadaPersona(white_deck_copy, containerIdWhites);
        ponerCartaNegraEnTablero(black_deck_copy, containerIdBlack);
        asignarCartasPlaceholder(containerWhiteTabletop, cantidadJugadores);

        allPlaceholders = document.querySelectorAll('.placeholder-card');

        allPlaceholders.forEach(placeholder => {placeholder.innerText = ''})
        
        let flag = true;
        document.querySelectorAll('.white-card').forEach(item => {
            item.addEventListener('click', evento => {
                while(flag){
                    for (let i = 0; i < allPlaceholders.length; i++) {
                        // console.log(allPlaceholders[i].innerText)
                        if(allPlaceholders[i].innerText == ''){
                            allPlaceholders[i].innerText = item.innerText;
                            allPlaceholders[i].className += ' active-card';
                            allPlaceholders[i].style.backgroundColor = 'white';
                            item.remove();
                            flag = false;
                            break;
                        }
                    }
                }
            })
        })
        allPlaceholders.forEach(item => {
            item.addEventListener('click', evento => {
                if(item.classList.contains('active-card')){
                    carta_xd = new Carta('white', item.innerText);
                    console.log(item.innerText)
                    item.className += 'card placeholder-card';
                    item.innerText = '';
                    carta_xd.ponerCartaEnDiv(containerIdWhites);
                    item.style.backgroundColor = 'rgb(248, 248, 248)';
                    flag = true;
                }
            })
        })
    })