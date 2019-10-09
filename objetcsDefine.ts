type heroe = {
    nombre:string, 
    edad:number, 
    poder:string[], 
    getName:()=>string
}

let heroeXXX:heroe = {
    nombre: 'xxx',
    edad: 24,
    poder: ['nada','cantar'],
    getName(){
        return this.nombre
    }
};

let heroe: {nombre:string, edad:number, poder:string[], getName:()=>string} = {
    nombre: 'xxx',
    edad: 24,
    poder: ['nada','cantar'],
    getName(){
        return this.nombre
    }
};

heroe.getName()
/*heroe = {
    nombre: 'aaa',
    edad: 25,
    poder: ['volar', 'correr'],
    getName()
}*/