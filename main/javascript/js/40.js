// 인라인 이벤트 
// <button onClick="alert('경고');">경고</button>
// <button onClick="location.href='https://www.naver.com'">네이버 버튼</button>
// <br>
// <button id="btn_google">구글</button>

// 프로퍼티 리스너
const BTNGOOGLE = document.getElementById("btn_google");
BTNGOOGLE.onclick = function() {
    location.href = 'https://google.com';
}

// 팝업창 열기
function popOpen() {
    winOpen = open('https://www.daum.net','','width=500,height=500');
}
const BTNDAUM = document.getElementById('btn_daum');
let winOpen;
BTNDAUM.addEventListener('click',popOpen);
//     winOpen = open('https://www.daum.net','','width=500 height=500');
// });
//현재 창으로 열기
// open('https://www.daum.net','_self','width=500 height=500');


// 팝업창닫기

// const BTNCLS = document.getElementById('btn_close');
// BTNCLS.addEventListener('click',() => winOpen.close());

// 이벤트 삭제

// BTNDAUM.removeEventListener('click',popOpen);

// BTNDAUM.removeEventListener('click', () => {
//     winOpen = open('https://www.daum.net','','width=500,height=500');
// });

// BTNCLS.removeEventListener('click', () => {
//     winOpen.close();
// });
// BTNGOOGLE.onclick = null;

// 2. 팝업창 닫기 이벤트 삭제

// function popClose() {
//     winClose = document.getElementById('btn_close');
// }
// const BTNCLOSE = document.getElementById('btn_close');
// let winClose;
// BTNCLOSE.addEventListener('click',popClose);
// BTNCLOSE.removeEventListener('click',popClose);


const BTNSUB = document.querySelector('form');
BTNSUB.addEventListener('submit',event => {
    event.preventDefault()
});



// 키보드 이벤트
// const INTXT = document.getElementById('intxt');
// INTXT.addEventListener('keyup', (e) => console.log(e));


const DIV1 = document.getElementById("div1");

DIV1.addEventListener('mouseenter',() => {
     alert('접속완');
    DIV1.style.backgroundColor="blue";
});
DIV1.addEventListener("mouseleave", () => {
    DIV1.style.backgroundColor = "";
    DIV1.innerHTML='';
});



// DIV1.addEventListener('mouseenter', function(event) {
//     alert('접속');
//     DIV1.style.backgroundColor="blue";
// });
//   // 배경색을 원래대로 돌리기
// DIV1.addEventListener("mouseleave", function(event) {
//      DIV1.style.backgroundColor = "";
// });




