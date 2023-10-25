// 1. 원본 유지 / 오름차순 정렬
const ARR1 = [6,3,5,8,92,3,7,5,100,80,40];
let ARR1_sort = Array.from(ARR1).sort((a,b) => a - b);
console.log(ARR1_sort);


const ARR_SORT = [6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40];
console.log("원본:", ARR_SORT);
const sort_array = ARR_SORT.sort((a, b) => a - b);
console.log("오름차순 정렬:", sort_array);


// 2. 짝수와 홀수를 분리해서 각각 새로운 배열 

// 2 - 1. 함수 만들기
const ARR0 = [5,7,3,4,5,1,2];

let ARR0_2 = ARR0.filter( num => num % 2 === 0); // 짝수
let ARR0_3 = ARR0.filter( num => num % 2 === 1); // 홀수

function test(arr, flg) {
    if(flg === 0){
        return arr.filter(num => num % 2 === 0);
    } else {
        return arr.filter(num => num % 2 === 1);
    }
}

console.log('1짝수',test(ARR0, 0)); // 짝수 출력
console.log('2홀수',test(ARR0, 1)); // 홀수 출력


// 2 - 2
// const ARR2 = [5,7,3,4,5,1,2];
// const arr_2 = ARR2.filter(num => num %2 === 0);
// const arr_3 = ARR2.filter(num => num %2 !== 0);

// console.log("짝수 :", arr_2);
// console.log("홀수 :", arr_3);


// // - 다 하면 함수
// function resodd(num) {
//     const answer = num % 2 === 0 ? "짝수" : "홀수";
//     return answer;
// }

// const numbers = [5,7,3,4,5,1,2];


// const results = numbers.map(resodd);

// console.log(results);




// 3. 구분 문자를 '.' 에서  ' '으로 변경 - 새로운 배열에 리턴

// 1. replace 
const STR1 = 'php504.meer.kat';
const result = STR1.replace(/\./g, ' ');
console.log(result);

// 2 . split - join
// const str_1 = STR1.split('.');
// const str_2 = str_1.join(' ');
// console.log(str_2);


