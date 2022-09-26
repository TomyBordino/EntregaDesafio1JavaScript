
console.log("Personajes")



console.log("Goku")



console.log("Vegeta")



console.log("Meliodas")



console.log("One Punch Man")



console.log("Eren")

console.log("Luffy")

console.log("Naruto")


console.log("||||||||||||||||||||||||||||||||||||||||||||||||||")


let vidaPersonaje1 = 100

let vidaPersonaje2 = 100


function random(){
    let numeroRandom = Math.floor(Math.random()*100)
    return numeroRandom
}

/*function validarPersonaje(personaje){

    seleccion = false

    while(seleccion != true){

    //personaje = prompt("Ingrese Un Personaje para el Jugador: ")

    switch(personaje.toUpperCase()){
        case "GOKU":
            console.log("Usted Selecciono a GOKU") 
            seleccion = true
            
            break

        case "MELIODAS":
            console.log("Usted Selecciono a MELIODAS")
            seleccion = true
           
            break

        case "VEGETA":
            console.log("Usted Selecciono a VEGETA")
            seleccion = true
           
            break

        case "LUFFY":
            console.log("Usted Selecciono a LUFFY")
            seleccion = true
            
            break

        case "EREN":
            console.log("Usted Selecciono a EREN")
            seleccion = true
            
            break

        case "ONE PUNCH MAN":
            console.log("Usted Selecciono a ONE PUNCH MAN")
            seleccion = true
            
            break

        case "NARUTO":
            console.log("Usted Selecciono a NARUTO")
            seleccion = true
            
            break
        default: 
            console.log("Seleccione un Personaje Valido")
            seleccion = false
            break
    }
    return seleccion
}
}*/


function seleccionarPersonaje(){
    do{
        personaje = prompt("Ingresar Personaje: ")
        switch(personaje.toUpperCase()){
            case "GOKU":
                console.log("Usted Selecciono a GOKU") 
                seleccion = true
                return personaje
                break
    
            case "MELIODAS":
                console.log("Usted Selecciono a MELIODAS")
                seleccion = true
                return personaje
                break
    
            case "VEGETA":
                console.log("Usted Selecciono a VEGETA")
                seleccion = true
                return personaje
                break
    
            case "LUFFY":
                console.log("Usted Selecciono a LUFFY")
                seleccion = true
                return personaje
                break
    
            case "EREN":
                console.log("Usted Selecciono a EREN")
                seleccion = true
                return personaje
                break
    
            case "ONE PUNCH MAN":
                console.log("Usted Selecciono a ONE PUNCH MAN")
                seleccion = true
                return personaje
                break
    
            case "NARUTO":
                console.log("Usted Selecciono a NARUTO")
                seleccion = true
                return personaje
                break
            default: 
                console.log("Seleccione un Personaje Valido")
                seleccion = false
                break
        }
    }while(seleccion != true)
}

function esquivar(){
    //Probabilidad de Esquivar
    if( random() <= 30 ){
        return true
    }else{
        return false
    }
}

function atacar(personaje){
    //Cargar Daño
    dañoAtaque = random()
    return dañoAtaque
}


function pelear(){


    //let personaje1 = prompt("Ingrese Un Personaje para el Jugador 1: ")

    let personaje1 = seleccionarPersonaje()
    let personaje2 = seleccionarPersonaje()
    

    //let personaje2 = prompt("Ingrese Un Personaje para el Jugador 2: ")

    //validarPersonaje(personaje2)



    let vidaPersonaje1 = 100
    let vidaPersonaje2 = 100

    let i = 1
    peleaActiva = true

    while(peleaActiva != false){
    
        console.log("Ronda " + i)
        i++
        quienAtaca = random()

        if(quienAtaca >= 51){
            console.log(personaje1 + " Ataca a "+ personaje2)
            if(esquivar() === true){
                console.log(personaje2 + " Esquivo el Ataque")
            }else{
                vidaPersonaje2 -= atacar() 
            }


        }else{
            console.log(personaje2 + " Ataca a "+ personaje1)
            if(esquivar() === true){
                console.log(personaje1 + " Esquivo el Ataque")
            }else{
                vidaPersonaje1 -= atacar() 
            }
        }

        if(vidaPersonaje1 <= 0){
            console.log(personaje2 + " Es el Ganador")
            peleaActiva = false;

        }else if(vidaPersonaje2 <= 0){
            console.log(personaje1 + " Es el Ganador")
            peleaActiva = false;
        }

    }
}


pelear()