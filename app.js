var btnCheck = document.querySelector('#btn-check')
var outputText = document.querySelector('#output')
var year = document.querySelector('#input-text');

function clickHandler() {


    if(isNaN(year.value) === true || year.value === "") {
        outputText.innerHTML = "Please enter a valid input."
    }

    else {
    if((year.value % 400 == 0) || (year.value % 4 == 0 && year.value % 100 != 0)) {
        outputText.innerHTML= "It is a leap year";
        }
    else
     outputText.innerHTML = "It is not a leap year";
}
}



btnCheck.addEventListener("click", clickHandler);