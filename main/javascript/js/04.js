// console.log("JS안녕JS");

// -------------------------- 변수 --------------------------
// var / let / conset
// var : 중복 선언 가능 , 재할당 가능 , 함수 레벨 스코프
var u_name = "홍길동";
console.log(u_name);
u_name = "갑순이"; // 재할당
console.log(u_name);

// let : 중복 선언 불가능 , 재할당 가능 , 블록 레벨 스코프
let uu_name ="홍길동";
console.log(uu_name);
uu_name = "감순이"; // 재할당 
console.log(uu_name);

// const : 중복 선언 불가능 , 재할당 불가능 , 블록 레벨 스코프
const AGE = 19;
console.log(AGE);
