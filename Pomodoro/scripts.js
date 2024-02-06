let workTitle = document.getElementById('work_label');
let breakTitle = document.getElementById('break_label');
let workTime = 25;
let breakTime = 5;
let seconds = "00"
let interval = 0
let breakCount = 1;
let currentWorkminute = 0;
let currentWorksecond = 0;
let currentState = 'work';




window.onload = () => {
    document.getElementById('minutes').innerHTML = "25";
    document.getElementById('seconds').innerHTML = seconds;
    workTitle.classList.add('active');
}

function start() {
   
    document.getElementById('break-counter').innerHTML = `Break-Count: ${breakCount}`;
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "none";
    document.getElementById('pause').style.display = "block";

  
    if (currentWorkminute === 0 && currentWorksecond === 0) {
        seconds = 59;
        if (currentState === 'work') {
            currentWorkminute = workTime - 1;
            currentWorksecond = seconds;
        } else {
            currentWorkminute = breakTime - 1;
            currentWorksecond = seconds;
        }
    }


    let timerFunction = () => {
       
        document.getElementById('minutes').innerHTML = currentWorkminute;
        document.getElementById('seconds').innerHTML = currentWorksecond;

      
        currentWorksecond--;

        if (currentWorksecond < 0) {
            currentWorkminute--;

            if (currentWorkminute < 0) {
                if (breakCount % 2 === 0) {
                   
                    currentWorkminute = breakTime;
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                    currentState = 'break';
                    breakCount++;
                    
                } else {
                    
                    currentWorkminute = workTime;
                    
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                    currentState = 'work';
                    breakCount++;
                   
                }
            }
            console.log(breakCount);

            currentWorksecond = 59;
        }
        return breakCount;
    }

    
    interval = setInterval(timerFunction, 1); // 1000 = 1
   

}

function toggleTime() {
    if (workTime === 25) {
        workTime = 5;
        breakTime = 25;
    } else {
        workTime = 25;
        breakTime = 5;
    }

    document.getElementById('minutes').innerHTML = workTime;

   
    if (workTime == 25) {
        workTitle.classList.add('active');
        breakTitle.classList.remove('active');
    } else {
        workTitle.classList.remove('active');
        breakTitle.classList.add('active');
    }

    resetFunction(); // reset the timer when toggling
}


function pauseFunction() {
    clearInterval(interval);
    document.getElementById('start').style.display = "inline";
    document.getElementById('reset').style.display = "inline";
    document.getElementById('pause').style.display = "none";
}
function resetFunction() {

    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";
    document.getElementById('pause').style.display = "none";

    clearInterval(interval);

    currentState = 'work';
    breakCount = 0;
    currentWorkminute = 0;
    currentWorksecond = 0;
}
