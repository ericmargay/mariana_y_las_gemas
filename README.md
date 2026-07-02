# La aventura de las gemas

Felicitación interactiva de cumpleaños hecha con Three.js, pensada para una sobrina de 9 años.

La experiencia tiene:

- Inicio con botón de estrella para activar el soundtrack.
- Mensaje inicial con una estrellita que emite luz en fade.
- Escenario 3D original de fantasía clásica: bosque, ruinas, camino, nubes, animalitos, flores, hongos, lago y gemas escondidas.
- 9 gemas con colores aleatorios, luz pulsante y acertijos distintos.
- Mensajes desbloqueables de cumpleaños, vida, curiosidad, valentía y amor.
- Mensaje final sorpresa al resolver las 9 gemas.
- Controles por teclado, botones móviles y exploración táctil arrastrando el dedo sobre la pantalla.

## Soundtrack

Coloca tu archivo de música en la raíz del proyecto con este nombre:

```text
soundtrack.mp3
```

La música empieza cuando se toca el botón de estrella inicial. Esto es necesario porque los navegadores suelen bloquear audio automático hasta que la persona interactúa con la página.

Si quieres usar otro nombre de archivo, edita `CONFIG.soundtrackFile` dentro de `main.js`.

## Cómo probar localmente

Abre la carpeta con VS Code y usa Live Server, o ejecuta:

```bash
python -m http.server 8080
```

Luego abre:

```text
http://localhost:8080
```

## Cómo subir a GitHub Pages

1. Crea un repositorio, por ejemplo `cumple-9-gemas`.
2. Sube estos archivos a la raíz del repositorio:
   - `index.html`
   - `style.css`
   - `main.js`
   - `.nojekyll`
   - `soundtrack.mp3`, si ya tienes la música
3. En GitHub: Settings → Pages.
4. Source: Deploy from a branch.
5. Branch: `main` / `/root`.
6. Guarda y espera a que GitHub genere el link.

## Personalización rápida

Edita el bloque `CONFIG` dentro de `main.js`:

```js
const CONFIG = {
  sobrina: "mi pequeña aventurera",
  firma: "Con todo mi cariño, tu tío",
  soundtrackFile: "soundtrack.mp3",
  tituloFinal: "Feliz cumpleaños número 9",
  mensajeFinal: [...]
};
```

También puedes editar cada gema dentro del arreglo `GEMAS` para cambiar posiciones, acertijos y mensajes.

## Nota creativa

La escena está inspirada en aventuras clásicas de fantasía y exploración en bosque. No usa assets, música, nombres, personajes ni elementos oficiales de ninguna franquicia.
