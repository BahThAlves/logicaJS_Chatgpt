function calculadoraDeMedia(n1, n2, n3, n4) {
    let media = (n1 + n2 + n3 + n4)/4

    if(media >= 7) {return "Aprovado"}
    else if(media >= 5 && media < 7) {return "Recuperação"}
    else {return "Reprovado"}
}

function parOuImpar(n) {
    return n%2 === 0 ? "Par" : "Impar"
}

function conversorDeMedidas(metros) {
    let centimetros = metros*100
    let milimetros = centimetros*10

    return `Metros: ${metros}, Centímetros: ${centimetros}, Milímetros: ${milimetros}`
}

function tabuadaDinamica(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} X ${i}: ${n*i}`)
    }
}

function maiorVetor(n1, n2, n3, n4, n5) {
    let ns = [n1, n2, n3, n4, n5]
    let maior = ns.reduce((x, item) => {
        if(item > x) {x = item}

        return x
    })


return maior
}

function fibonnaci(n) {
    let sequencia = [0, 1]
    for(let i = 2; i <= n; i++) {
        sequencia.push(sequencia[i-2] + sequencia[i-1])
    }

return sequencia
}