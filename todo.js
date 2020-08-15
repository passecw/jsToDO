const todoForm = document.querySelector(".js-toDoForm"),
  toDoInput = todoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function paintToDo(tomato) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "　✅";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = tomato;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: tomato,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id); //트루인애들만 모아서 뉴 어레이
  });
  toDos = cleanToDos; //교체하는 작업
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//불러오기 담당 하위개체
function something(potato) {
  paintToDo(potato.text);
}

//불러오기 담당
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(something);
  }
}

//제출 담당, 보여주기 담당
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}
init();
