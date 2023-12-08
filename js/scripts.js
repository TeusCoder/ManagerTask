// seleção de elementos
const todoForm=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo-input");
const todolist=document.querySelector("#todo-list");
const editform=document.querySelector("#edit-form");
const editInput=document.querySelector("#edit-input");
const cancelEditBtn=document.querySelector("#cancel-edit-btn");
// const adicionarTarefa=document.getElementById('adicionarTarefa')
//funções


//eventos
todoForm.addEventListener("submit",(e) =>{
    e.preventDefault(); //prevenir q envie o formulario
    const inputValue = todoInput.value
});