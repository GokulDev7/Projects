const display = document.getElementById('display');
const toggle = document.getElementById('darkmode-toggle');
const calculator = document.getElementById('main');


toggle.addEventListener('change', function(){
    if(toggle.checked){
        calculator.style.transition='0.3s';
        calculator.style.background = "linear-gradient(320deg, #fff, #555, #bbb)";
        
    }
    else{
        
        calculator.style.background="linear-gradient(320deg, #040D12,#232e2a, #183D3D)";
        calculator.style.transition='0.3s';
        
        
    }
})

function appendToDisplay(input){
    

}

function clearDisplay(){

}

function calculate(){

}

function deleteChar(){

}