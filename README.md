# Portafolio profesional — Samuel Mancilla

Sitio estático profesional listo para GitHub Pages. No necesita Node, Astro, npm ni proceso de compilación: GitHub Pages puede servirlo directamente desde la rama `main`.

## Archivos principales

- `index.html`: contenido y estructura.
- `styles.css`: diseño glassmorphism, responsive y animaciones.
- `script.js`: navegación móvil, animaciones, filtros, barra de progreso, timeline y copiar correo.
- `assets/Samuel_Mancilla_CV.pdf`: CV descargable.
- `assets/samuel-mancilla-portrait.webp`: fotografía optimizada usada en el hero.
- `assets/samuel-mancilla-portrait.png`: respaldo de alta calidad.
- `.nojekyll`: evita procesamiento innecesario de Jekyll.

## Publicar en GitHub Pages

1. Crea un repositorio, por ejemplo `portfolio` o `samuelinmex.github.io`.
2. Sube **todo el contenido de esta carpeta** a la raíz del repositorio.
3. En GitHub entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/(root)`.
6. Guarda. GitHub mostrará la URL pública cuando termine el despliegue.

Si el repositorio se llama `samuelinmex.github.io`, el sitio normalmente quedará disponible en `https://samuelinmex.github.io/`.

## Dominio personalizado

Si después quieres usar `smancilla.dev`, configúralo primero en GitHub Pages. Cuando el DNS esté listo puedes crear un archivo `CNAME` que contenga únicamente:

```text
smancilla.dev
```

## Edición rápida

Los datos de contacto están en la sección `#contacto` de `index.html`. El contenido de experiencia, habilidades y certificaciones también se edita directamente en ese archivo.

## Por qué no usa Astro

Para un portafolio de una sola página, HTML + CSS + JavaScript reduce dependencias, elimina el paso de build, mejora la portabilidad y es ideal para GitHub Pages. Astro sería útil si más adelante agregas blog, múltiples páginas, contenido Markdown o componentes reutilizables a gran escala.


## Fotografía profesional

El hero utiliza `assets/samuel-mancilla-portrait.webp` con respaldo PNG para mantener buena calidad visual y tiempos de carga bajos en GitHub Pages.


## Identidad visual V8

La interfaz usa una paleta corporativa contenida para mantener credibilidad y jerarquía visual:

- Carbón profundo: `#0B1220` — fondo principal.
- Azul marino: `#111C2E` — superficies y navegación.
- Azul acero: `#1E293B` — elementos secundarios.
- Blanco roto: `#F4F6F8` — texto principal.
- Gris frío: `#A7B0BE` — texto secundario.
- Cobalto: `#2563EB` — único acento de acción y foco.
- Azul hielo: `#DCE8F7` — contraste suave y detalles de apoyo.

El timeline mantiene sus nodos en neutro y activa en cobalto únicamente el punto más cercano al centro de la pantalla, para reforzar orientación sin saturar la interfaz.


## Hero épico V4

La cabecera principal integra una escena visual tipo universo con una animación en `canvas` donde la fotografía se materializa como partículas durante aproximadamente 7 segundos. El efecto respeta `prefers-reduced-motion` y muestra la imagen estática cuando el usuario prefiere menos animación.


## Mejoras V5

- Hero ajustado para materializar la fotografía en aproximadamente 4 segundos con un `fallback` que garantiza que la imagen final aparezca.
- Integración del logotipo `SM` en navegación y hero.
- Sección de repositorios públicos de GitHub con enlaces directos a proyectos destacados.
- Animaciones más intensas en hero, cards y distintivos visuales.


## Ajustes V6

- Se añadió un nuevo bloque de impacto para la implementación de un baúl de contraseñas empresarial con Vaultwarden.
- El botón del footer para volver arriba ahora funciona mediante JavaScript con desplazamiento suave.
- La animación del retrato fue rediseñada para una aparición más cinematográfica: destellos, trazas, barrido luminoso y bits que revelan la imagen.


## Corrección V8 — controles interactivos

Se reestructuró `script.js` para que cada módulo interactivo se inicialice de forma independiente. Los filtros de Stack Técnico, filtros de trayectoria, menú móvil, copiar correo, enlaces internos y botón "Volver arriba" ya no dependen de que la animación del hero termine correctamente.

La animación cinematográfica del retrato dejó de leer píxeles de la imagen mediante `getImageData`, evitando fallos cuando el sitio se abre directamente desde el sistema de archivos. La foto cuenta además con una revelación CSS independiente de aproximadamente 4 segundos, por lo que aparece aun si el efecto de partículas no puede ejecutarse.


## Impacto profesional — rediseño V8

La sección de impacto dejó de usar cinco tarjetas estrechas y ahora utiliza un carrusel tecnológico de una sola historia a la vez. Incluye transición fade + zoom, navegación anterior/siguiente, selector directo de cada logro, autoplay de 7 segundos, pausa al interactuar, navegación con teclado y gesto horizontal en pantallas táctiles. El diseño mantiene el texto con ancho cómodo de lectura y utiliza el dato clave como foco visual.


## Ajuste V9

- Integración del logotipo blanco con fondo transparente en la navegación y el hero.
- Aumento del protagonismo del logo mediante un badge principal más grande y una marca de agua elegante detrás del retrato, cuidando que siga siendo cómodo de ver.


## Ajuste V10

- Correo de contacto del sitio actualizado a `contacto@smancilla.dev`, incluyendo botón de correo, copiar correo y datos estructurados.


## Actualización V11

- Selector de tema con tres variantes: Cobalto, Grafito y Papel.
- Animación de hover y transición visual al cambiar de tema.
- Selector de idioma Español / English con traducción dinámica del contenido principal.
- Preferencias de idioma y tema persistentes cuando el navegador permite almacenamiento local.
- Timeline de habilidades más interactivo: navegador por etapas, controles anterior/siguiente, progreso, selección por clic, navegación por teclado y efecto 3D sutil al mover el cursor.
- Se mantuvieron funcionales los filtros de stack, filtros de trayectoria, carrusel de impacto, copiar correo y volver arriba.


## Ajustes V14 — tema Paper

- Revisión completa de contraste para el tema Paper con texto principal carbón, texto secundario gris oscuro y acento azul cobalto accesible.
- Superficies menos brillantes y tarjetas con fondo blanco roto para reducir fatiga visual.
- Corrección de textos, chips, filtros, carrusel de impacto, timeline, contacto, footer y utilidades en modo claro.
- Eliminación de la transición de tema a pantalla completa que podía cubrir o aparentar cortar contenido durante el cambio de tema.
- Mejoras de interlineado y ajuste de texto en experiencia profesional para evitar recortes visuales.


## Ajustes V15

- Corrección del carrusel de Impacto para evitar textos recortados en resoluciones estrechas. La altura del escenario se adapta dinámicamente al contenido activo.
- Paginación horizontal legible en móviles y pantallas estrechas.
- Restauración de la animación de cambio de tema mediante un bloom radial translúcido, sin cubrir ni cortar el contenido de la página.
- Transición suave adicional sobre el contenido durante el cambio de tema.

## Ajustes V16

- Se corrigió el recorte visual de las métricas grandes del carrusel de Impacto (por ejemplo, `9`, `N1/N2`, `GLPI + OCS`, `Vault` y `6 meses`) aumentando el espacio tipográfico y normalizando el line-height.
- Se restauró y rediseñó la transición entre temas con un efecto visual tipo portal/ripple: destello radial, anillos expansivos y pulso del contenido, sin modificar el layout ni recortar secciones.
- La animación usa el color de acento del tema de destino y respeta `prefers-reduced-motion`.

## Ajustes V17

- Métrica N1/N2 redimensionada de forma óptica para permanecer dentro del panel en resoluciones de escritorio y móviles.
- Rediseño de la métrica de producción: el dato `6` y la etiqueta `MESES` ahora forman una composición editorial más limpia.
- Descripciones de los seis repositorios reescritas con tono profesional y extensión breve para mantener el equilibrio de las tarjetas.
- Traducción EN actualizada para las nuevas descripciones y la etiqueta MONTHS.


## Ajustes V18

- En tema Paper, el badge principal del logo SM conserva un fondo negro/azul muy oscuro para mantener contraste con el logo blanco transparente.
- El carrusel de Impacto ahora mantiene una altura uniforme calculada a partir del item más alto, evitando saltos al cambiar a Vault.
- Vault tiene un tamaño tipográfico óptico propio para conservar la misma presencia visual que el resto de métricas.


## Ajuste V19

- Se eliminó la marca de agua SM que aparecía sobre el retrato.
- El retrato queda completamente opaco y limpio al finalizar la animación cinematográfica.
- Se retiró la firma superpuesta dentro de la fotografía; el logotipo principal permanece como elemento independiente del hero.

## Ajustes V20

- Favicon reconstruido a partir del monograma SM real, sobre fondo azul marino oscuro.
- Logo SM del hero integrado como lockup de identidad estático, sin rotación ni flotación continua.
- Hero con animación de entrada sutil y escalonada en textos y componentes.
- Tema Paper: hero visual convertido en una isla oscura para asegurar contraste correcto en captions, estado y tarjetas inferiores.
- Métrica “6 MESES” ajustada con mayor respiración óptica para evitar recorte del glifo.

## Dominio personalizado

Este proyecto incluye un archivo `CNAME` con `smancilla.dev` para GitHub Pages.

En Cloudflare, configura el dominio raíz `smancilla.dev` con los cuatro registros A oficiales de GitHub Pages y `www` como CNAME hacia `samuelinmex.github.io`.
