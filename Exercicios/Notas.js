//primeira forma de fazer
function transfomeNotas(nota){
    let result;
    if(nota < 60 && nota >= 0){
        result = 'F'
    }else if(nota >= 60 && nota <= 69){
        result = 'D'
    }else if(nota >= 70 && nota <=79){
        result = 'C'
    }else if(nota >=80 && nota <=89){
        result = 'B'
    }else if(nota >=90 && nota <= 100){
        result = 'A'
    }else{
        throw new Error('Erro!!, nota invalida')
    }
    return result
}

try{
    const nota = 100
    console.log(transfomeNotas(nota))
}catch(e){
    console.log(e)
}