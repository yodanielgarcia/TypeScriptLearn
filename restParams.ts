function restParam(name:string, ...OtherParams:string[]):string {
  return name + ' ' + OtherParams.join(' ');
}

let newName:string = restParam('one', 'two', 'tree')
console.log(newName);
