const btn = document.querySelector("#click_btn");
btn.onclick = function() {
    alert('안녕하세요 숨어있는 div를 찾아보세요');
}

const wrap = document.querySelector("#wrap");

function popUp(){
    alert('두근두근');
}

wrap.addEventListener('mouseenter',popUp);

const box = document.querySelector("#box");

box.addEventListener('click',toggle);

function toggle(){
    if(box.classList === "on"){
        box.classList.toggle("on");
        alert("다시숨는다");
        wrap.addEventListener("mouseenter",popUp);
    } else {
        box.classList.toggle("on");
        alert("들킴");
        wrap.releasePointerCapture("mouseenter",popUp);
    }
}