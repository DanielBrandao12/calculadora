
const visor = document.querySelector('.visor')
const buttons = document.querySelectorAll('.button')

let numeros 
let operacao
let tela

buttons.forEach(buttonsId => {
    buttonsId.addEventListener('click', e => {
        let valorClicado = buttonsId.innerText
            console.log(valorClicado)
       
            
            if(!isNaN(valorClicado)){
                visor.innerText += valorClicado
            }else if(valorClicado =='.') {
                visor.innerText += valorClicado
            }
            console.log(parseFloat(visor.innerText))
            if(valorClicado =='+'){
                numeros= visor.innerText
                operacao = '+'
                visor.innerText =''
               // console.log(numeros)
            }
            if(valorClicado =='-'){
                numeros= visor.innerText
                operacao = '-'
                visor.innerText =''
               // console.log(numeros)
            }
            if(valorClicado =='*'){
                numeros= visor.innerText
                operacao = '*'
                visor.innerText =''
               // console.log(numeros)
            }
            if(valorClicado =='/'){
                numeros= visor.innerText
                operacao = '/'
                visor.innerText =''
               // console.log(numeros)
            }

            if(valorClicado =='='){
               if(operacao =='+'){
                  
                return   console.log(visor.innerText= parseFloat(numeros)+parseFloat(visor.innerText))

               }else if(operacao =='-'){
                  
                return   console.log(visor.innerText= parseFloat(numeros)-parseFloat(visor.innerText))

               }else if(operacao =='*'){
                  
                return   console.log(visor.innerText= parseFloat(numeros)*parseFloat(visor.innerText))

               }else if(operacao =='/'){
                  
                return   console.log(visor.innerText= parseFloat(numeros)/parseFloat(visor.innerText))

               }
               
            }
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
