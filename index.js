
const visor = document.querySelector('.visor')
const buttons = document.querySelectorAll('.button')

let numeros = []

buttons.forEach(buttonsId => {
    buttonsId.addEventListener('click', e => {
        let valorClicado = buttonsId.innerText
            console.log(valorClicado)
            numeros.push(valorClicado)
            visor.innerText = numeros
    })
})


    /*  if(!isNaN(valorClicado)){

            visor.innerText = valorClicado
            num2= visor.innerText 
        }

     
        let opcao=valorClicado
       switch(opcao){

            case '+': 
            num1= visor.innerText 
             opcao ='+'
            break
            case '-': 
            num1= visor.innerText 
            opcao ='-'
            break
            case '*': 
            num1= visor.innerText 
            opcao ='*'
            break
            case '/': 
            num1= visor.innerText 
            opcao ='/'
            break
        
       }
       if(valorClicado == '='){
        console.log(opcao)
       
         console.log(  soma(parseInt(num1), parseInt(num2)))
        
          
         function soma(n1,n2){
             return n1+n2
         }
         function sub(n1,n2){
             return n1+n2
         }
         function mmulti(n1,n2){
             return n1+n2
         }
         function divi(n1,n2){
             return n1+n2
         }
        }*/
