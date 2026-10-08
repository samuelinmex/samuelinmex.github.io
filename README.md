# Samuel Mancilla · Portafolio profesional

Portafolio estático bilingüe de Samuel Mancilla, preparado para reemplazar el sitio de GitHub Pages en [smancilla.dev](https://smancilla.dev/). HTML, CSS y JavaScript; sin compilación, dependencias de aplicación ni servicios externos para cargar fuentes o imágenes.

Repositorio: [samuelinmex/samuelinmex.github.io](https://github.com/samuelinmex/samuelinmex.github.io). Rama de publicación: `main`, carpeta raíz. El archivo `CNAME` conserva el dominio propio.

## Abrir el sitio

Abre `index.html` en un navegador moderno. Para probarlo mediante un servidor local, desde esta carpeta ejecuta:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000`. El sitio también funciona dentro de una subcarpeta de GitHub Pages: todas las referencias locales son relativas.

## Actualizar el sitio

Clona el repositorio existente y edita los archivos de su raíz:

```bash
git clone https://github.com/samuelinmex/samuelinmex.github.io.git
cd samuelinmex.github.io
```

Después de comprobar los cambios localmente:

```bash
git add .
git commit -m "Actualizar portafolio"
git push origin main
```

GitHub Pages publica la rama `main` desde `/ (root)`. Mantén `index.html`, `.nojekyll` y `CNAME` en la raíz. El estado del despliegue se consulta en la pestaña **Actions** del repositorio. La configuración del dominio y el DNS existentes se conservan.

Al guardar el reemplazo como un nuevo commit, la versión anterior sigue disponible en el historial de Git.

## Funcionalidades

- Introducción cinematográfica al abrir la página: retrato, nombre en gran formato, luz en movimiento y entrada animada al portafolio. Español e inglés están disponibles desde el primer instante, sin una espera obligatoria. Incluye salto de intro, Escape y control de movimiento reducido.
- Hero cinematográfico con el retrato original del usuario optimizado a WebP.
- Segundo retrato en la sección de perfil, con encuadre mediano, borde fino y dirección de la mirada hacia la presentación personal. Mantiene visibilidad completa en los tres temas.
- Traducción completa ES/EN de contenido, controles, metadatos y etiquetas accesibles.
- Descarga del documento original en español o inglés según el idioma seleccionado.
- Temas grafito, claro y alto contraste.
- Control de movimiento, halo del cursor y tamaño de texto. Las preferencias se conservan únicamente en el navegador mediante `localStorage`.
- Respeto inicial de `prefers-reduced-motion`; la elección posterior del visitante puede modificarlo.
- Proyectos como primera sección después del hero: cinco casos internos con necesidad, intervención, flujo y resultado. El caso destacado es la aplicación de préstamos y asignaciones en Visual Basic .NET con guardado local y sincronización al recuperar la conexión.
- Casos de GLPI/OCS sobre Ubuntu Server y MySQL con DNS en Windows Server 2019, organización documental de RH con Python/Excel, reservas de equipo compartido con WordPress y dashboard de vencimientos en Excel.
- Seis proyectos web enlazados a repositorios públicos: Conexión Metrópoli, Fortress, Oh Party!, Garritas Creativas, Caribe Mid y el portafolio de Carmina Moreno. Los dominios enlazados proceden de los archivos CNAME de sus repositorios; su disponibilidad en vivo no se pudo confirmar desde este entorno.
- Explorador de proyectos con pestañas accesibles en escritorio: arriba/abajo, Inicio/Fin y Tab. En móvil, cinco tarjetas verticales muestran el propósito de cada solución. Al abrir una, aparece primero el resultado; la implementación se consulta mediante un segundo desplegable nativo. Solo un proyecto se mantiene abierto a la vez. Sin JavaScript, los casos siguen disponibles mediante los mismos controles nativos.
- Capacidades y trayectoria desplegables, menú móvil y navegación con teclado.
- Lectura móvil organizada en cinco bloques con espacio exterior, bordes y encabezados directos: Proyectos, Sobre mí, Capacidades, Trayectoria y Contacto. Los encabezados editoriales y la composición de escritorio se conservan.
- Selector móvil de secciones bajo la cabecera: permite saltar a un bloque y refleja la sección actual durante el scroll. Su posición y el espacio de las anclas se adaptan a la altura de la cabecera y al texto ampliado. Respeta el movimiento reducido.
- Tarjetas web separadas en móvil. Capacidades y experiencia empiezan plegadas y permiten abrir una entrada por grupo; sus estados se conservan al cambiar entre móvil y escritorio.
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

La trayectoria utiliza los CV adjuntos como fuente. Los cargos y las fechas corresponden a esos documentos, incluyendo Concentradora Nueve hasta el 18 de septiembre de 2026. Tatung y Firstronic se presentan como puestos de calidad, de acuerdo con el CV actual. Las experiencias de 2022 se conservan con sus fechas originales aunque se superpongan con otras etapas.

Los cinco casos internos se redactaron a partir de la descripción directa de Samuel. No se atribuyen a una empresa o fecha que no haya confirmado para cada proyecto. Los resultados son cualitativos: no se agregaron porcentajes, tiempos exactos, cantidades de usuarios ni métricas no documentadas. La aplicación de préstamos describe tolerancia a interrupciones mediante guardado local y movimientos pendientes; no se presenta como una garantía absoluta contra toda pérdida, duplicación o falla. Los flujos muestran etapas y componentes conceptuales, no una arquitectura física de las empresas ni una demostración de sus sistemas internos.

Los proyectos web se verificaron mediante los repositorios públicos incluidos en la captura proporcionada y sus archivos fuente. Los enlaces no implican acceso a aplicaciones internas ni publican sus formatos, datos, URLs internas o información de empleados. Los CV descargables se mantienen como los originales adjuntos.

Contacto del sitio: `contacto@smancilla.dev`, WhatsApp `+52 998 810 2135`, GitHub `samuelinmex`. El teléfono se tomó del CV adjunto. WhatsApp abre la conversación y el correo abre el cliente del visitante; el sitio no envía mensajes automáticamente.

Para abrir directamente en inglés, añade `?lang=en` a la dirección. Para español, usa `?lang=es`. El idioma se recuerda después de la selección.

La introducción muestra ambos idiomas en cada carga de la página. El idioma recordado recibe el foco inicial; `?lang=en` o `?lang=es` determina la selección inicial cuando aparece en la dirección. Saltar la intro conserva esa selección.

## Licencias y privacidad

El retrato, el texto profesional y los CV pertenecen al usuario. El paquete incluye fuentes URW bajo sus condiciones de licencia, sus archivos OTF originales y las versiones WOFF que utiliza el sitio. No se incluye seguimiento de visitantes.

El repositorio contiene el proyecto completo, incluidas ambas fotografías, los dos CV y las fuentes locales con su licencia.

## Verificación realizada

Se comprobaron los archivos y anclas locales, las relaciones ARIA, la sintaxis JavaScript y la paridad de las claves de traducción. Una simulación del DOM verificó el cambio de idioma y de CV, los temas, los tamaños de lectura, las preferencias, el movimiento reducido y la navegación de pestañas en escritorio, los desplegables móviles y el cambio entre ambos diseños, además de la lógica del menú y del diálogo. Se verificaron el selector móvil, el indicador de sección durante el scroll, los nombres accesibles de los bloques, la actualización de alturas con texto ampliado y la conservación de los estados de capacidades y trayectoria al cambiar de diseño. También se verificaron la entrada desde la intro en ambos idiomas, el salto y Escape, el movimiento reducido, el halo en alto contraste y su presencia sobre los diálogos. Los PDF incluidos son idénticos a los archivos adjuntos.

El diseño contiene reglas específicas para móvil, tablet, escritorio y texto ampliado. No se dispuso de una vista previa de navegador para revisar visualmente el renderizado final ni el comportamiento nativo del foco del diálogo.
