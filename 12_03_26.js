function calculadoradeIMC(peso, altura) {
    let imc = peso / (altura * altura)

    if(imc <= 18.5) {
        return "Baixo Peso"
    }
    else if(imc <= 24.9) {
        return "Peso Normal"
    }
    else if(imc <= 29.9) {
        return "Excesso de Peso"
    }
    else if(imc <= 30) {
        return "Obesidade"
    }
    else {
        return "Obesidade Extrema"
    }
} console.log(calculadoradeIMC(60, 1.70))

function parOuImpar(n) {
    return n%2 === 0 ? "Par" : "Ímpar"
} console.log(parOuImpar(2), parOuImpar(5))

function conversorDeMoeda(real) {
    let cotacaoDolar = 5.00
    return real/cotacaoDolar
} console.log(conversorDeMoeda(10))

function aprovacaoEscolar(n1, n2, n3) {
    let media = (n1+n2+n3)/3
    if(media < 0 || media > 10) {return "Média Inválida"}
    
    if(media < 5) {
        return "Reprovado"
    }
    else if(media < 7) {
        return "Recuperação"
    }
    else if(media <= 10) {
        return "Aprovado"
    }
} console.log(aprovacaoEscolar(10, 5, 9),aprovacaoEscolar(5, 5, 5), aprovacaoEscolar(2, 3, 4), aprovacaoEscolar(10, 12, 10))

function tabuadaAutomatica(n) {
    let tabuada = []
    for(let i = 1; i <= 10; i++) {
        tabuada.push(`${n} X ${i} = ${n*i}`)
    }

return tabuada
} console.log(tabuadaAutomatica(10))

function fibonacci(n) {
    let sequencia = [0, 1]
    for(let i = 2; i <= n-1; i++) {
        sequencia.push(sequencia[i-2] + sequencia[i-1])
    }

return sequencia
} console.log(fibonacci(5))

function adivinharNúmero() {
    let n = Number(prompt("Digite um número"))
    let nAleatorio = Math.floor(Math.random() * 100)
    let acerto = false

    while (acerto === false) {
        if(n === nAleatorio) {
            console.log("Acertou")
            acerto = true
        }
        else if(n > nAleatorio) {
            console.log("Mais baixo")
            n = Number(prompt("Digite outro número"))
        }
        else if(n < nAleatorio) {
            console.log("Mais alto")
            n = Number(prompt("Digite outro número"))
        }
    }
return nAleatorio
} adivinharNúmero()