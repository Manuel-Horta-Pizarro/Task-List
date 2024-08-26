let tareas = [];

function agregarTarea() {
  const nuevaTarea = {
    id: Date.now(),
    descripcion: document.getElementById("nuevaTarea").value,
    completado: false,
  };
  tareas.push(nuevaTarea);
  renderizarTareas();
  document.getElementById("nuevaTarea").value = "";
}

function renderizarTareas() {
  const listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";

  const totalTareas = tareas.length;
  const tareasCompletadas = tareas.filter((tarea) => tarea.completado).length;

  const resumen = document.getElementById("resumen");
  resumen.textContent = `Total: ${totalTareas} - Realizadas: ${tareasCompletadas}`;

  tareas.forEach((tarea) => {
    const li = document.createElement("li");
    const idSpan = document.createElement("span");
    const tareaSpan = document.createElement("span");
    const checkSpan = document.createElement("span");
    const deleteSpan = document.createElement("span");

    idSpan.classList.add("id-span");
    idSpan.textContent = `ID: ${tarea.id}`;

    tareaSpan.classList.add("tarea-span");
    tareaSpan.textContent = tarea.descripcion;

    checkSpan.classList.add("check-icon");
    checkSpan.innerHTML = `<i class="fas fa-check-square" onclick="marcarCompletada(${tarea.id})"></i>`;

    deleteSpan.classList.add("delete-icon");
    deleteSpan.innerHTML = `<i class="fas fa-trash" onclick="eliminarTarea(${tarea.id})"></i>`;

    li.appendChild(idSpan);
    li.appendChild(tareaSpan);
    li.appendChild(checkSpan);
    li.appendChild(deleteSpan);

    if (tarea.completado) {
      li.style.textDecoration = "line-through";
    }

    listaTareas.appendChild(li);
  });
}

function marcarCompletada(id) {
  const tarea = tareas.find((t) => t.id === id);
  tarea.completado = !tarea.completado;
  renderizarTareas();
}

function eliminarTarea(id) {
  tareas = tareas.filter((tarea) => tarea.id !== id);
  renderizarTareas();
}

renderizarTareas();
