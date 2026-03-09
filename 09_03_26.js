function calculadoraIMC(peso, altura) {
    altura = altura/100
    return peso/(altura*altura)
}

function CelsiusParaFahrenheit(c) {
    let f = (c*1.8) + 32
return f
}

function parOuImpar(n) {
    return n%2 === 0 ? "Par" : "Ímpar"
}

function fizzBuzz() {
    for(let i = 1; i <= 50; i++) {
        if(i%3 === 0 && i%5 === 0) {console.log("FizzBuzz")}
        else if(i%3 === 0) {console.log("Fizz")}
        else if(i%5 === 0) {console.log("Buzz")}
        else {console.log(i)}
    }
}

function inversorDeString(str) {
    let inverso = ""
    for(let i = str.length-1; i >= 0; i--) {
        inverso += str[i]
    }

return inverso
}

function somaDeArray(arr) {
    let soma = 0
    arr.forEach(x => {
        soma += x
    });

return soma
}

function contagemDeCaracteres(str) {
    let caracteres = {}
    for(let i = 0; i < str.length; i++) {
        if(caracteres[str[i]]) {
            caracteres[str[i]] += 1
        }
        else {
            caracteres[str[i]] = 1
        }
    }

return caracteres
}

function maioridadeArrObj(arrObj) {
    let maioridade = []
    for(let i = 0; i < arrObj.length; i++) {
        if(arrObj[i].idade >= 18) {
            maioridade.push(arrObj[i])
        }
    }

return maioridade
}

function fibonacci(n) {
    let sequencia = [0, 1]
    for(let i = 3; i <= n; i++) {
        sequencia.push(sequencia[i-3] + sequencia[i-2])
    }
return sequencia
}