    let arr = [1,2,3,4,5];

    // push () 메소드 : 배열에 값을 추가
    arr.push(6);

    // splice() : 배열의 요소를 삭제 또는 교체 
    arr.splice(2,1);
    // 배열의 arr[2] 의 1개 삭제
    // 삭제 후 배열의 번호 재정렬

    arr.splice(3,1);

    arr.splice(2,0,10);
    // 배열의 arr[2]에 값이 10인 인덱스 추가

    arr.splice(4,1,10);
    // 교체 

    arr.splice(5,0,10,11,12,13);
    // 가변파라미터 : 모든 값을 추가

    arr.indexOf(4);
    //indexof() : 배열에서 특정 요소를 찾는데 사용

    // lastIndexOf() : 배열에서 특정 요소 중 가장 마지막에 위치한 요소를 찾는데 사용
    arr = [1,1,1,3,4,5,6,6,6,10];

    // pop() : 배열의 가장 마지막 요소 삭제
    let i_pop = arr.pop();
    // 사용법: i_pop  > 10 / i_pop = arr.pop() > 6 / i_pop > 6

    // sort() :  배열을 정렬
    arr = [5,4,6,7,3,2];
    let arr_sort = arr.sort(function (a,b) {
        return a - b;
    });
    //사용법 : 
    // arr_sort 
    // > arr -> 정렬되어 있음

    // arr.sort((a,b) => a-b); - 오름차순 정렬

    // arr.sort((a,b) => b - a); - 내림차순 정렬

    // 새로운 배열 생성
    let arr1 = arr;
    let arr2 = Array.from(arr);

    // includes() 배열의 특정 요소를 가지고 있는지 판별 return boolean
    arr = ['치킨','육회비빔밥','비엔나'];
    
    let bool_includes = arr.includes('짜장면');
    arr.join()
    arr.join('')
    arr.join('/')
    // join() : 배열의 모든 요소를 연결해서 하나의 문자열로 리턴
    // > 사용법 : arr.join() > '치킨,육회비빔밥,비엔나'
    // > arr.join('/') > '치킨 / 육회비빔밥 / 비엔나'

    // map() : 배열의 모든 요소에 대해서 주어진 함수의 결과를 모아서 새 배열을 리턴

    arr = [1,2,3,4,5,6,7,8,9];

    // 모든 요소의 값 * 2의 결과를 배열로 얻기
    let arr_map = arr.map( num => num * 2);

    // 3의 배수는 짝
    arr_map = arr.map (num => {
        if( num %3 === 0 ) {
            return '짝';
        } else {
            return num;
        }
    });

    // some() : 주어진 함수를 만족하는 요소가 있는지 판별해서 하나라도 있으면 true (return boolean
    arr = [1,2,3,4,5,6,7,8,9,10];
    let bool_some = arr.some( num => num === 9 );


    //every () : 하나라도 만족하지 않으면 false
    arr = [1,2,3,4,5,6,7,8,9,10];
    let bool_every = arr.every( num => num === 9);

    // filter() : 만족한 요소만 모아서 새로운 배열을 리턴
    arr = [1,2,3,4,5,6,7,8,9,10];
    let bool_filter = arr.filter( um => num %3 === 0);