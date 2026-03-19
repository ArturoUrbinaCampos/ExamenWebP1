// 1. Atrapamos los elementos
const input = document.getElementById('inputTarea');
const botonAgregar = document.getElementById('btnAgregar');
const listaPendientes = document.getElementById('listaPendientes');
const listaCompletadas = document.getElementById('listaCompletadas');
const btnLimpiar = document.getElementById('btnLimpiar');

// 2. Función para añadir tareas
botonAgregar.addEventListener('click', function() {
    const texto = input.value;

    if (texto === "") {
        alert("Escribe algo primero, Arturo.");
        return;
    }

    // A. Crear el renglón de la tarea (li)
    const nuevaTarea = document.createElement('li');
    
    // B. Crear el contenedor para los botones
    const divAcciones = document.createElement('div');
    divAcciones.classList.add('acciones');

    // C. Crear el botón de Completar (✓)
    const botonCompletar = document.createElement('button');
    botonCompletar.innerText = "✓";
    botonCompletar.classList.add('btn-completar');

    // D. Crear el botón de Borrar (X)
    const botonBorrar = document.createElement('button');
    botonBorrar.innerText = "X";
    botonBorrar.classList.add('btn-borrar');

    // --- LÓGICA DE LOS BOTONES DE LA TAREA ---

    // Evento para completar: Mueve la tarea a la otra lista
    botonCompletar.addEventListener('click', function() {
        // Le agregamos el estilo gris y rayado
        nuevaTarea.classList.add('tarea-completa');
        // Lo movemos a la lista de completadas
        listaCompletadas.appendChild(nuevaTarea);
        // Quitamos el botón de la palomita verde porque ya está completada
        botonCompletar.remove();
    });

    // Evento para borrar la tarea individual
    botonBorrar.addEventListener('click', function() {
        nuevaTarea.remove();
    });

    // --- ENSAMBLAR TODO ---
    
    // Metemos el texto en un span
    const textoSpan = document.createElement('span');
    textoSpan.innerText = texto;

    // Metemos los botones al div de acciones
    divAcciones.appendChild(botonCompletar);
    divAcciones.appendChild(botonBorrar);

    // Metemos el texto y las acciones al li
    nuevaTarea.appendChild(textoSpan);
    nuevaTarea.appendChild(divAcciones);

    // Mandamos la tarea a la lista de PENDIENTES
    listaPendientes.appendChild(nuevaTarea);

    // Limpiamos el input
    input.value = "";
});

// 3. Función para limpiar todas las completadas de un jalón
btnLimpiar.addEventListener('click', function() {
    // Al poner el innerHTML vacío, borramos todo el contenido de esa lista
    listaCompletadas.innerHTML = "";
});