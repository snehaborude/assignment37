const tasks =[];

function loadFromLocalStorage(){
    const allTasks = JSON.parse(localStorage.getItem('allTasks'));

    if(allTasks){
        tasks.unshift(...allTasks) 
    }
    loadTasks();
}
loadFromLocalStorage()


function loadTasks(){
      
    localStorage.setItem('allTasks',JSON.stringify(tasks));

    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = " ";

    for(const task of tasks){
        taskContainer.innerHTML += `
        <div class="to-do-item">
            ${task}
            <button class=btn-del type="button" onclick ="deleteTask('${task}')">Delete</button>
        </div>`
       
    }
}

function deleteTask(task){
    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex, 1);

    loadTasks();
}

function addTask(){
    const taskInput = document.getElementById('inputBox');
    const task = taskInput.value;
    if(!task){
        alert('Please enter a task!');
        return;
    }
    tasks.unshift(task);
    loadTasks()
    taskInput.value = "";
          
}