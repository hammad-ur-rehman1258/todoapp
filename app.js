let todoInput = document.getElementById("todoinput");
let todoList = document.getElementById("todolist");
let saveBtn = document.getElementById("savebtn");
let addBtn = document.getElementById("addtodo");
let delAllBtn = document.getElementById("delall");
delAllBtn.style.display="none"
saveBtn.style.display = "none";
function addTodo()
{
    let editedLi;
    let todoInputValue = todoInput.value
    
    createLi = document.createElement("li");
    createLi.innerHTML = todoInputValue;
  
    delAllBtn.style.display="inline-block";
    todoList.appendChild(createLi);
    let editBtn = document.createElement("button");
    editBtn.innerHTML="Edit";
    let delBtn = document.createElement("button");
    delBtn.innerHTML="Delete";
    createLi.appendChild(editBtn);
    createLi.appendChild(delBtn);

    delBtn.addEventListener("click",function(){
        createLi.remove();
    })


    editBtn.addEventListener("click",function()
    {
        
        editedLi=createLi;
        todoInput.value = editedLi.childNodes[0].nodeValue;
        addBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
    })

    saveBtn.addEventListener("click",function()
    {
        editedLi=createLi;
        editedLi.childNodes[0].nodeValue=todoInput.value;
        addBtn.style.display = "inline-block";
        saveBtn.style.display = "none";
    })
    todoInput.value = "";


}

function delAll()
{
    todoList.innerHTML="";
}