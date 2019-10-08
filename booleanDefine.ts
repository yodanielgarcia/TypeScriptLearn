// Definicion de Boolean
let esBool:boolean = true;
let esBoolean:boolean;
let esBooleano = true;

if ( esBool ) {
  console.log('es ok');  
} else {
  console.log('not ok');  
}

esBool = false;

esBool = convertFalse();

function convertFalse() {
  return false;  
}
