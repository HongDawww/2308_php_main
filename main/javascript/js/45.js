// promise 객체 : 비동기 프로그래밍 근간이 되는 기법 중 하나 , 콜백함수 대체 , 비동기 작업의 흐름을 쉽게 제어

// const PROMISE = new Promise( function (resolve, reject) {
//     let flg = true;
//     if(flg) {
//         return resolve("성공"); // : resolve : 호출
//     } else {
//         return reject("실패"); // : reject : 호출
//     }
// });
// PROMISE
// .then( data => console.log(data))
// .catch( err => console.log(err))
// .finally(() => console.log('finally 입니다'));

// const PRO2 =  function (ms) {
//     return new Promise ((resolve) => {
//         setTimeout(() => resolve(ms), ms)
// })
// }

// PRO2(1000)
// .then (data => console.log())


// function PRO02() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = "";
//         const error = false; 
//         // console.log('a')
//         if (!error) {
//           resolve(data); 
//         } else {
//           reject("실패 :"); 
//         }
//       }, 1000); 
//     });
//   }

//   PRO02()
//     .then((data) => {
//       console.log("성공 :");
//     })
//     .catch((error) => {
//       console.log("오류:", error);
//     })
//     .finally(() => console.log("종료"));

function PRO3(ms, str) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(str);
        resolve();
      }, ms);
    });
  }
  
  PRO3(1000, 'a')
    .then(() => PRO3(2000, 'b'))
    .then(() => PRO3(3000, 'c'));