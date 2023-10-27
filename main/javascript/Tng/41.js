// 현재 시간 화면에 표시
// 실시간 시간을 화면에 표시
//toLocaleTimeString();
const clock = document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
    const main = hours >= 12 ? "오후" : " 오전";
	clock.innerText =(` 현재 시각 ${main} ${hours % 12} : ${minutes} : ${seconds}`);
}
getClock();


const STOPBTN = document.getElementById("stop_btn");
let interV;

STOPBTN.addEventListener("click",function () {
    clearInterval(interV);
});

getClock();
interV = setInterval(getClock, 1000);

// 재시작 = 누른 시점의 시간부터 다시 작동
const RESRT = document.getElementById("restart");

RESRT.addEventListener("click",function () {
    // clearInterval(interV);
    getClock();
    interV = setInterval(getClock, 1000);
});

// setInterval(getClock, 1000);