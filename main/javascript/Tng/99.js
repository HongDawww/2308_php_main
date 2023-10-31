
//   const BTN_API = document.querySelector('#btn-api'); // 버튼 객체 가져옴
//   BTN_API.addEventListener('click', my_fetch);
  
//   function my_fetch() {
//       const INPUT_URL = document.querySelector('#input-url');
  
//       fetch(INPUT_URL.value.trim())
//       .then( response => {
//           if( response.status >= 200 && response.status < 300) {
//               return response.json();
//           } else {
//               throw new Error('에러');
//           }
//       })
//       .then ( data => makeImg(data) )
//       .catch( error => console.log(error));
//   }
  
//   const DEL_BTN = document.getElementById("del-btn");
//   DEL_BTN.addEventListener('click', apiDelete);
  
//   function apiDelete() {
//       const DIV_IMG = document.querySelector('#div-img');
//       const DEL_API = DIV_IMG.querySelectorAll('.image-wrap'); 
//       DEL_API.forEach(DEL_API => {
//           DEL_API.remove();
//       });
//   }
  
//   function makeImg(data) {

//         data.forEach(item => {
//         const NEW_ID = document.createElement('p');
//         NEW_ID.style.display ="flex";
//         NEW_ID.style.textAlign = 'center';

//         const DIV_IMG = document.querySelector('#div-img');
//         DIV_IMG.style.display = 'grid';
//         DIV_IMG.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
//         // DIV_IMG.style.gap = '1px';
  

//         const IMAGE_WRAP = document.createElement('div'); 
//         IMAGE_WRAP.className = 'image-wrap'; 
  

//         const IMAGE_DIV = document.createElement('div');


//         const NEW_IMG = document.createElement('img');

//         NEW_IMG.setAttribute('src', item.download_url);
//         NEW_IMG.style.width = '200px';
//         NEW_IMG.style.height = '200px';

//         NEW_ID.innerText= `${item.id}`;

//         IMAGE_DIV.appendChild(NEW_ID);
//         IMAGE_DIV.appendChild(NEW_IMG);
        
//         IMAGE_WRAP.appendChild(IMAGE_DIV); 

//         DIV_IMG.appendChild(IMAGE_WRAP);
//       });
//   }
  
  // makeImg(data)


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

const DEL_BTN = document.getElementById("del-btn");
DEL_BTN.addEventListener('click', apiDelete);

function apiDelete() {
    const DIV_IMG = document.querySelector('#div-img');
    const DEL_API = DIV_IMG.querySelectorAll('main');
    DEL_API.forEach(DEL_API => {
        DEL_API.remove();
    });
}

function makeImg(data) {
    data.forEach(item => {
        const NEW_ID = document.createElement('div');
        // NEW_ID.style.display = "flex";
        // NEW_ID.style.textAlign = 'center';

        const DIV_IMG = document.querySelector('#div-img');
        
        DIV_IMG.style.display = 'grid';
        DIV_IMG.style.gridTemplateColumns = 'repeat(4, minmax(250px, 1fr))';
        DIV_IMG.style.gridGap = '10px';

        const IMAGE_WRAP = document.createElement('div');
        IMAGE_WRAP.className = 'main';
        IMAGE_WRAP.style.background = 'gray';

        const IMAGE_DIV = document.createElement('div');

        
        const NEW_IMG = document.createElement('img');
        NEW_IMG.setAttribute('src', item.download_url);
      
        // NEW_IMG.style.width = '200px';
        // NEW_IMG.style.height = '200px';

        NEW_ID.innerText = `${item.id}`;

        IMAGE_DIV.appendChild(NEW_ID);
        IMAGE_DIV.appendChild(NEW_IMG);

        IMAGE_WRAP.appendChild(IMAGE_DIV);

        DIV_IMG.appendChild(IMAGE_WRAP);
    });
}

// 'repeat(auto-fill, minmax(250px, 1fr))';