const celdas = []; //celdas de 4x4
const RETICULA = 4;

const azulejos = [];
const NA = 6; //número de azulejos

let ancho;  //ancho de celdas
let alto; //altura de celdas

const reglas = [
  //Reglas de los bordes de cada azulejo
  {
    //Tiles0
    UP:1,
    RIGHT:0,
    DOWN:1,
    LEFT:0,
  },
  {
    //Tiles1
    UP:1,
    RIGHT:1,
    DOWN:0,
    LEFT:1,
  },
  {
    //Tiles2
    UP:0,
    RIGHT:1,
    DOWN:1,
    LEFT:1,
  },
  {
    //Tiles3
    UP:1,
    RIGHT:0,
    DOWN:1,
    LEFT:1,
  },
  {
    //Tiles4
    UP:1,
    RIGHT:1,
    DOWN:1,
    LEFT:0,
  },
  {
    //Tiles5
    UP:0,
    RIGHT:0,
    DOWN:1,
    LEFT:1,
  },

];

function preload(){
  for(let i = 0; i < NA; i++ ){
    azulejos[i] = loadImage(`azulejos/Tiles${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);

  ancho = width / RETICULA;
  alto = height / RETICULA;

  let opcionesI = [];

  for(let i = 0; i < azulejos.length; i++){
    opcionesI.push(i);
  }

  for(let i = 0; i < RETICULA * RETICULA; i ++){
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    }
  }

  print(azulejos)
}

function draw() {
  
  const celdasDisponibles = celdas.filter((celda) =>{ 
  return celda.colapsada == false
  });

  if(celdasDisponibles.length > 0){
    celdasDisponibles.sort((a, b) =>{
      return a.opciones.length - b.opciones.length;
    });
    print(celdasDisponibles)

    const celdasPorColapsar = celdasDisponibles.filter((celda)=>{
      return celda.opciones.length == celdasDisponibles[0].length;
    });
    
    
    const celdaSeleccionada = random (celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];

    
    for(let x = 0; x < RETICULA; x++){
      for(let y = 0; y < RETICULA; y++){
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if(celdaActual.colapsada){
          Image(
            azulejos[celdaActual.opciones[0]], 
            x * ancho, 
            y * alto,
            ancho,
            alto
            );
        }
      }
    
    }

    noLoop();
  }
}
