const celdas = []; //celdas de 4x4
const RETICULA = 4;

const azulejos = [];
const NA = 6; //número de azulejos

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
  //Tiles5
  {
    UP:0,
    RIGHT:0,
    DOWN:1,
    LEFT:1,
  },

];

function preLoad(){
  for(let i = 0; i < NA; i++ ){
    azulejos[i] = loadImage(`azulejos/Tiles${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);
let opcionesI = [];
for(let i = 0; i < azulejos.length; i++){
  opcionesI.push(i);
}

for(let i = 0; i < RETICULA * RETICULA; i ++){
  celdas[i] = {
    colapsada: false,
    opciones: opcionesI
  }
}
print(celdas);

}

function draw() {

}
