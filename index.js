let ul = document.getElementById("ul")
let inputTodo = document.getElementById("textTodo")
let btnsubmit = document.getElementById("submitbutton")

let tasks = [];
let editid = null;

btnsubmit.addEventListener("click", () => {
    const text = inputTodo.value.trim();
    if (text === "") return;
    if(editid !== null){
    tasks = tasks.map(task =>{
        if ( task.id === editid){
            task.title = text;
        }
        return task;
    })
    editid = null;
    btnsubmit.textContent = "Add";
    } else{   
        const task = {
            id : Date.now(),
            title : text,
            complete : false
        }
        tasks.push(task);
    }
    inputTodo.value = "";
    renderTasks();
})

function editTask(id){
    const task = tasks.find(task => task.id ===id);
    inputTodo.value = task.title;
    editid = id;
    btnsubmit.textContent = "Update";
}

function renderTasks(){
    ul.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
        <span style="${task.complete ? 'text-decoration: line-through;' : ''}">
            ${task.title}
        </span>
        <button onclick="editTask(${task.id})"> Edit </button>
        <button onclick="toggleTask(${task.id})"> Complete </button>
        <button onclick="deleteTask(${task.id})"> Delete </button>        
        `;

        ul.appendChild(li);
    });
}

function deleteTask(id){
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

//clock
const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

    const options = {weekday:"long",year:"numeric",month:"long",day:"numeric"};
    dateEl.innerText = now.toLocaleDateString(undefined,options)
}

setInterval(updateClock,1000);
updateClock();