// Constantes elementos con los que vamos a trabajar
const lista = document.querySelector(".js_list");
const botonFiltrar = document.querySelector(".js_right-block-btn");
const inputFiltrar = document.querySelector(".js_input-right");
const parrafoTareas = document.querySelector(".js_parrafo")

//Crea variables para almacenar la información del usuario de github y la url del endpoint:
const GITHUB_USER = "montsemoran";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];

fetch(SERVER_URL)
  .then(response => response.json())
  .then(data => {
    tasks = data.results;
    console.log (data);

    pintTasks(tasks);

  });



/*let tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];*/

for (const task of tasks) {
  if (task.completed === true) {
    lista.innerHTML += `<li class="completed"><input id=${task.id} type="checkbox">${task.name}</li>`;
  } else {
    lista.innerHTML += `<li><input id=${task.id} type="checkbox">${task.name}</li>`;
  }
}


// Funciones
function pintTasks(tasks) {

  let tareasTotales = tasks.length
  let tareasCompletadas = tasks.filter(task => task.completed).length;
  let tareasPorRealizar = tareasTotales - tareasCompletadas

  lista.innerHTML = ""; // Limpiamos la lista para volver a pintarla
  parrafoTareas.innerHTML = `Tienes ${tareasTotales} tareas. ${tareasCompletadas} completadas y ${tareasPorRealizar} por realizar`

  for (const task of tasks) {
    if (task.completed === true) {
      lista.innerHTML += `<li class="completed"><input id=${task.id} type="checkbox" checked>${task.name}</li>`;
    } else {
      lista.innerHTML += `<li><input id=${task.id} type="checkbox">${task.name}</li>`;
    }
  }
}

const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  if (!taskId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función

  const clickedTask = tasks.find((task) => task.id === taskId); // Busca la tarea que tenga el id `taskId` en el array `tasks`
  clickedTask.completed = !clickedTask.completed; // pendiente Nuria //        // task.completed OR clickedTask?  Es clicked task// Una vez que has obtenido la tarea, actualiza la propiedad `completed`
  pintTasks(tasks); // Pinta de nuevo las tareas en el html
};

const handleClickBotonFiltrar = (event) => {
  // Crea la función manejadora del evento anterior.
  const filtrar = inputFiltrar.value.toLowerCase(); // Obtén el valor del input de filtrar.
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(filtrar)
  ); // El task del inicio es como el bucle que va uno por uno.  Filtra las tareas que coinciden con el valor introducido por el usuario.
  pintTasks(filteredTasks); //Vuelve a pintar las tareas, esta vez utilizando el listado filtrado.
};

//Eventos

lista.addEventListener("click", handleClickList);

botonFiltrar.addEventListener("click", handleClickBotonFiltrar); // Crea un evento asociado al botón de buscar de la interfaz gráfica.

