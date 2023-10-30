// 두 수를 받아서 더한 값을 리턴해주는 함수 만들기

function mySum(a,b){
   return a + b; 
}

// 1.php를 출력하는 함수  3초뒤에 출력
// 504를 출력하는 함수 5초뒤 출력
// 풀스택을 출력하는 함수 바로 출력

function php() {
 setTimeout(() => console.log('php'), 3000);
}

function fiveZerofour() {
    setTimeout(() => console.log('504'), 5000);
   }
   
function fullStack() {
    console.log('풀스택');
   }
   
//1번함수는 3초뒤에 출력
// 2  5초뒤 출력
// 3  바로 출력

php();
fiveZerofour();
fullStack();


// 현재 시간 구하기

// const date = new Date();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// console.log(`현재시간 ${hours}시${minutes}분${seconds}초 `);

const date = new Date();
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');

console.log(`현재시간 ${hours}시${minutes}분${seconds}초`);


const To_Day = new Date();
let year = To_Day.getFullYear();
let month = String(To_Day.getMonth()).padStart(2,'0');
let day = String(To_Day.getDate()).padStart(2,'0');
let hour = String(To_Day.getHours()).padStart(2,'0');
let minute = To_Day.getMinutes();
let second = To_Day.getSeconds();

const FORMAT_TODAY = `${year} - ${month} - ${day} - ${hour} : ${minute} : ${second}`;



// 버튼 하나 만들기
// 버튼 클릭하면 네이버로 이동
const BTN =  document.createElement("button");
BTN.innerText ="네이버로 이동"
BTN.addEventListener("click",function() {
    window.location.href ="https://www.naver.com";   
});
document.body.appendChild(BTN);
