// const numbers = document.querySelectorAll('.numb');
// console.log(numbers);
// const operations = document.querySelectorAll ('.cacl__btn__operator');
// const decimalBtn = document.getElementById('decimal');
// const clear = document.getElementById('clear');
// const rivnoBtn = document.getElementById('rivno');
// const result = document.getElementById('result');
// const currentNumber = 0;
// const newNumber = false;
// const savedOperation = '';

// for (let i=0; i<numbers.length; i++) {
//     let number = numbers[i]; 
//     // console.log(typeof(number));
//     number.addEventListener('click', numberPress);
    
// }

// for (let i=0; i<operations.length; i++) {
//     let operationBtn = operations[i];
//     operationBtn.addEventListener('click', operation);
// }

// decimalBtn.addEventListener('click', decimal)

// clear.addEventListener('click', clearBtn)

// rivnoBtn.addEventListener('click', rivno)


// function numberPress (number){
//     // result.value += number;

//     // console.log(number)
// };
// function operation (){
//     console.log('oper')
// };
// function decimal (){
//     console.log('.')
// };
// function rivno (){
//     console.log('rivno')
// };
// function clearBtn (){
//     console.log('clearBtnnn')
// };


const calc = document.querySelector('.calc');
const result = document.querySelector('#result')

calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('calc__btn')) return;
    const value = event.target.innerText;

    switch(value) {
        case 'C':
            result.innerText = '';
            break;

        case '=':
            result.innerText = eval(result.innerText);
            break;

        default:
            result.innerText += value;
    }
});