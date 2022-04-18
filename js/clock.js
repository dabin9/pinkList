let clockTarget = document.querySelector(".clock");
let dateTarget = document.querySelector(".data");
// console.log(clockTarget)

function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let month = date.getMonth();
    let clockDate = date.getDate();
    let day = date.getDay();
    let week = [`일`,`월`,`화`,`수`,`목`,`금`,`토`];
  

    clockTarget.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds }` : seconds }`;
    dateTarget.innerText = `${month+1}월 ${clockDate}일 ${week[day]}요일`;
} 


function init(){
    clock();
    setInterval(clock, 1000);
}

init();