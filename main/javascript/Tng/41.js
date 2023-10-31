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


// const PRINTTIME = document.getElementById('clock');

// // 하
// // 1. 현재 시간을 화면에 표시

// // 중
// // 2. 실시간으로 시간을 화면에 표시

// let interval;
// startTime();

// function getNow() {
// 	const NOW = new Date();
// 	const NOWUSA = new Date(); // 미국시간 구할 Date
// 	let hour_24 = NOW.getHours();
// 	let minute = NOW.getMinutes();
// 	let second = NOW.getSeconds();
// 	let AMPM = hour_24 > 12 ? '오후' : '오전';
// 	let hour_12 = hour_24 > 12 ? hour_24 - 12 : hour_24;
// 	let print_time = 
// 		AMPM + ' '
// 		+ add_str_zero(hour_12) + ':'
// 		+ add_str_zero(minute) + ':'
// 		+ add_str_zero(second);

// 	NOWUSA.setTime( NOW - (1000 * 60 * 60 * 13) ); // 현재시간 - 13시
// 	let now_usa = NOWUSA.toLocaleTimeString();

// 	PRINTTIME.innerHTML = print_time + '<br>'  + now_usa;

// 	// --------------
// 	// 시간을 이렇게도 가져올 수 있습니다.('오후 4:40:21')
// 	// --------------
// 	// PRINTTIME.innerHTML = NOW.toLocaleTimeString();
// }

// // 숫자가 10 미만이면 '0'을 붙여주는 함수
// function add_str_zero(num) {
// 	return String(num < 10 ? '0' + num : num); 
// }


// // 중하
// // 3. 멈춰 버튼을 누르면, 시간이 정지할 것
// const BTNSTOP = document.querySelector('#btn-stop');
// BTNSTOP.addEventListener('click', stopTime);

// function stopTime() {
// 	clearInterval(interval);
// }

// // 중상
// // 4. 재시작 버튼을 누르면, 버튼을 누른 시점의 시간부터 다시 실시간으로 화면에 표시
// const BTNRESTART = document.querySelector('#btn-restart');
// BTNRESTART.addEventListener('click', startTime);

// function startTime() {
// 	getNow(); // 시작 or 재시작시 1초딜레이 생기는 현상 없애기 위해 추가
// 	interval = setInterval( getNow, 1000 );
// }

