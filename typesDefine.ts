type Heroe = {
    nombre:string, 
    edad:number
};

let loquesea: string | number | Heroe = '';
loquesea = 15;
loquesea = {
    nombre: 'ssss',
    edad: 15
};