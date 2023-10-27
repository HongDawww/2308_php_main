//  타이머 함수 
// setTimeout(콜백함수, 시간(ms)) : 일정 시간이 흐른 후에 콜백함수를 실행

// setTimeout(() => console.log('시간'), 3000);

// 콘솔에 1초 뒤에 A, 2초 뒤에 B 3초 뒤에 C

// setTimeout(() => console.log('A'), 1000);
// setTimeout(() => console.log('B'), 2000);
// setTimeout(() => console.log('C'), 3000);

// function SEC (str,ms) {
//     setTimeout(() => console.log(str), ms);
// }

// SEC('A',1000);
// SEC('B',2000);
// SEC('C',3000);


// clearTimeout() :  timer를 삭제;
// let Second = setTimeout(() => console.log('C'), 5000);
// clearTimeout(Second);

// setInterval()
// let Interv = setInterval(() => console.log("TT"), 1000);
// clearInterval(Interv);

// 1. 화면을 로드하고 5초뒤에 등장 이라는 큰 글씨 표시

// function MSG() {
//     const showMSG = document.getElementById('h1');
//     showMSG.style.display = 'block';
//     showMSG.innerText = "두 둥 등 장";
// }

// setTimeout(MSG,5000);


// 2. 5초 뒤에 두둥등장 출력 5초 후 사라짐
// function MSG() {
//     const showMSG = document.getElementById('h1');
//     showMSG.style.display = 'block';
//     showMSG.innerText = "두 둥 등 장";

    
//     setTimeout(function () {
//         showMSG.style.display = 'none';
//     }, 5000);
// }

// MSG(); 
// setInterval(MSG, 5000); 


// 3. html 작성 없이 

setTimeout(addH1,5000)

function addH1 () {
    const H1 = document.createElement('h1');
    H1.innerHTML = '두둥등장!';
    document.body.appendChild(H1);
}