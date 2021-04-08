const family= {
    receitas: [2500.76, 200.79],
    despesas: [250.45,70.30,500,400]
}

function some(array) {
    let total= 0
    for(let soma of array) {
        total += soma
    }
    return total
}

function sistema() {
    const receitas = some(family.receitas)
    const despesas = some(family.despesas)

    const resto = receitas - despesas
    let saida = 'Seu saldo é negativo: Saldo '

    if(resto > 0){
        saida = `Seu saldo está positivo: Saldo `
    }

    console.log(`Saldo total: ${receitas.toFixed(2).replace('.', ',')}`)
    console.log(`Despesas: ${despesas.toFixed(2).replace('.', ',')}`)
    console.log(saida + resto.toFixed(2).replace('.', ',') + ' R$')
}

sistema()

