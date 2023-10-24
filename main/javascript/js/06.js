// 기본 데이터 타입

// 숫자( number ) , 문자열 ( string ), boolean , null , undifined , symbol

let num = 1;

let str = "문자열";

let boo = true;

let nu = null; // object (객체) 로 인식

let und;


// 고유한 id를 가진 데이터 타입
// let symbol_1 = symbol("symbol");
// let symbol_2 = symbol("symbol");

// 객체 타입
// Array , Date , Math , Object , 그 외에 기본 데이터 타입을 제외한 모든 것

let obj = {
    food1: "탕수육"
    ,food2: "짜장면"
    ,food3: "라조기"
    ,eat: function() {
        console.log("먹자");
    }
    ,list: {
        list1: "리스트1"
        ,list2: "리스트2"
    }
};


let arr = [1,2,3];

// 자기 자신의 회원 정보를 객체로 만들기

// let info = {
//     name1: ""
//     ,birth_day: ""
//     ,gender: ""
// }


let hong = {
    first_name: "다윗"
    ,age: 31
    ,address: "daegu"
    ,id: function(){
        console.log("d939305@naver.com");
    }
    ,birth_day: {
        birth_day1: "930510"
        ,birth_day2: "1993"
    }
};