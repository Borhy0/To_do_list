document.addEventListener("DOMContentLoaded", loadTasks);
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (task === "") return;
    
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete" onclick="deleteTask(this)">X</button>`;
    ul.appendChild(li);
    
    saveTasks();
    input.value = "";
}
function deleteTask(btn) {
    btn.parentElement.remove();
    saveTasks();
}
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.textContent.replace("X", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let ul = document.getElementById("taskList");
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete" onclick="deleteTask(this)">X</button>`;
        ul.appendChild(li);
    });
}
