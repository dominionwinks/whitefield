// let btn = document.querySelector('button');
// let output = document.querySelector('#output');
// function getRandomNumber(min, max) {
//     let step1 = max - min + 1;
//     let step2 = Math.random() * step1;
//     let result = Math.floor(step2) + min;
//     return result;
// }
// btn.addEventListener('click', () => {
//     output.innerText = getRandomNumber(0, 25);
// });

let btn = document.querySelector('button');
let output = document.querySelector('#output');
let input = document.querySelector('#time-input');
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
function createArrayOfNumbers(start, end){
    let myArray = [];
    for(let i = start; i <= end; i++) { 
        myArray.push(i);
    }
    return myArray;
}
let numbersArray = createArrayOfNumbers(1,24);
btn.addEventListener('click', () => {
    if(numbersArray.length == 0){
        output.innerText = 'No More Time Available';
        return;
    }
    let randomIndex = getRandomNumber(0, numbersArray.length-1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1)

    output.innerText =  timeAllocation(randomNumber);
    input.value = output.innerText;
});
 function timeAllocation(random){
    if (random > 0 && random <= 12 ){
        return `${random}:00 am`
    }
    else if(random == 13 ){
        return `1:00 pm`
    }
    else if(random == 14 ){
        return `2:00 pm`
    }
    else if(random == 15 ){
        return `3:00 pm`
    }
    else if(random == 16 ){
        return `4:00 pm`
    }
    else if(random == 17 ){
        return `5:00 pm`
    }
    else if(random == 18 ){
        return `6:00 pm`
    }
    else if(random == 19 ){
        return `7:00 pm`
    }
    else if(random == 20 ){
        return `8:00 pm`
    }
    else if(random == 21 ){
        return `9:00 pm`
    }
    else if(random == 22 ){
        return `10:00 pm`
    }
    else if(random == 23 ){
        return `11:00 pm`
    }
    else if(random == 24 ){
        return `12:00 am`
    }
}