const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
    const i = event.target;
    const btn = i.parentNode;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem (TODOS_LS, JSON.stringify(toDos));
}

let idNum = 1;

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = idNum++;
    
    span.innerText = text;
    delBtn.innerHTML = "<i class='far fa-trash-alt'></i>";
    const faTrash = delBtn.querySelector("i");
    faTrash.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = newId;

    const toDoObj = {
        text : text,
        id : newId
    }

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
    
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null) {
        const pareseToDos = JSON.parse(loadedToDos);
        pareseToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        })
    }
}

function todoLength(event) {
    // console.log(toDoList.childElementCount);
    if(toDoList.childElementCount > 14) {
        // toDoInput.readOnly = true;
        if(window.event.keyCode==13){
            event.preventDefault();
        }
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    // todoLength();
    toDoInput.addEventListener("keydown", todoLength)
}

init();