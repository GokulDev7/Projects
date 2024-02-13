const display = document.getElementById('display');
display.value = "0";




function appendToDisplay(input){
    if(display.value === '0'){
        display.value=''
    }
    display.value+=input
   

}
document.addEventListener('keydown', function(event) {
    const key = event.key;

    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
            appendToDisplay(key);
            break;
        case 'Enter':
            calculate();
            break;
        case 'Delete':
            clearDisplay();
            break;
        case 'Backspace':
            deleteChar();
            break;
    }
});
function clearDisplay(){
    display.value='0';
    
}

function calculate(){
    display.value = eval(display.value);

}

function deleteChar(){
    display.value=display.value.toString().slice(0,-1)
}