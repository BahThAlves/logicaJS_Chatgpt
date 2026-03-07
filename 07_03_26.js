function inversorDeStringSemMetodosProntos(string) {
    let reversa = []
    let palavra = ""
    for(let i = 0; i < string.length; i++) {
        reversa.unshift(string[i])
    }
    for(let i = 0; i < reversa.length; i++) {
        palavra += reversa[i]
    }

return palavra
}

function verificarPalindromo(string) {
    string = string.toLowerCase().trim()
    let reverse = string.split("").reverse().join("")

return string === reverse
}

function frequenciaDeElemento(arr) {
    let infos = {}

    for(let i = 0; i < arr.length; i++) {
        if(infos[arr[i]]) {
            infos[arr[i]] += 1
        }
        else {
            infos[arr[i]] = 1
        }
    }


return infos
}

function fizzBuzz() {
    for(let i = 1; i <= 50; i++) {
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