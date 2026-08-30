# PACHECO — sistema de diseño

**Estado:** fuente de verdad para implementación y auditoría visual  
**Versión:** 0.1  
**Alcance actual:** tipografía editorial, composición y comportamiento responsive de titulares

Este documento convierte la dirección visual de PACHECO en reglas verificables. Toda auditoría posterior debe contrastar primero la interfaz con estas reglas y registrar cualquier excepción intencional.

## 1. Principio tipográfico

Los titulares son el recurso visual principal, pero nunca pueden romper la composición. La escala debe responder al espacio realmente disponible, no solo al ancho de la ventana.

Un titular correcto debe:

- Mantenerse dentro de su columna.
- Conservar una silueta legible y deliberada.
- Tener saltos naturales o controlados sin crear líneas aisladas accidentalmente.
- Dejar visible el contenido complementario de la sección.
- Seguir siendo legible a 200% de zoom y en los breakpoints definidos.

## 2. Jerarquía de titulares

| Nivel | Uso | Clase actual | Escala | Ancho orientativo | Líneas en desktop |
| --- | --- | --- | --- | --- | --- |
| Hero | Mensaje principal de apertura | `.display-hero` | `clamp(3.1rem, 11vw, 9.5rem)` | hasta `12ch` | 2–4 |
| Sección amplia | Título sin recurso lateral dominante | `.display-section` | `clamp(2.9rem, 8vw, 7.5rem)` | 8–12 `ch` | 2–4 |
| Sección dividida | Título junto a imagen, lista o contenido | `.display-heading.display-heading--split` | `clamp(2.5rem, 4.2vw, 4.25rem)` | hasta `15ch` | 3–5 |
| Declaración | Frase conceptual excepcional | `.display-criterion` | `clamp(3rem, 7.8vw, 7.75rem)` | ancho de su columna | 2–4 |
| Cierre | Mensaje final de conversión | `.display-contact` | `clamp(2.25rem, 9.5vw, 8rem)` | ancho del contenedor | 2–4 |

La escala de “Declaración” es una excepción reservada para frases muy cortas. No debe reutilizarse en títulos descriptivos.

En composiciones divididas, una declaración mantiene un borde izquierdo común: no se desplazan líneas con `translate`, márgenes negativos ni sangrías porcentuales. El énfasis se consigue mediante escala o longitud de línea sin acercar el texto al recurso lateral.

## 3. Reglas para secciones divididas

Una sección está dividida cuando el título comparte la misma fila con una imagen, lista, CTA o bloque de texto.

Reglas obligatorias:

1. El contenedor del título dentro de CSS Grid debe usar `min-width: 0` —en Tailwind, `min-w-0`— para que su contenido no expanda la columna.
2. El título debe usar `.display-heading.display-heading--split`.
3. No usar `white-space: nowrap`, `md:whitespace-nowrap` ni equivalentes dentro del título.
4. No usar `<br>` o varios `<span class="block">` como primera estrategia de composición.
5. El título nunca puede entrar en la columna contigua, cubrir una imagen ni provocar scroll horizontal.
6. Si el título supera cinco líneas en desktop, reducir copy o escala antes de ampliar su columna.
7. Debe existir al menos un gutter completo entre el límite visual del texto y el recurso lateral.

Patrón de implementación:

```astro
<div class="grid md:grid-cols-12 md:gap-8">
	<div class="min-w-0 md:col-span-7">
		<h2 class="display-heading display-heading--split">
			Título de la sección
		</h2>
	</div>
	<div class="md:col-span-4 md:col-start-9">
		<!-- Recurso complementario -->
	</div>
</div>
```

## 4. Saltos de línea

El wrapping natural con `text-wrap: balance` es la opción predeterminada.

Los saltos manuales solo se permiten cuando:

- La frase tiene una estructura conceptual corta y estable.
- Cada línea cabe por sí sola en todos los breakpoints donde se fuerza.
- La lectura del DOM sigue siendo natural.
- Se verificó que no aparece una palabra viuda ni se invade otra columna.

Aunque exista un salto editorial, nunca se debe impedir el wrapping interno con `nowrap`. El navegador necesita poder crear una línea adicional ante zoom, cambios de fuente o anchos intermedios.

## 5. Escala, ritmo y longitud

- Peso: `800` para titulares editoriales principales.
- Tracking: entre `-0.055em` y `-0.075em`; nunca tan cerrado que una palabra pierda definición.
- Interlineado: entre `0.86` y `0.92` para titulares en mayúsculas.
- Ancho: expresar límites en `ch` cuando la silueta textual sea parte de la composición.
- Alineación: izquierda por defecto.
- Transformación: mayúsculas para titulares; no aplicar mayúsculas a párrafos largos.
- Evitar una línea con menos de 35% del ancho de la línea anterior, salvo énfasis editorial intencional.
- Evitar que una sola línea concentre más de 45% del total de caracteres del título.

## 6. Reglas responsive

### Móvil — desde 375 px

- Una columna.
- El titular puede ocupar entre 3 y 6 líneas.
- Ninguna palabra se corta ni genera scroll horizontal.
- No se fuerza `nowrap`.

### Tablet — desde 768 px

- Las composiciones divididas pueden activarse si el título conserva un gutter claro.
- El título debe permanecer dentro de su track de grid.
- Si el recurso lateral queda comprimido, la sección vuelve a una columna.

### Desktop — desde 1024 px

- Las secciones divididas usan 12 columnas y gutters de `2rem`.
- El título no puede superar cinco líneas salvo excepción documentada.
- La imagen o contenido lateral debe reconocerse completo sin quedar cubierto.

### Pantallas amplias — desde 1440 px

- El contenedor conserva un máximo de `80rem`.
- La tipografía deja de crecer al alcanzar el máximo de su `clamp()`.
- El espacio adicional se convierte en aire, no en líneas de texto indefinidamente largas.

## 7. Criterios de auditoría

Revisar cada titular en 375, 768, 1024 y 1440 px, además de zoom al 200%.

Marcar como desviación crítica si ocurre cualquiera de estos casos:

- Texto sobre una imagen, CTA o columna vecina.
- Scroll horizontal causado por el titular.
- Palabras cortadas o ilegibles.
- Contenido importante desplazado fuera del viewport por una escala excesiva.

Marcar como inconsistencia si:

- Se usa una escala distinta sin motivo documentado.
- Hay saltos manuales donde el wrapping natural resuelve la composición.
- El número de líneas queda fuera del rango del nivel tipográfico.
- El ritmo o tracking difiere del token correspondiente.

Una sección cumple cuando:

- El título se identifica primero sin ocultar el contenido secundario.
- Todas las líneas permanecen dentro de su columna.
- El recurso lateral conserva su jerarquía y espacio.
- El patrón funciona sin depender de una resolución exacta.

## 8. Excepciones

Toda excepción debe anotarse en este documento o junto al componente e incluir:

- Motivo editorial.
- Breakpoints afectados.
- Regla que se reemplaza.
- Evidencia de que no rompe responsive ni accesibilidad.

Sin esa justificación, se aplica el token correspondiente de esta guía.
