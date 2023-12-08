// seleção de elementos
const todoForm=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo-input");
const todolist=document.querySelector("#todo-list");
const editform=document.querySelector("#edit-form");
const editInput=document.querySelector("#edit-input");
const cancelEditBtn=document.querySelector("#cancel-edit-btn");
// const adicionarTarefa=document.getElementById('adicionarTarefa')
let oldInputValue;
//funções
const saveTodo = (text) =>
{
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

        const deletBtn = document.createElement("button");
        deletBtn.classList.add("remove-todo");
        deletBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        todo.appendChild(deletBtn);

    
    todolist.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
}

const toggleForms = () => {
    editform.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todolist.classList.toggle("hide");
}

const updateTodo = (Text) => {

    const todos = document.querySelectorAll(".todo");


    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue) {

            todoTitle.innerText = Text;

        }

    })
}
//eventos
todoForm.addEventListener("submit",(e) =>{
    e.preventDefault(); //prevenir q envie o formulario
    const inputValue = todoInput.value;

    if(inputValue) {
        saveTodo(inputValue);
        //save todo
    }
});


document.addEventListener("click", (e) => {

    const targeEl = e.target; //serve para identificar o tipo do elemento
    const parentEl = targeEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }


    if(targeEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }

    if(targeEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }

    if(targeEl.classList.contains("edit-todo")) {
        toggleForms();

        editInputValue = todoTitle; 
        oldInputValue = todoTitle;
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
})

editform.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value;

    if(editInputValue) {
       updateTodo(editInputValue)
    };

    toggleForms();
})