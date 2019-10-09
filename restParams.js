function restParam(name) {
    var OtherParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        OtherParams[_i - 1] = arguments[_i];
    }
    return name + ' ' + OtherParams.join(' ');
}
var newName = restParam('one', 'two', 'tree');
console.log(newName);
