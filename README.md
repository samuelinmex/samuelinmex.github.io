# Samuel Mancilla · Portafolio profesional

Sitio estático bilingüe, listo para GitHub Pages. HTML, CSS y JavaScript; sin compilación, dependencias de aplicación ni servicios externos para cargar fuentes o imágenes.

## Abrir el sitio

Abre `index.html` en un navegador moderno. Para probarlo mediante un servidor local, desde esta carpeta ejecuta:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000`. El sitio también funciona dentro de una subcarpeta de GitHub Pages: todas las referencias locales son relativas.

## Publicar en GitHub Pages

1. Crea un repositorio en tu cuenta de GitHub, por ejemplo `samuel-portfolio`.
2. Sube **el contenido de esta carpeta**: `index.html`, `styles.css`, `script.js`, `.nojekyll`, `assets` y los documentos de referencia. `index.html` debe quedar en la raíz del repositorio.
3. En **Settings → Pages**, elige **Deploy from a branch**.
4. Selecciona la rama **main** y la carpeta **/ (root)**; guarda.
5. GitHub mostrará la dirección publicada cuando termine el despliegue.

También puedes subirlo por Git desde esta carpeta, sustituyendo la URL por la del repositorio que hayas creado:

```bash
git init
git add .
git commit -m "Crear portafolio bilingüe de Samuel Mancilla"
git branch -M main
git remote add origin https://github.com/samuelinmex/samuel-portfolio.git
git push -u origin main
```

La URL del comando es un ejemplo; el repositorio todavía debe crearse. Para un dominio propio, configura el dominio en GitHub Pages y su DNS. El proyecto no incluye un dominio preconfigurado.

## Funcionalidades

- Introducción cinematográfica al abrir la página: retrato, nombre en gran formato, luz en movimiento y entrada animada al portafolio. Español e inglés están disponibles desde el primer instante, sin una espera obligatoria. Incluye salto de intro, Escape y control de movimiento reducido.
- Hero cinematográfico con el retrato original del usuario optimizado a WebP.
- Segundo retrato en la sección de perfil, con encuadre mediano, borde fino y dirección de la mirada hacia la presentación personal. Mantiene visibilidad completa en los tres temas.
- Traducción completa ES/EN de contenido, controles, metadatos y etiquetas accesibles.
- Descarga del documento original en español o inglés según el idioma seleccionado.
- Temas grafito, claro y alto contraste.
- Control de movimiento, halo del cursor y tamaño de texto. Las preferencias se conservan únicamente en el navegador mediante `localStorage`.
- Respeto inicial de `prefers-reduced-motion`; la elección posterior del visitante puede modificarlo.
- Explorador de logros con pestañas accesibles: arriba/abajo en escritorio, izquierda/derecha en móvil, Inicio/Fin, Tab y Enter.
- Capacidades y trayectoria desplegables, menú móvil y navegación con teclado.
- Diálogo nativo de preferencias, con cierre por Escape y foco administrado por el navegador.
- Cursor nativo conservado y halo más visible, con seguimiento suave y respuesta al pasar sobre controles. Funciona también en alto contraste y en equipos con ratón y pantalla táctil. En movimiento reducido, sigue la posición del ratón de forma inmediata y sin órbita animada. El halo se conserva sobre los diálogos y se oculta al usar entrada táctil.
- Sin analítica, formularios, solicitudes a bases de datos ni dependencias de CDNs.
- El contenido inicial en español y las descargas funcionan sin JavaScript; la intro no bloquea el contenido cuando JavaScript no está disponible.

## Contenido y modificaciones

- `index.html`: estructura y contenido inicial en español.
- `script.js`: traducciones ES/EN, preferencias e interacciones. Modifica ambos diccionarios para cambiar el contenido bilingüe; actualiza también el texto inicial equivalente en HTML.
- `styles.css`: diseño, temas y reglas adaptables.
- `assets/samuel-mancilla.webp`: retrato, derivado del archivo proporcionado. No se modificaron los rasgos del usuario.
- `assets/samuel-mancilla-perfil.webp`: segundo retrato, integrado en el perfil con carga diferida y encuadre adaptable mediante CSS.
- `assets/cv/Samuel-Mancilla-CV-ES.pdf`: CV original en español.
- `assets/cv/Samuel-Mancilla-CV-EN.pdf`: résumé original en inglés.
- `assets/fonts/`: fuentes locales, con licencia incluida.

El contenido profesional utiliza los CV adjuntos como fuente. Los cargos y las fechas corresponden a esos documentos, incluyendo Concentradora Nueve hasta el 18 de septiembre de 2026. Tatung y Firstronic se presentan como puestos de calidad, de acuerdo con el CV actual. Las experiencias de 2022 se conservan con sus fechas originales aunque se superpongan con otras etapas. No se agregaron porcentajes de mejora ni métricas de TI no documentadas. Los diagramas representan áreas de contribución, no una arquitectura física de las empresas.

Proyectos añadidos al explorador de logros (sección Impacto), en español e inglés: despliegue de GLPI/OCS desde cero (Ubuntu Server, MySQL y DNS local en Windows Server 2019), aplicación en Visual Basic .NET para préstamos y asignaciones con modo sin conexión, aplicación en Python para organizar documentos de Recursos Humanos, reservas con WordPress y dashboard de vencimientos en Excel, y repositorios de GitHub. Estos casos no muestran empresa ni fechas porque no se indicaron; se describen únicamente las funciones aportadas, sin métricas.

Contacto del sitio: `contacto@smancilla.dev`, WhatsApp `+52 998 810 2135`, GitHub `samuelinmex`. El teléfono se tomó del CV adjunto. WhatsApp abre la conversación y el correo abre el cliente del visitante; el sitio no envía mensajes automáticamente.

Para abrir directamente en inglés, añade `?lang=en` a la dirección. Para español, usa `?lang=es`. El idioma se recuerda después de la selección.

La introducción muestra ambos idiomas en cada carga de la página. El idioma recordado recibe el foco inicial; `?lang=en` o `?lang=es` determina la selección inicial cuando aparece en la dirección. Saltar la intro conserva esa selección.

## Licencias y privacidad

El retrato, el texto profesional y los CV pertenecen al usuario. El paquete incluye fuentes URW bajo sus condiciones de licencia, sus archivos OTF originales y las versiones WOFF que utiliza el sitio. No se incluye seguimiento de visitantes.

El paquete entregado es el proyecto completo. No se ha creado ni modificado un repositorio externo de GitHub.

## Verificación realizada

Se comprobaron los archivos y anclas locales, las relaciones ARIA, la sintaxis JavaScript y la paridad de las claves de traducción. Una simulación del DOM verificó el cambio de idioma y de CV, los temas, los tamaños de lectura, las preferencias, el movimiento reducido y la navegación de pestañas en escritorio y móvil, además de la lógica del menú y del diálogo. También se verificaron la entrada desde la intro en ambos idiomas, el salto y Escape, el movimiento reducido, el halo en alto contraste y su presencia sobre los diálogos. Los PDF incluidos son idénticos a los archivos adjuntos.

El diseño contiene reglas específicas para móvil, tablet, escritorio y texto ampliado. No se dispuso de una vista previa de navegador para revisar visualmente el renderizado final ni el comportamiento nativo del foco del diálogo.
