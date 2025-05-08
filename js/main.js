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
  if (task.completed === true) {
    lista.innerHTML += `<li class="completed"><input id=${task.id} type="checkbox">${task.name}</li>`;
  } else {
    lista.innerHTML += `<li><input id=${task.id} type="checkbox">${task.name}</li>`;
  }
}
function pintTasks() {
  lista.innerHTML = ""; // Limpiamos la lista para volver a pintarla

  for (const task of tasks) {
    if (task.completed === true) {
      lista.innerHTML += `<li class="completed"><input id=${task.id} type="checkbox">${task.name}</li>`;
    } else {
      lista.innerHTML += `<li><input id=${task.id} type="checkbox">${task.name}</li>`;
    }
  }
}
const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  if (!taskId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  const clickedTask = tasks.find((task) => task.id === taskId); // Busca la tarea que tenga el id `taskId` en el array `tasks`
  task.completed = !clickedTask.completed; // task.completed = // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
  pintTasks(); // Pinta de nuevo las tareas en el html
};

list.addEventListener("click", handleClickList);
