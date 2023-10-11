console.log(' Hello world');

const num1 =  Math.ceil(Math.random()*10)
const num2 =  Math.ceil(Math.random()*10)
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById ('score');

let score = JSON.parse(localStorage.getItem('score'))

if(!score){
    score = 0;
}
const questionEl = document.getElementById('question');

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`

const correctAnswer = num1 * num2
scoreEl.innerText = `score: ${score}`


formEl.addEventListener('submit', () =>{
    const userAns =  +inputEl.value;
    if(userAns === correctAnswer){
        score++
        updateLocalStorage()
     }else{
        score --
    updateLocalStorage()   }

})
function updateLocalStorage(){ 
    localStorage.setItem('score',JSON.stringify(score))

}

console.log(score)