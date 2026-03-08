function parOuImpar(n) {
    return n%2 === 0 ? "Par" : "Ímpar"
}

function maiorEntreTresNumeros(n1, n2, n3) {
    if(n1 === n2 || n1 === n3 || n2 === n3) {
        return "Existem números iguais"
    }

    let maior
    if(n1 > n2 && n1 > n3) {
        maior = n1
    }
    else if(n2 > n1 && n2 > n3) {
        maior = n2
    }
    else {
        maior = n3
    }

return maior
}

function tabuadaAteDez(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} X ${i} = ${n*i}`)
    }
}

function somaDeCincoNumeros(n1, n2, n3, n4, n5) {
    return n1+n2+n3+n4+n5
}

function contagemRegressiva() {
    for(let i = 10; i >= 1; i--) {
        console.log(i)
    }
}

function fatorial(n) {
    let fatorial = n
    for(let i = n-1; i >= 2; i--) {
        fatorial = fatorial*i
    }

return fatorial
}

function inverterNumero(n) {
    let str = String(n)
    let reverse = []
    for(let i = 0; i < str.length; i++) {
        reverse.unshift(str[i])
    }

return Number(reverse.join(""))
}