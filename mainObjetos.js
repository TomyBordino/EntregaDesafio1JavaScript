
function Personaje(nombre,poder,vida,habilidadEsquivar){
    this.nombre = nombre;
    this.poder = poder;
    this.vida = vida;
    this.habilidadEsquivar = habilidadEsquivar;
}

function random(){
    let numeroRandom = Math.floor(Math.random()*100)
    return numeroRandom
}

function esquivar(Personaje){
    //Probabilidad de Esquivar
    if( random() <= Personaje.habilidadEsquivar ){
        return true
    }else{
        return false
    }
}

function atacar(){
    //Cargar Daño
    dañoAtaque = random()*5
    return dañoAtaque
}

console.log("Seleccion Tu Personaje")

let personaje1 = new Personaje("LUFFY" , "Shotgun Gattlin" , 1500 , 30)
console.log(personaje1.nombre)

let personaje2 = new Personaje("GOKU" , "Kamehameha" , 1700 , 40)
console.log(personaje2.nombre)

let personaje3 = new Personaje("VEGETA" , "Ataque de Vegeta" , 1700 , 38)
console.log(personaje3.nombre)

let personaje4 = new Personaje("NARUTO" , "Razengan" , 1200 , 28)
console.log(personaje4.nombre)

let personaje5 = new Personaje("MELIODAS" , "Devolver Ataque" , 1160 , 32)
console.log(personaje5.nombre)

let personaje6 = new Personaje("ONE PUNCH MAN" , "Golpe Simple" , 1000 , 50)
console.log(personaje6.nombre)

let personaje7 = new Personaje("EREN" , "Golpe De Titan" , 2500 , 0)
console.log(personaje7.nombre)





function seleccionarPersonaje(){
    do{
        personaje = prompt("Ingresar Personaje: ")
        switch(personaje.toUpperCase()){
            case personaje1.nombre:
                console.log("Usted Selecciono a Luffy") 
                seleccion = true
                return personaje1
                break
    
            case personaje2.nombre:
                console.log("Usted Selecciono a Goku")
                seleccion = true
                return personaje2
                break
    
            case personaje3.nombre:
                console.log("Usted Selecciono a Vegeta")
                seleccion = true
                return personaje3
                break
    
            case personaje4.nombre:
                console.log("Usted Selecciono a Naruto")
                seleccion = true
                return personaje4
                break
    
            case personaje5.nombre:
                console.log("Usted Selecciono a Meliodas")
                seleccion = true
                return personaje5
                break
    
            case personaje6.nombre:
                console.log("Usted Selecciono a One Punch Man")
                seleccion = true
                return personaje6
                break
    
            case personaje7.nombre:
                console.log("Usted Selecciono a Eren")
                seleccion = true
                return personaje7
                break
            default: 
                console.log("Seleccione un Personaje Valido")
                seleccion = false
                break
        }
    }while(seleccion != true)
}






function pelear(){

   // let vidaPersonaje1 = 100
   // let vidaPersonaje2 = 100

    let i = 1
    peleaActiva = true

    while(peleaActiva != false){
    
        console.log("------------")
        console.log("Ronda " + i)
        
        i++
        quienAtaca = random()

        if(quienAtaca >= 51){
            console.log(seleccion1.nombre + " Ataca a "+ seleccion2.nombre + " Con " + seleccion1.poder)
            if(esquivar(seleccion2) === true){
                console.log(seleccion2.nombre + " Esquiva el Ataque")
            }else{
                seleccion2.vida -= atacar() 
            }


        }else{
            console.log(seleccion2.nombre + " Ataca a "+ seleccion1.nombre + " Con " + seleccion2.poder)
            if(esquivar(seleccion1) === true){
                console.log(seleccion1.nombre + " Esquiva el Ataque")
            }else{
                seleccion1.vida -= atacar() 
            }
        }

        if(seleccion1.vida <= 0){
            console.log("------------")
            console.log(seleccion2.nombre + " Es el Ganador")
            peleaActiva = false;

        }else if(seleccion2.vida <= 0){
            console.log("------------")
            console.log(seleccion1.nombre + " Es el Ganador")
            peleaActiva = false;
        }

    }
}

let seleccion1 = seleccionarPersonaje()
let seleccion2 = seleccionarPersonaje()

pelear()