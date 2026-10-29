class AlumnoJardin {
    constructor(nombre, edad, turno) {
        this.nombre = nombre;
        this.edad = edad;
        this.turno = turno;
    }

    verificarEdad() {
        return this.edad >= 3 && this.edad <= 6;
    }

    obtenerCategoriaEdad() {
        return this.edad <= 4 ? "Nivel: Inicial 3-4 años" : "Nivel: Inicial 5-6 años";
    }

    obtenerFicha() {
        return `${this.nombre} - ${this.edad} años - Turno: ${this.turno} (${this.obtenerCategoriaEdad()})`;
    }
}

const formMatricula = document.querySelector("#formMatricula");
const inputNombre = document.querySelector("#inputNombre");
const inputEdad = document.querySelector("#inputEdad");
const selectTurno = document.querySelector("#selectTurno");
const btnEnviar = document.querySelector("#btnEnviar");
const btnClear = document.querySelector("#btnClear");
const listaInscritos = document.querySelector("#listaInscritos");
const mensajeAlerta = document.querySelector("#mensajeAlerta");

let ultimoAlumnoEliminado = null;

function mostrarAlerta(texto, tipo = "exito", opcDeshacer = false) {
    mensajeAlerta.className = `alerta alerta-${tipo}`;
    mensajeAlerta.textContent = texto;

    if (opcDeshacer) {
        const btnDeshacer = document.createElement("button");
        btnDeshacer.textContent = "Deshacer";
        btnDeshacer.style.marginLeft = "12px";
        btnDeshacer.style.minHeight = "32px";
        btnDeshacer.addEventListener("click", deshacerEliminacion);
        mensajeAlerta.appendChild(btnDeshacer);
    }
}

function validarFormulario() {
    const valido = inputNombre.value.trim() !== "" && inputEdad.value !== "" && selectTurno.value !== "";
    btnEnviar.disabled = !valido;
}

inputNombre.addEventListener("input", validarFormulario);
inputEdad.addEventListener("input", validarFormulario);
selectTurno.addEventListener("change", validarFormulario);

formMatricula.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputNombre.value.trim() === "" || inputEdad.value === "" || selectTurno.value === "") {
        mostrarAlerta("Por favor ingrese todos los datos correctamente.", "error");
        return;
    }

    const nuevoAlumno = new AlumnoJardin(inputNombre.value.trim(), Number(inputEdad.value), selectTurno.value);

    if (!nuevoAlumno.verificarEdad()) {
        mostrarAlerta("Edad fuera del rango permitido (3-6 años)", "error");
        return;
    }

    agregarAlumnoALista(nuevoAlumno);
    mostrarAlerta("¡Alumno registrado con éxito!", "exito");

    formMatricula.reset();
    btnEnviar.disabled = true;
});

function agregarAlumnoALista(alumno) {
    const li = document.createElement("li");
    const spanInfo = document.createElement("span");
    spanInfo.textContent = alumno.obtenerFicha();

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn-eliminar";
    btnEliminar.addEventListener("click", () => {
        ultimoAlumnoEliminado = { alumno, elemento: li };
        li.remove();
        mostrarAlerta("Alumno eliminado. ", "advertencia", true);
    });

    li.appendChild(spanInfo);
    li.appendChild(btnEliminar);
    listaInscritos.appendChild(li);
}

function deshacerEliminacion() {
    if (ultimoAlumnoEliminado) {
        agregarAlumnoALista(ultimoAlumnoEliminado.alumno);
        ultimoAlumnoEliminado = null;
        mostrarAlerta("Acción deshecha: Alumno restaurado.", "exito");
    }
}

btnClear.addEventListener("click", () => {
    formMatricula.reset();
    btnEnviar.disabled = true;
    mostrarAlerta("Formulario limpiado", "advertencia");
});

inputEdad.addEventListener("blur", () => {
    if (inputEdad.value && (Number(inputEdad.value) < 3 || Number(inputEdad.value) > 6)) {
        mostrarAlerta("Ingresar edad válida (3 a 6 años)", "advertencia");
    }
});