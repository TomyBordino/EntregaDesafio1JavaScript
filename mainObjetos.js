
function Personaje(nombre,poder,vida,habilidadEsquivar,img){
    this.nombre = nombre;
    this.poder = poder;
    this.vida = vida;
    this.habilidadEsquivar = habilidadEsquivar;
    this.img = img
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

let luffy = new Personaje("LUFFY" , "Shotgun Gattlin" , 1500 , 30 , "./imagenes/gokuLgbt.jpg")
console.log(luffy.nombre)

let goku = new Personaje("GOKU" , "Kamehameha" , 1700 , 40,)
console.log(goku.nombre)

let vegeta = new Personaje("VEGETA" , "Big Bang" , 1700 , 38)
console.log(vegeta.nombre)

let naruto = new Personaje("NARUTO" , "Rasengan" , 1000 , 20)
console.log(naruto.nombre)

let meliodas = new Personaje("MELIODAS" , "Contra-Ataque Total" , 1260 , 32)
console.log(meliodas.nombre)

let saitama = new Personaje("SAITAMA" , "Golpe Simple" , 1000 , 50)
console.log(saitama.nombre)

let levi = new Personaje("LEVI" , "Ataque Tridimensional" , 800 , 12)
console.log(levi.nombre)


let listaPersonajes = [luffy, goku, vegeta, naruto, meliodas, saitama, levi]


function seleccionarPersonaje(){


    let seleccion = false
    while(seleccion != true){

        personaje = prompt("Ingresar Personaje: Luffy - Goku - Vegeta - Naruto - Meliodas - Saitama - Levi")

        personaje = personaje.toUpperCase()

        for(let i = 0; i<listaPersonajes.length; i+=1){
            if(listaPersonajes[i].nombre ===  personaje){
                console.log("Usted Selecciono a " + listaPersonajes[i].nombre)
                console.log(listaPersonajes[i].nombre + " Posee " + listaPersonajes[i].vida + " Puntos de vida")
                console.log("------------------------------------------")
                seleccion = true
                return listaPersonajes[i]
            }

           
    }
    console.log("Seleccione un Personaje Valido")
    }


    //DEJO ESTE CODIGO COMENTADO POR EL MOMENTO PARA QUE SE VEA QUE UTILIZANDO ARRAYS PUDE REDUCIR GRAN CANTIDAD DE LINEA DE CODIGO

    /*do{
        personaje = prompt("Ingresar Personaje: Luffy - Goku - Vegeta - Naruto - Meliodas - Saitama - Levi")
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
                console.log("Usted Selecciono a Saitama")
                seleccion = true
                return personaje6
                break
    
            case personaje7.nombre:
                console.log("Usted Selecciono a Levi")
                seleccion = true
                return personaje7
                break
            default: 
                console.log("Seleccione un Personaje Valido")
                seleccion = false
                break
        }
    }while(seleccion != true)*/
    
}






function pelear(){


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
                dañoInflingido = atacar();
                seleccion2.vida -= dañoInflingido;
                console.log(seleccion2.nombre + " Recibe " + dañoInflingido + " Puntos de Daño " )
            }


        }else{
            console.log(seleccion2.nombre + " Ataca a "+ seleccion1.nombre + " Con " + seleccion2.poder)
            if(esquivar(seleccion1) === true){
                console.log(seleccion1.nombre + " Esquiva el Ataque")
            }else{
                dañoInflingido = atacar();
                seleccion1.vida -= dañoInflingido;
                console.log(seleccion1.nombre + " Recibe " + dañoInflingido + " Puntos de Daño " )
            }
        }

        if(seleccion1.vida <= 0){
            console.log("------------")
            console.log(seleccion2.nombre + " Es el Ganador")
            alert("Felicidades a " + seleccion2.nombre + "  Vencio a " + seleccion1.nombre)
            peleaActiva = false;

        }else if(seleccion2.vida <= 0){
            console.log("------------")
            console.log(seleccion1.nombre + " Es el Ganador")
            alert("Felicidades a " + seleccion1.nombre + " Vencio a " + seleccion2.nombre)
            peleaActiva = false;
        }
        console.log("*****")
        console.log(seleccion1.nombre + " Tiene " + seleccion1.vida + " Puntos de vida")
        console.log(seleccion2.nombre + " Tiene " + seleccion2.vida + " Puntos de vida")

    }
}

alert("Toda la Informacion se mostrara por Consola  ")

console.log(listaPersonajes )

let seleccion1 = seleccionarPersonaje()
let seleccion2 = seleccionarPersonaje()

pelear()