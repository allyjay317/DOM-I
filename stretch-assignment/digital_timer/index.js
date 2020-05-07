let counter = [0, 0, 0, 0];
let timer_id;
let display = [
    document.getElementById("secondTens"),
    document.getElementById("secondOnes"),
    document.getElementById("msHundreds"),
    document.getElementById("msTens"),
]

let timerRun = function(){
    counter[3]++;
    if(counter[3] == 10){
        counter[3] = 0;
        counter[2] ++;
        if(counter[2] == 10){
            counter[2] = 0;
            counter[1]++;
            if(counter[1] == 10){
                window.clearInterval(timer_id);
                timer_id = null
                counter[1] = 0;
                counter[0]++;
                document.querySelectorAll(".digit").forEach(div => div.style.color = "red");
            }
        }
    }
    display.forEach(function(div, index) {
        div.textContent = counter[index];
    })
}


let buttonClick = function(){
    if(timer_id == null && counter[0] == 0){
        
        timer_id = window.setInterval(timerRun, 10);
    }
}

let reset = function(){
    counter = [0, 0, 0, 0];
    if(timer_id != null){
        window.clearInterval(timer_id);
        timer_id = null;
    }
    document.querySelectorAll(".digit").forEach(div => div.style.color = "green");
    display.forEach(div =>  div.textContent = "-");
}

let buttons = document.getElementsByClassName("button");
buttons[0].addEventListener("click", buttonClick);
buttons[1].addEventListener("click", reset)
