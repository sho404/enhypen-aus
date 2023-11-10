const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("add-button").click();
    }
})
function addtask(){
    if(inputBox.value === '') {
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";      //x icon
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // will call save data whenever data is added
}

listContainer.addEventListener("click", function(e){ //(e)-- mouse hover
    if(e.target.tagName === "LI"){   //parentElement
        e.target.classList.toggle("checked"); 
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target .parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); //calls data whenever refresh