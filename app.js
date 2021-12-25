//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerHTML =todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //completed button
    const completedButton =document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash btn
    const trashButton =document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append div to list
    todoList.appendChild(todoDiv);
    //clear to do input valu
    todoInput.value='';


}

function deleteCheck(event){
    const item = event.target;
    //delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    };
    //completed checked
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle;
    }
}
