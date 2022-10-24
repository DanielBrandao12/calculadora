
const visor = document.querySelector('.visor')
const buttons = document.querySelectorAll('.button')




buttons.forEach(buttonsId => {
    buttonsId.addEventListener('click', e=>{
        let valor = buttonsId.innerText
        if(visor.innerText==0){
            if(valor == '.'){
                visor.innerText + valor
            }
            else{

                visor.innerText=""
            }
          
        }
        if(visor.innerText !== 0 ){

            visor.innerText +=valor
            
    console.log( visor.innerText)
        }
       
       
    } )
} )