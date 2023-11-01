const BTN_API = document.querySelector('#btn-api');
BTN_API.addEventListener('click', my_fetch);

function my_fetch() {
    const INPUT_URL = document.querySelector('#input-url');
  
    fetch(INPUT_URL.value.trim())
    .then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            throw new Error('에러');
        }
    })
    .then(data => makeImg(data))
    .catch(error => console.log(error));
}
 function makeImg(data) {
    data.forEach(item => {
        // article 요소 생성
        const ARTICLE = document.createElement('article');
        const ARTICLE_ID = document.createElement('div');
        const ARTICLE_IMG = document.createElement('img');

        // article 속성 셋팅
        ARTICLE_ID.className = 'article-id';
        ARTICLE_ID.innerHTML = item.id;

        ARTICLE_IMG.className = 'article-img';
        ARTICLE_IMG.setAttribute('src',item.download_url);

        // article 요소 구조 셋팅
        ARTICLE.appendChild(ARTICLE_ID);
        ARTICLE.appendChild(ARTICLE_IMG);

        const SECTION_CONTENT =document.querySelector('.section-content');
        SECTION_CONTENT.appendChild(ARTICLE);

    });
 }

 // 지우기 버튼
 const BTN_REMOVE = document.querySelector('#btn-remove');
 BTN_REMOVE.addEventListener('click',my_remove);


 function my_remove () {
    const SECTION_CONTENT =document.querySelector('.section-content');
    SECTION_CONTENT.innerHTML = "";
 }