let container = document.getElementById("container")


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

let luffy = new Personaje("LUFFY" , "Shotgun Gattlin" , 1500 , 30 , "./imagenes/luffyJS.jpg")
console.log(luffy.nombre)

let goku = new Personaje("GOKU" , "Kamehameha" , 1700 , 40, "./imagenes/gokuJS.jpg")
console.log(goku.nombre)

let vegeta = new Personaje("VEGETA" , "Big Bang" , 1700 , 38, "/imagenes/vegetaJS.jpg")
console.log(vegeta.nombre)

let naruto = new Personaje("NARUTO" , "Rasengan" , 1000 , 20, "/imagenes/narutoJS.jpg")
console.log(naruto.nombre)

let meliodas = new Personaje("MELIODAS" , "Contra-Ataque Total" , 1260 , 32, "/imagenes/meliodasJS.jpeg")
console.log(meliodas.nombre)

let saitama = new Personaje("SAITAMA" , "Golpe Simple" , 1000 , 50, "/imagenes/saitamaJS.jpg")
console.log(saitama.nombre)

let levi = new Personaje("LEVI" , "Ataque Tridimensional" , 800 , 12, "/imagenes/leviJS.jpg")
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

listaPersonajes.forEach((item) =>{
    const divCard = document.createElement("div");

    const divContent = `
    <div class = "card-body">
    <h5 class = "card-title">${item.nombre}</h5>
    <img src = "${item.img}">
    <p class = "card-text">${item.poder}</p>
    <p class = "card-text">${item.vida}</p>
    <p class = "card-text">${item.habilidadEsquivar}</p>
    </div>
    `;
    divCard.innerHTML = divContent;
    container.append(divCard);

})

const btn = document.createElement('button')
btn.textContent = "sorpresa"



console.log(listaPersonajes )

let seleccion1 = seleccionarPersonaje()
let seleccion2 = seleccionarPersonaje()

//pelear()


