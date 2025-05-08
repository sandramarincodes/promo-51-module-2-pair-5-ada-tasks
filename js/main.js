const lista = document.querySelector(".js_list");

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];


for (const task of tasks) {
  // pintar la tarea en la lista
  //lista.innerHTML += `<li>${task.name}</li>`;//este solo duplica la lista sin tachar
  if (task.completed === true) {
    //lista.innerHTML += `<li>${task.name.classList.add("completed")}</li>`; //pendiente preguntar Nuria classList no se usa en strings
    lista.innerHTML += `<li class="completed">${task.name}</li>`;
  } else{
    lista.innerHTML += `<li>${task.name}</li>`;
  }
}

