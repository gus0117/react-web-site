# React + Vite

Este es un proyecto de ejemplo para demostrar el uso de React Router Dom para mostrar contenido de diferentes páginas.
También se incluye tailwind para mostrar en pasos simples el uso de la libreria en react.

# Tutorial 📓

Clonar el proyecto en alguna carpeta local

````bash
git clone https://github.com/gus0117/react-web-site.git
````
Luego, dentro de la carpeta que se clonó, instalar las dependecias necesarias

````bash
npm install
````
Una vez instaladas las depedendecias, se puede ejecutar el proyecto de forma local

````bash
npm run dev
````

## Librerias usadas y como se instalaron 🤓

- React router dom
Para instalar se utiliza npm

````bash
npm i react-router-dom
````
La notación utilizada en este ejemplo es la declarativa.
Se prevee utilizar la notación de objetos en otro ejemplo.
documentación: https://reactrouter.com/start/declarative/routing


- Tailwind CSS + Vite

Instalar tailwind

````bash
npm install tailwindcss @tailwindcss/vite
````

En el archivo vite.config.ts dentro del proyecto importar tailwindcc

````ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
````

En el CSS Principal importar tailwindcss

````css
@import "tailwindcss";
````

Ejecutar el proyecto

````bash
npm run dev
````

## Formato de los commits 📨

1. **Commits pequeños y enfocados**
- Cada commit debe representar una única unidad de cambio (Por ejemplo: "agrego validación al login").
2. **Mensajes claros y descriptivos**
- EL mensaje debe explicar qué se hizo y por qué, si no es evidente.
- Evitar mensajes genéricos como "cambios varios" o "update".


````bash
tipo: descripción breve [autor o autores]
````

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Cambios de formato, sin afectar el código
- `refactor`: refactorización sin cambiar comportamiento.
- `test`: Pruebas
- `chore`: tareas menores (scripts, configuración, etc.)

**Ejemplos:**

````bash
feat: se agrega validación de login [JuanPerez]
````

````bash
fix: se corrige bug en cálculo de totales [AnaGarcía, LuisMora]
````

````bash
docs: agregada documentación de clase DAO [Grupo2]
````


## Formato de las branch 🌳

````bash
tipo/descripcion-corta
````
- `feat/` – para nuevas funcionalidades (features)

- `fix/` – para corregir errores (bugs)

- `chore/` – para tareas menores (p. ej., actualizar dependencias)

- `docs/` – para cambios en documentación

- `refactor/` – para mejoras en el código sin cambiar funcionalidad

- `test/` – para agregar o modificar pruebas

- `style/` – para cambios de formato (indentación, espacios, etc.)

**Ejemplos:**

- `feat/agregar-login`

- `fix/error-al-iniciar-sesion`

- `docs/manual-usuario`

- `refactor/limpiar-funcion-calculo`

## Compilación y despliegue 🚀

Antes de compilar es necesario cambiar

````js
<BrowserRouter>
  <App />
</BrowserRouter>
`````

por 

````js
<HashRouter>
  <App />
</HashRouter>
`````

En el archivo `package.json` agregar

`"homepage":"127.0.0.1/<nombre-proyecto>/",`

y en `vite.config.js` agregar

`base: './',`

````js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
    base: './',
})
````

Ejecutar el comando

````bash
npm run build
````

Esto compilara el proyecto y lo guardará en la carpeta `dist`. Estos archivos son los que se deben agregar a la carpeta dentro del servidor ejemplo `/var/www`

