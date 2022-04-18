const inputBox = document.querySelector(".inputBox");
const addBtn = document.querySelector(".plus");
const toDoList = document.querySelector(".list");
//  console.dir(inputBox);
// console.log(addBtn);
// console.log(toDoList);


addBtn.addEventListener("click", function(){
    // console.log("wgweg");
    const list = document.createElement("li");
    list.innerText = inputBox.value;
    // console.log(inputBox.value)
    toDoList.append(list);
    inputBox.value="";

    list.addEventListener("click", function(){
        toDoList.removeChild(list);
    });
});