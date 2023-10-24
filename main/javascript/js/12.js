// 함수 / 함수 생성

//------------- 1. 함수 선언식
    function fnc_sum(a, b) {
        return a + b;
    }
// > 함수 호출 :  fnc_sum(3,4)
// > 호이스팅 처리 가능

//------------- 2. 함수 표현식
// - 익명 함수 : 이름이 없는 함수 
// function()
    let fnc1 = function(a,b) {
        return a + b;
    }
// > 함수 호출 : fnc1(3,2);
// > 호이스팅 처리 X


// - 콜백 함수 : 다시 호출 되는 함수 

    function fnc_callBack(call) {
        call();
    }

    fnc_callBack(function() {
        console.log("익명함수");
    });



// ------------ function 생성자 함수 -----------
    let tt = Function('a', 'b', 'return a + b;' );
// > 사용법 : tt(1,3) 
// --------------------------------------------

// ------------ 화살표 함수 --------------------
// 1. 파라미터가 없는 경우
    let f2 = () => "f2";
    //   ↑ ↑ ↑ 화살표 함수 ↑ ↑ ↑

    let f1 = function() {
        return "f1";
    }
// 2. 파라미터가 1개인 경우
    let f3 = function(a) {
        return a + '입니다';
    }

    let f4 = a => a + '임';
    //   ↑ ↑ ↑ 화살표 함수 ↑ ↑ ↑
    // 사용법 : f4(3)

// 3. 파라미터가 2개 이상인 경우
    let f5 = function(a , b){
        return a + b;
    }

    let f6 = (a,b) => a + b;
    //   ↑ ↑ ↑ 화살표 함수 ↑ ↑ ↑


    // 함수 처리가 많은 화살표 함수 
    let f7 = function (a,b) {
        if(a > b) {
            return 'a';
        } else {
            return 'b';
        }
    }

    let f8 = (a,b) => {
        if(a > b) {
            return a + '가 큼';
        } else {
            return b + '가 큼';
        }
    }















 

// --------------------배열 객체의 sort의 경우 예시
// sort_arr.sort (function (a,b) {
//     return a - b
// });

// function sort(call) {
//     let num = call();
//     if( num < 0) {
//         //처리
//     } else {

//     }
// }
// -------------------------------------------------


// function fnc_callBack(callback) {
//     console.log("fnc_callBack 함수 실행");
//     callback(); // 전달된 콜백 함수 호출
//   }
  
//   function myCallback() {
//     console.log("명명된 콜백 함수");
//   }
  
//   fnc_callBack(myCallback); // 명명된 콜백 함수 호출
  
//   fnc_callBack(function() {
//     console.log("익명 함수 콜백");
//   }); // 익명 함수 콜백 호출