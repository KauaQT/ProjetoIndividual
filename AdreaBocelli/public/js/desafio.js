const elementyMinutes = document.querySelector("#minutes");
const elementySeconds = document.querySelector("#seconds");
const startbtn = document.querySelector("#startbtn");


let interval;
let minutes = 0;
let seconds = 0;

startbtn.addEventListener('click', startTimer)

function startTimer() {

    interval = setInterval(() => {

        seconds += 100;

        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }

    }, 100)

}