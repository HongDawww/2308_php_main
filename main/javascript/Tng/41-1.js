
// 미국 기준 시간


//     const usaclock = document.querySelector("p#usa_clock");


// // const clock2 = document.getElementById("usa_clock");

// function usaClock() {
//     const date = new Date();
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");
//     const meridiem = hours >= 12 ? "PM" : "AM";
//     const HoursTwo = hours % 12 || 12; 

//     usaclock.innerText = `Current Time: ${HoursTwo} : ${minutes} : ${seconds} ${meridiem}`;
// }
// usaClock();
// const koreaTime = new Date();

// const usEastTimeDifference = 14 * 60 * 60 * 1000; 
// const usEastTime = new Date(koreaTime.getTime() - usEastTimeDifference);




document.addEventListener("DOMContentLoaded", function() {
    const usaclock = document.querySelector("p#usa_clock");

    function usaClock() {
        const krDate = new Date(); // 현재 대한민국 시간
        const usaDifference = 13 * 60 * 60 * 1000; // 미국 동부 표준시 (EST)와의 시간 차이 (14 시간)
        const usDate = new Date(krDate.getTime() - usaDifference);

        const hours = String(usDate.getHours()).padStart(2, "0");
        const minutes = String(usDate.getMinutes()).padStart(2, "0");
        const seconds = String(usDate.getSeconds()).padStart(2, "0");
        const meridiem = hours >= 12 ? "PM" : "AM";
        const HoursTwo = hours % 12 || 12;

        usaclock.innerText = `USA : ${HoursTwo} : ${minutes} : ${seconds} ${meridiem}`;
    }

    usaClock(); 
    
});

  
