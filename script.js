let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let count = 0;

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function updateCount(){
    document.getElementById("taskCount").innerText = "Total Tasks: " + taskList.children.length;
}

function addTask(){

    if(input.value === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span class="taskText">${input.value}</span>
        <i class="fa-solid fa-pen edit"></i>
        <i class="fa-solid fa-trash delete"></i>
    `;

    taskList.appendChild(li);
    input.value = "";

    updateCount();

    // mark task completed
    li.querySelector(".taskText").addEventListener("click", function(){
        li.classList.toggle("completed");
    });

    li.querySelector(".delete").addEventListener("click", function(e){
        e.stopPropagation();
        li.remove();
        updateCount();
    });

    li.querySelector(".edit").addEventListener("click", function(e){
        e.stopPropagation();

        let taskText = li.querySelector(".taskText");

        let newText = prompt("Edit your task:", taskText.innerText);

        if(newText !== null && newText !== ""){
            taskText.innerText = newText;
        }
    });

}