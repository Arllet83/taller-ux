# Auditoría y Rediseño de UX/UI — Inscripción al Jardín Infantil

## 1. Auditoría de las 5 Heurísticas de Jakob Nielsen

| Heurística | Problema en la Pantalla Original | Solución Aplicada en el Rediseño |
| :--- | :--- | :--- |
| **1. Visibilidad del estado del sistema** | Los mensajes eran solo texto plano sin estilo. Al registrar o limpiar no había confirmación visual clara ni retroalimentación atractiva. | Se agregó una imagen de encabezado `img/banner.png` y un contenedor de alertas dinámico (`#mensajeAlerta`) que muestra mensajes interactivos con colores de estado. |
| **2. Prevención de errores** | Permitía presionar el botón "Inscribir" con campos incompletos o en blanco. | Se deshabilitó el botón de envío por defecto hasta validar que todos los campos requeridos estén llenos mediante el evento `input`. |
| **3. Control y libertad del usuario** | Al eliminar un registro de la lista de inscritos, la acción era destructiva, inmediata y no ofrecía opción de arrepentimiento. | Se implementó la funcionalidad de rescate con un botón de «Deshacer» en el mensaje de confirmación para restaurar el registro borrado. |
| **4. Consistencia y estándares** | La interfaz carecía de hoja de estilos CSS, mostrando la tipografía predeterminada (`Times New Roman`) y un diseño desordenado. | Se centralizaron los estilos mediante variables CSS en `:root` definiendo una paleta en tonos morado (`#5b21b6`) y celeste (`#0284c7`), con un único `<h1>`. |
| **5. Reconocimiento antes que recuerdo** | Los campos `<label>` no estaban asociados formalmente a los `<input>`, y los placeholders desaparecían al escribir. | Se vinculó de forma explícita cada `<label for="...">` con el `id` correspondiente del campo de entrada. |

---

## 2. Justificación por Leyes de UX (Fitts, Hick y Miller)

* **Ley de Fitts:** Todos los elementos interactivos (`button`, `input`, `select`) se configuraron con un área táctil mínima de **44px** de alto. El botón principal "Inscribir" posee un ancho expandido para facilitar el clic/toque rápido tanto en dispositivos móviles como en escritorio.
* **Ley de Hick:** Se simplificaron las opciones presentadas al usuario en un flujo lineal y claro (Nombre, Edad y Turno), reduciendo la carga cognitiva y el tiempo requerido para tomar decisiones.
* **Ley de Miller:** La información de los inscritos se agrupa en fichas visuales independientes (*chunks*) mediante listas formateadas que separan los datos relevantes en bloques de fácil lectura.

---

## 3. Accesibilidad (a11y) y Estándares

* **Etiquetas y Atributo Alt:** Cada campo contiene un `<label>` explícito vinculado y la imagen `banner.png` incluye una descripción textual completa en el atributo `alt`.
* **Foco teclado visible:** Se eliminó la mala práctica de `outline: none` y se implementó `:focus-visible` con un contorno remarcado de `3px solid #0284c7` para permitir navegación completa por teclado con `Tab` y `Enter`.
* **Contraste y Áreas Táctiles:** La combinación de texto oscuro (`#1e1b4b`) sobre fondo claro y botones en morado/celeste supera la relación de contraste exigida de **4.5:1** (cumpliendo norma WCAG AA/AAA), manteniendo botones de al menos 44px.

---

## 4. Evaluaciones de Lighthouse

### Antes del Rediseño
* **Puntaje de Accesibilidad:** 85 / 100
* **Captura:** ![Lighthouse Antes](./imagen/antes%20rediseño.JPG)
* **Problemas detectados:** Ausencia de relación explícita `<label for>`, falta de contraste adecuado y elementos interactivos pequeños.

### Después del Rediseño
* **Puntaje de Accesibilidad:** 100 / 100
* **Captura:** ![Lighthouse Después](./imagen/después%20rediseño.JPG)
* **Mejoras logradas:** 100% en contraste de texto y placeholders, etiquetas correctamente vinculadas, áreas táctiles accesibles y foco visual por teclado completamente funcional.