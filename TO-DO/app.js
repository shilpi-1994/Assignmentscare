const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListerners();

function loadEventListerners(){
//add task event
    form.addEventListener('submit', addTask);
//remove task event
    tasklist.addEventListener('click', removeTask);
//clear task event
    clearBtn.addEventListener('click', clearTasks);
//filter task event
    filter.addEventListener('keyup',filterTasks);
}

//Add task

function addTask(e){
    if(taskInput === ''){
        alert('Add a task');
    }
    
//create li element
const li = document.createElement('li');
//Add Class
li.className = 'collection-item';
//create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
//Create new link element
const link = document.createElement('a');
//add class
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class = "fa fa-remove"></i>';
//append link to li
li.appendChild(link);
//append li to ul
tasklist.appendChild(li);

//Clear input
taskInput.value = '';


    e.preventDefault();
}

//Remove Task

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }


}

//clear tasks

function clearTasks(){
   // tasklist.innerHTML = '';

   while(tasklist.firstChild){
       tasklist.removeChild(tasklist.firstChild);
   }
}

//filter tasks

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    });
}
