// 조건문

// if(조건) {

// } else if(조건) {

// } else {

// }


// switch (검증할 값) {
//     case 비교값1:
//         //처리
//         break;
//     case 비교값2:
//         //처리
//         break;
//     default:
//         //처리
//         break;    
// }

let age = 30;

switch (age) {
    case 20:
        console.log("20대");
        break;
    case 30:
        console.log("30대");
        break;
    default:
        console.log("그외");
        break;    
}

// 반복문 while , do-while , for ,  foreach , for in , for of

// foreach : 배열만 사용가능 (array객체만)
// key 와 val로 
// `` : 백팁

let arr = [1, 2, 3, 4];

arr.forEach(function(val, key) { //foreach 고정
    console.log(`${key} : ${val}`); //처리내용
});


//for - in : 모든 객체를 루프 가능, key로 접근 가능

let obj = {
    key1: 'val1'
    ,key2: 'val2'
}


for( let key in obj) {
    // console.log(key);
    console.log(obj[key]);
}

//for - of : 모든 iterable 객체를 루프 가능, 값에 접근 가능
// string , array , map , set , typearray  : 순서가 정해져 있는 객체

for( let val of arr) {
    console.log(val);
}


// -------------------- 정렬 --------------------------
// -------------< sort 함수 활용한 정렬 > -------------

let sort_arr = [3, 5, 2, 7, 10];

sort_arr.sort((a,b) => a - b);
console.log(sort_arr + '\n');
// 1. 화살표 기법 - 숫자가 작은 순으로 정렬

sort_arr.sort((a,b) => b - a);
console.log(sort_arr + '\n');
// 1. 화살표 기법 - 숫자가 큰 순으로 정렬

sort_arr.sort(function(a, b) {
    return a - b;
});

console.log(sort_arr + '\n');
//2. 함수 선언 방식 - 숫자가 작은 순으로 정렬

sort_arr.sort(function(a, b) {
    return b - a;
});

console.log(sort_arr + '\n');
// 2. 함수 선언 방식 - 숫자가 큰 순으로 정렬

// ------------------- 버블 정렬 ----------------------
// let sort_arr = [3, 5, 2, 7, 10];
// let res = sort_arr.length;


// for (let i = 0; i < res-1; i++) {
//     for (let j = 0; j < res - 1 - i; j++) {
//         if(sort_arr[j] > sort_arr[j + 1]) {
//              let temp = sort_arr[j];
//              sort_arr[j] = sort_arr[j + 1];
//              sort_arr[j + 1] = temp;
//         }
//       }
//    }
// console.log(sort_arr + '\n');

// ---------------------------------------------------------

// let sort_arr = [3, 5, 2, 7, 10];
// let n = sort_arr.length;

// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//         if (sort_arr[j] > sort_arr[j + 1]) {
            
//             let temp = sort_arr[j];
//             sort_arr[j] = sort_arr[j + 1];
//             sort_arr[j + 1] = temp;
//         }
//     }
// }

// console.log(sort_arr);