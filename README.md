# La Aventura de los 9 Faroles

Mini felicitación interactiva en Three.js, pensada para una sobrina de 9 años.

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

1. Crea un repositorio, por ejemplo `cumple-9-aventura`.
2. Sube estos archivos a la raíz del repositorio:
   - `index.html`
   - `style.css`
   - `main.js`
   - `.nojekyll`
3. En GitHub: Settings → Pages.
4. Source: Deploy from a branch.
5. Branch: `main` / `/root`.
6. Guarda y espera a que GitHub genere el link.

## Personalización rápida

Edita el bloque `CONFIG` dentro de `main.js`:

```js
const CONFIG = {
  sobrina: "mi pequeña aventurera",
  firma: "Con todo mi cariño",
  tituloFinal: "Feliz cumpleaños número 9",
  mensajeFinal: [...]
};
```

También puedes editar cada farol dentro del arreglo `FAROLES` para cambiar nombres, posiciones, colores y fragmentos del mensaje.

## Nota creativa

La escena está inspirada en aventuras clásicas de fantasía: bosque, ruinas, faroles, camino y exploración. No usa assets, música, nombres ni personajes oficiales de ninguna franquicia.
