function fizzBuzz() {
    for(let i = 1; i < 100; i++) {
        if(i%3 === 0 && i%5 === 0) {
            console.log("FizzBuzz")
        }
        else if (i%3 === 0) {
            console.log("Fizz")
        }
        else if (i%5 === 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}

function inverter(string) {
    string = string.split("").reverse()

return string
}

function contarVogais(string) {
    let contar = 0
    let vogais = ["a", "e", "i", "o", "u"]
    string.split("")

    for(let i = 0; i < string.length; i++) {
        for(let j = 0; j < vogais.length; j++) {
            if(string[i] === vogais[j]) {
                contar++
            }
        }
    }

return contar
}

function ehPrimo(num) {
    let divisoes = []

    for(let i = 1; i <= num; i++) {
        if(Number.isInteger(num/i)) {
            divisoes.push(num/i)
        }
    }

return divisoes[0] === num && divisoes[1] === 1
}

function maiorNumero(arr) {
    maior = arr[0]

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= maior) {
            maior = arr[i]
        }
    }

return maior
}

function palindromo(string) {
    string = string.toLowerCase()
    let reverse = string.split("").reverse().join("")


return string === reverse
}