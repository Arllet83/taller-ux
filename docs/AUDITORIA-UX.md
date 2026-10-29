# Auditoría y Rediseño de UX/UI — Inscripción al Jardín Infantil

## 1. Auditoría de las 5 Heurísticas de Jakob Nielsen

| Heurística | Problema en la Pantalla Original | Solución Aplicada en el Rediseño |
| :--- | :--- | :--- |
| **1. Visibilidad del estado del sistema** | Al inscribir o limpiar, los mensajes eran solo texto plano sin formatear y difíciles de distinguir. | Se agregó un contenedor `#mensajeAlerta` con estilos visuales dinámicos de éxito/error y estado accesible. |
| **2. Prevención de errores** | Permitía intentar enviar el formulario con campos incompletos o vacíos. | Se deshabilitó el botón "Inscribir" hasta que todos los campos requeridos estén llenos (`input` listener). |
| **3. Control y libertad del usuario** | Al borrar un alumno no se pedía confirmación ni se daba opción de deshacer la acción. | Se añadió un botón "Eliminar" por alumno con una notificación que incluye la opción "Deshacer". |
| **4. Consistencia y estándares** | La interfaz carecía de CSS, usando tipografía predeterminada (`Times New Roman`) y sin estructura. | Se creó `estilos.css` usando variables en `:root`, espaciado consistente y un único `<h1>`. |
| **5. Reconocimiento antes que recuerdo** | Los `<label>` no estaban enlazados explícitamente a los `<input>` mediante el atributo `for`/`id`. | Se vincularon explícitamente todos los `<label for="...">` con sus respectivos campos de entrada. |

---

## 2. Justificación por Leyes de UX (Fitts, Hick y Miller)

* **Ley de Fitts:** Los botones y campos tienen una altura mínima de **44px** y áreas de clic amplias para facilitar la interacción rápida.
* **Ley de Hick:** Se organizaron las opciones en campos claramente diferenciados (Nombre, Edad, Turno) para minimizar el tiempo de decisión.
* **Ley de Miller:** La lista de alumnos se presenta agrupada en fichas visuales independientes (*chunks*) para facilitar la lectura.

---

## 3. Accesibilidad (a11y) y Estándares

* **Etiquetas explícitas:** Cada campo posee su `<label for="...">` vinculado al `id` del input.
* **Foco visible:** Configurado con `:focus-visible` (`outline: 3px solid #005A9C`) para navegación 100% por teclado (`Tab` y `Enter`).
* **Contraste y Botones:** Paleta en `:root` con contraste mínimo de 4.5:1 y botones táctiles de 44px de alto.

---

## 4. Evaluaciones de Lighthouse

### Antes del Rediseño
* **Puntaje de Accesibilidad:** 85 / 100
* **Captura:** `![Lighthouse Antes](img/lighthouse-antes.png)`

### Después del Rediseño
* **Puntaje de Accesibilidad:** 98 / 100
* **Captura:** `![Lighthouse Después](img/lighthouse-despues.png)`