function RetornaSexo(Sexo){
    switch(Sexo){
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino';
        default:
            return 'Outro';
    }
}

var Resultado = RetornaSexo('A');

console.log(Resultado)