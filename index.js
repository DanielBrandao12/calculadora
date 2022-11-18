
const visor = document.querySelector('.visor')
const buttons = document.querySelectorAll('.button')

let numeros
let operacao
let ponto = '.'
let sinais = ['+', '-', '*', '/']
let operacoes = []

buttons.forEach(buttonsId => {

    buttonsId.addEventListener('click', e => {

        let valorClicado = buttonsId.innerText

        //Verifica se valo clicado é um número
        if (!isNaN(valorClicado)) {

            if (visor.innerText == '0') {

                visor.innerText = ''

            }
            if (sinais.includes(operacoes[0])) {
                visor.innerText = ''
                operacoes = []

            }
            if (visor.innerText.length < 10) {

                visor.innerText += valorClicado
            }

        } else if (!visor.innerText.includes(ponto)) {

            if (valorClicado == '.') {

                visor.innerText += valorClicado

            }

        }



        if (valorClicado == '+') {
            numeros = visor.innerText
            operacao = '+'
            operacoes.push(operacao)

        }
        if (valorClicado == '-') {
            numeros = visor.innerText
            operacao = '-'
            operacoes.push(operacao)
        }
        if (valorClicado == '×') {
            numeros = visor.innerText
            operacao = '*'
            operacoes.push(operacao)
        }
        if (valorClicado == '÷') {
            numeros = visor.innerText
            operacao = '/'
            operacoes.push(operacao)
        }
        if (valorClicado == 'C') {
            visor.innerText = 0
        }

        
        if (valorClicado == '=') {
            if (operacao == '+') {
                if (visor.innerText < '9999999999') {
                    return visor.innerText = parseFloat(numeros) + parseFloat(visor.innerText)
                }


            } else if (operacao == '-') {

                return visor.innerText = parseFloat(numeros) - parseFloat(visor.innerText)


            } else if (operacao == '*') {

                if (visor.innerText < '9999999999') {
                    return visor.innerText = parseFloat(numeros) * parseFloat(visor.innerText)
                }


            } else if (operacao == '/') {


                return visor.innerText = parseFloat(numeros) / parseFloat(visor.innerText)



            }

        }
    })
})
