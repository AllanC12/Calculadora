const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')
const numbers = document.querySelectorAll('[data-number]')
const btnDelete = document.querySelector('[data-delete]')
const btnAllClear = document.querySelector('[data-all-clear]')
const btnEqual = document.querySelector('[data-equals]')
const operators = document.querySelectorAll('[data-operator]')
let checkPoint = false

function insertNumber(number){    
    currentOperand.innerText += number;
}

function defineOperation(operator){
    if(currentOperand.innerText == '') return;
    previousOperand.innerText = currentOperand.innerText + operator;
    currentOperand.innerText = ''
    
}
    
function deleteNumbers(){
    currentOperand.innerText = currentOperand.innerText.slice(0,-1)
    if(currentOperand.innerText == ''){
        previousOperand.innerText = previousOperand.innerText.slice(0,-1)
    }

}
    

function calculate(operator){
            var intPrevious = parseFloat(previousOperand.innerText.split(operator)[0])
            var intCurrent = parseFloat(currentOperand.innerText)

            if(isNaN(currentOperand.innerText)){
                currentOperand.innerText = ''
            }
            
            if(previousOperand.innerText.includes('*')){
                currentOperand.innerText =  intPrevious * intCurrent;
                previousOperand.innerText = ''
            }else if(previousOperand.innerText.includes('÷')){
                currentOperand.innerText =  intPrevious / intCurrent;
                previousOperand.innerText = ''          
            }else if(previousOperand.innerText.includes('+')){
                currentOperand.innerText =  intPrevious + intCurrent;
                previousOperand.innerText = ''          
            }else if(previousOperand.innerText.includes('-')){
                currentOperand.innerText =  intPrevious - intCurrent;
                previousOperand.innerText = ''          
            }else{
                return;
            }
            
}

for(const number of numbers){
    number.addEventListener('click',(event)=>{
         if(number.innerText == '.')
        if(checkPoint) return;
        else checkPoint = true;

        insertNumber(event.target.innerText)
        
    })
}

btnAllClear.addEventListener('click',()=>{
    currentOperand.innerText = ''
    previousOperand.innerText = ''
})

btnDelete.addEventListener('click',()=>{
  deleteNumbers()
})

btnEqual.addEventListener('click',()=>{
    calculate()
})

for(const operator of operators){
    operator.addEventListener('click',(event)=>{
        checkPoint = false
        if(previousOperand.innerText) 
        calculate(event.target.innerText)
        defineOperation(event.target.innerText)
      })
}  