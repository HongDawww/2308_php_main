// 1. DOM 
// 웹 문서 제어 / 웹 문서 객체화 
// DOM API 를 통해서 HTML의 구조나 내용 또는 스타일 등을 동적으로 조작가능

// 2. 요소 선택
// 2-1. 고유한 ID로 요소를 선택
const TITLE = document.getElementById("title");
TITLE.style.color= 'blue';

const SUB = document.getElementById("subtitle");
//  사용법 > SUB.style.backgroundColor='beige';
SUB.style.backgroundColor='beige';

const H2 = document.getElementsByTagName('h2');
H2[0].style.color = 'red';
H2[0].style.color = 'skyblue';

// 클래스 요소 선택
const NONE = document.getElementsByClassName('none-li');

// css 선택자 
const S_ID = document.querySelector('#subtitle2');
// 상위 1개만 
const S_NONE = document.querySelector('.none-li');
// 전체를 가져옴
const S_NONE2 = document.querySelectorAll('.none-li');

// 3. 요소 조작
// textContent : 텍스트 데이터 전달 / 이전 태그들은 제거됨
TITLE.textContent = '<p>탕수육</p>';
TITLE.innerHTML = '<p>탕수육2</p>';


// setAttribute : 요소에 속성 추가 
const TEXT = document.getElementById('intxt');
TEXT.setAttribute('placeholder','123122');

// removeAttribute : 요소의 속성 제거
TEXT.removeAttribute('placeholder');

// 요소의 스타일링
TITLE.style.color = 'red'; // - 인라인

// classList : 클래스로 스타일 추가
TITLE.classList.add('class1');
TITLE.classList.remove('class1');
