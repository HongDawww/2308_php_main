const BTN_API = document.querySelector('#btn-api');
BTN_API.addEventListener('click', my_fetch);

function my_fetch() {
    const INPUT_URL = document.querySelector('#nav-input');
    const url = INPUT_URL.value;

    fetch(url)
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

const DEL_BTN = document.getElementById("btn-clear");
DEL_BTN.addEventListener('click', apiDelete);

function apiDelete() {
    const DIV_IMG = document.querySelector('#div-img');
    while (DIV_IMG.firstChild) {
        DIV_IMG.firstChild.remove();
    }
}

function makeImg(data) {
    const DIV_IMG = document.querySelector('#div-img');

    data.forEach(item => {
        const IMAGE_WRAP = document.createElement('div');
        IMAGE_WRAP.className = 'image-div';

        const NEW_IMG = document.createElement('img');
        NEW_IMG.className = 'image';
        NEW_IMG.src = item.download_url;

        const NEW_ID = document.createElement('p');
        NEW_ID.className = 'image-id';
        NEW_ID.innerText = `ID: ${item.id}`;

        IMAGE_WRAP.appendChild(NEW_ID); 
        IMAGE_WRAP.appendChild(NEW_IMG); 

        DIV_IMG.appendChild(IMAGE_WRAP);
    });
}