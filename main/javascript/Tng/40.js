// 1. 버튼 클릭시 '두근 두근 '메세지 출력 <하>

// const DKDK = document.getElementById("click_btn");

// DKDK.addEventListener('click',() => {
//     alert('두근두근');
// });


// // 2. 특정 영역에 마우스 포인트가 진입하면 아래 내용의 알러트가 나옴 / 들킨 상태에서는 안 나옴


// // 3-2 . 클릭시 들켰다
// const WIN = document.getElementById("icon");


// WIN.addEventListener('mousedown', () => {
//         alert('들켰따');
//         WIN.style.backgroundColor = "blue"; 
// });


// WIN.addEventListener('mouserenter', () => {
//     WIN.style.backgroundColor = "";
// });

// const WIN2 = document.getElementById("bk");
// WIN.addEventListener('click',() => {
//     alert('다시숨는다');
//     WIN.style.backgroundColor ="red";
//     WIN.style.float="right";
  
// });

// function ClickHide(event) {
//     const div = document.getElementById("icon");

//     div.style.backgroundColor = "beige";
//     alert('들켰다');

//     div.addEventListener('click',() => {
//         div.style.backgroundColor="red";
//     });

//     // const rect = event.target.getBoundingClientRect();
//     // const rect = div.getBoundingClientRect();
//     // const currentX = rect.left;
//     // const currentY = rect.top;

//     // const newX = window.innerWidth - rect.width; 
//     // const newY = window.innerHeight - rect.height;

//     // const ranX = Math.random() * newX; 
//     // const ranY = Math.random() * newY; 

//     // div.style.transform = `translate(${ranX}px, ${ranY}px)`;};



// 2-1. 클릭하면
// 3. 2버너 영역 클릭하면 아래의 알러트 출력, 배경색 베이지로 변경
// 4. 3번에서 한 번 더 클릭 하면 아래의 알러트 출력. 배경색 흰색으로 바뀌고 안보임(다시숨음)

// const clickBtn = document.getElementById("click_btn");
// clickBtn.addEventListener("click", () => {
//     alert('두근두근');
// });


// const ICON = document.getElementById("icon");
// // ART_DIV.className = "alert";


// const ART_DIV = document.createElement("div");
// ART_DIV.className = "alert";

// ICON.appendChild(ART_DIV);

// ICON.addEventListener("click", () => {
//     alert('찾았따');
//     ICON.style.backgroundColor="red";
//     moveAlert();
// });


// function moveAlert() {
//     ART_DIV.style.position = "absolute";
//     const maxX = window.innerWidth - ART_DIV.clientWidth;
//     const maxY = window.innerHeight - ART_DIV.clientHeight;

//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     ART_DIV.style.left = randomX + "px";
//     ART_DIV.style.top = randomY + "px";
// }




// 하
// 1. 버튼을 클릭시 아래 내용의 알러트가 나옵니다.
	//"안녕하세요."
	//"숨어있는 div를 찾아보세요."

// 중하
//2-1. 특정 영역에 마우스 포인터가 진입하면 아래 내용의 알러트가 나옵니다.
	//"두근두근"

// 상
//2-2. 들킨 상태에서는 알러트가 안나옵니다. 안 들켰으면 계속 알러트가 나와야 합니다.

// 중하
//3. 2번의 영역을 클릭하면 아래의 알러트를 출력하고, 배경색이 베이지 색으로 바뀌어 나타납니다.
	//"들켰다!"

// 상
//4. 3번의 상태에서 다시 한번더 클릭하면 아래의 알러트를 출력하고, 배경색이 흰색으로 바뀌어 안보이게 됩니다.
	//"다시 숨는다."


//   1  >>  2-1  >> 3  >> 4  >> 2-2

// --------------
// mk 소스코드
// --------------
// const BTN = document.getElementById('BTN');
// BTN.addEventListener('click', () => {
// 	alert('안녕하세요'+'\n'+'숨어있는 div를 찾아보슈')
// 	BTN.classList.add('start');
// });

// const DIV1 = document.getElementById('div1');
// DIV1.addEventListener('mouseenter', () => {
// 	if(getComputedStyle(DIV1).backgroundColor === 'rgb(255, 255, 255)' && BTN.className === 'start') {
// 		alert('두근두근')
// 	}
// });

// DIV1.addEventListener('click', () => {
// 	if(getComputedStyle(DIV1).backgroundColor === 'rgb(255, 255, 255)' && BTN.className === 'start'){
// 		alert('들켰당');
// 		DIV1.style.backgroundColor = 'beige';
// 	} else if(getComputedStyle(DIV1).backgroundColor === 'rgb(245, 245, 220)' && BTN.className === 'start') {
// 		alert('다시 숨는다');
// 		DIV1.style.backgroundColor = 'white';
// 		let randX = Math.ceil(Math.random() * window.innerWidth);
// 		let randY = Math.ceil(Math.random() * window.innerHeight);
// 		DIV1.style.right = randX+'px';
// 		DIV1.style.bottom = randY+'px';
// 	}
// });




// --------------
// 강사
// --------------
const BTN = document.querySelector('#btn');
BTN.onclick = function(){
	alert('안녕하세요\n숨어있는 div를 찾아보세요');
}

const WRAP = document.querySelector('#wrap');

function popUp(){
	alert('두근두근');
}

WRAP.addEventListener('mouseenter',popUp);

const BOX = document.querySelector('#box');

BOX.addEventListener('click', my_toggle);

function my_toggle(){
	if( BOX.className === "on"){
		BOX.classList.toggle("on");
		alert("다시숨는다");
		WRAP.addEventListener("mouseenter",popUp);
	} else {
		BOX.classList.toggle("on");
		alert("들켰다!");
		WRAP.removeEventListener('mouseenter',popUp);
	} 
}

// <!-- mk 소스코드 -->
// <!-- <!DOCTYPE html>
// <html lang="ko">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         #div1 {
//             width: 200px;
//             height: 200px;
//             position: absolute;
//             right: 578px;
//             bottom: 334px;
//             background-color: white;
//         }
//     </style>
// </head>
// <body>
//     <button id="btn">눌러보시오</button>
//     <div id="div1"></div>
//     <script src="./40.js"></script>
// </body>
// </html> -->



// <!-- 강사 -->
// <!DOCTYPE html>
// <html lang="ko">
// <head>
// 	<meta charset="UTF-8">
// 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<link rel="stylesheet" href="./40.css">
// 	<title>Event Ex1</title>
// </head>
// <body>
// 	<button type="button" id="btn">버튼</button>
// 	<div id="wrap">
// 		<div id="box" class=""></div>
// 	</div>
// 	<script src="./40.js"></script>
// </body>
// </html>