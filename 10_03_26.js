function inverterString(str) {
    let reversa = ""
    for(let i = str.length-1; i >= 0; i--) {
        reversa += str[i]
    }
return reversa
}

function maiorNumero(arr) {
    let maior = arr.reduce((x, item) => {
        if(item >= x) {
            x = item
        }
    return x
    })

return maior
}

function contarVogais(str) {
    str = str.trim().toLowerCase()
    let vogais = ["a", "e", "i", "o", "u"]
    let quantidade = 0

    for(let i = 0; i < str.length; i++) {
        if(vogais.includes(str[i])) {
            quantidade++
        }
    }

return quantidade
}

function fatorial(n) {
    let fatorial = n

    for(let i = n-1; i >= 1; i--) {
        fatorial *= i
    }

return fatorial
}

function palindromo(str) {
    str = str.trim().toLowerCase()
    let reversa = ""
    for(let i = str.length-1; i >= 0; i--) {
        reversa += str[i]
    }

return reversa === str
}

function removerDuplicados(arr) {
    let semDup = [arr[0]]
    for(let i = 1; i < arr.length; i++) {
        if(!semDup.includes(arr[i])) {
            semDup.push(arr[i])
        }
    }

return semDup
}

function fizzBuzz() {
    for(let i = 1; i <= 50; i++) {
        if(i%3 === 0 && i%5 === 0) {
            console.log("FizzBuzz")
        }
        else if(i%3 === 0) {
            console.log("Fizz")
        }
        else if(i%5 === 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}

function somaArray(arr) {
    let soma = arr.reduce((x, item) => {
        x += item

    return x
    })

return soma
}

function contarOcorrencias(arr, n) {
    let contar = 0
    for(let i = 0; i < arr.length; i++) {
        if(n === arr[i]) {
            contar++
        }
    }

return contar
}