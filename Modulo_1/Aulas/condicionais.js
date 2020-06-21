function RetornaSexo(Sexo){
    if (Sexo == 'M'){
        return 'Masculino';
    } else if(Sexo === 'F'){
        return 'Feminino';
    } else{
        return 'Outro';
    }
}

var resultado = RetornaSexo('M');

console.log(resultado);
