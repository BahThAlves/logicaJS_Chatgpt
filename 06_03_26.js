function parOuImpar(num) {
    return num%2 === 0 ? "Par" : "Impar"
}

function fatorial(num) {
    for(let i = num-1; i >= 1; i--) {
        num *= i
    }

return num
}

function inverterString(string) {
    let reversa = []
    for(let i = 0; i < string.length; i++) {
        reversa.unshift(string[i])
    }

return reversa.join("")
}

function maiorDoArray(arr) {
    let maior = arr[0]

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maior) {
            maior = arr[i]
        }
    }

return maior
}

function contarVogais(string) {
    let contar = 0
    let vogais = ["a", "e", "i", "o", "u"]
    string = string.toLowerCase()

    for(let i = 0; i < string.length; i++) {
        for(let j = 0; j < vogais.length; j++) {
            if(string[i].includes(vogais[j])) {
                contar++
            }
        }
    }

return contar
}

function somaDoArray(arr) {
    let soma = 0

    for(let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }

return soma
}

function verificarPalindromo(string) {
    let reverse = string.split("").reverse().join("")
return string === reverse
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
