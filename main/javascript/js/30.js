let now = new Date();
let sDate = new Date('2023-09-30 19:20:10');

let year = now.getFullYear();
console.log(now.getFullYear());
// let year = now.getFullYear();
// console.log(now.getFullYear());

// let month = now.getMonth() + 1;
// console.log()

// console.log(now.getFullYear() + '년');

// 

now = new Date();
sDate = new Date('2023-09-30 00:00:00');
now2 = new Date(year, month-1, date,0,0,0,0);

let diff = Math.abs(Math.floor((now2 - sDate) / 86400000 ));

// console.log(now2);

// let result = sDate - now;

// let day_res = Math.floor(result /(1000 * 60 * 60 * 24)) ;

// console.log('오늘로부터' + day_res);


// -25일로 출력x 25 일로 출력
// const now = new Date();
// const sDate = new Date('2023-09-30 19:20:10');

// let result = sDate - now;
// let day_res = Math.floor(Math.abs(result) / (1000 * 60 * 60 * 24));

// console.log('오늘로부터 ' + day_res);


// 월만 가져오는 메소드 + 1 을 해줘야함
// console.log(now.getMonth() + 1 + '월');

// console.log(now.getDate() + '일');

// console.log(now.getDay());

// console.log(now.getHours());

// console.log(now.getMinutes());

// console.log(now.getSeconds());

// console.log(now.getMilliseconds());



// let sDate = new Date('2023-09-30 19:20:10');
// 기준일 : 2023-09-30 19:20:10 
// 오늘로 부터 며칠 전인지 구하기
// // 현재 날짜 가져오기
// let now = new Date();

// 기준일 설정 (2023-09-30 19:20:10)



// let now = new Date();
// let sDate = new Date('2023-09-30T19:20:10');

// // 현재 날짜와 기준일 사이의 시간 차이 계산
// let timeDifference = sDate - now;

// // 밀리초(milliseconds)를 일(days)로 변환
// let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// console.log("오늘로부터 " + daysDifference + "일이 남았습니다.");