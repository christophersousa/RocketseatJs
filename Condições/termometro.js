const termometro = 38

if(termometro > 37.5){
    console.log("Febre alta")
}else if(termometro< 37.5 && termometro > 36.5){
    console.log("Febre moderada")
}else{
    console.log("Temperatura estavel")
}