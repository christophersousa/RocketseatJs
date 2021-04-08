function sayMyName(name = ''){
    if(name === ''){
        throw new Error('É necessario seu nome')
    }else{
        console.log(name)
    }
}

try{
    sayMyName('Cris')
}catch(e){
    console.log(e)
}

console.log('Após a função')