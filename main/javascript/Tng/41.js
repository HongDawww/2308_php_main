// 1. 버튼 클릭시 '두근 두근 '메세지 출력 <하>

const DKDK = document.getElementById("click_btn");

DKDK.addEventListener('click',() => {
    alert('두근두근');
});


// 2. 특정 영역에 마우스 포인트가 진입하면 아래 내용의 알러트가 나옴 / 들킨 상태에서는 안 나옴


// 3-2 . 클릭시 들켰다
const WIN = document.getElementById("icon");

WIN.addEventListener('click', () => {
        alert('들켰따');
        WIN.style.backgroundColor = "blue";  
});

WIN.addEventListener('mouserenter', () => {
    WIN.style.backgroundColor = "";
});

const WIN2 = document.getElementById("bk");
WIN.addEventListener('click',() => {
    alert('다시숨는다');
    WIN.style.backgroundColor ="red";
    WIN.style.float="right";
  
});

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

