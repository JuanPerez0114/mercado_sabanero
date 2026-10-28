# Informe — Pruebas ágiles y TDD en Mercado Sabanero

**Equipo:** Juan Felipe Pérez Gómez, Albeiro José Vergara Pérez
**Repositorio:** https://github.com/JuanPerez0114/mercado_sabanero

## 1. Herramientas elegidas y por qué

Se eligió **JavaScript (Node.js)** porque es sencillo, no requiere compilación y el equipo ya lo conoce. Para las pruebas se usó **Jest**, que reúne en una sola herramienta el ejecutor de pruebas, las aserciones, los dobles de prueba (`jest.fn`), las pruebas parametrizadas (`test.each`) y el reporte de cobertura. Se usó **Git y GitHub** para guardar la evidencia del ciclo TDD mediante commits con los prefijos `test:`, `feat:` y `refactor:`.

## 2. Resumen de resultados

| Indicador | Valor |
|---|---|
| Casos de prueba planificados (matriz) | 40 |
| Pruebas automatizadas ejecutadas | (completar) |
| Pruebas exitosas | (completar) |
| Pruebas fallidas | (completar) |
| Cobertura de líneas | (completar) % |
| Pruebas parametrizadas | (completar) |
| Pruebas de error | (completar) |
| Pruebas con doble de prueba | (completar) |

El ejemplo de la guía (total $250.515 y 250 puntos): (indicar si pasó).

## 3. Dificultades

(Escribir las dificultades reales del equipo. Ejemplos posibles: interpretar reglas ambiguas del enunciado, evitar errores de redondeo con dinero, mantener el ciclo rojo-verde-refactor en vez de escribir el código primero.)

## 4. Conclusiones

Trabajar con TDD nos obligó a pensar en el comportamiento esperado antes de escribir el código. Cada criterio de aceptación se convirtió primero en una prueba que fallaba (rojo), luego escribimos solo el código necesario para que pasara (verde) y, cuando hizo falta, mejoramos el diseño sin cambiar el resultado (refactor). Ver los commits `test:`, `feat:` y `refactor:` en orden dejó evidencia clara del proceso.

Las pruebas unitarias nos ayudaron a detectar casos que no son evidentes al leer el enunciado. Por ejemplo, al sumar cantidades de un mismo producto, el stock debe validarse contra la cantidad acumulada y no solo contra la cantidad nueva. También confirmamos la importancia de los valores límite (0, 1, 50 y 51 unidades; $199.999 y $200.000 de subtotal), porque es donde más fácil se cometen errores.

Los dobles de prueba (mock) nos permitieron probar el carrito sin depender de un servicio de inventario real, controlando el stock en cada caso. Las pruebas parametrizadas redujeron código repetido y facilitaron cubrir muchos valores con una sola prueba. Además, tener la suite en verde nos dio seguridad para refactorizar, porque cualquier cambio que rompiera el comportamiento se detectaba al instante.

Aprendimos también que una cobertura alta no basta por sí sola: lo importante es que las pruebas verifiquen reglas de negocio reales y casos límite. Y que dividir las historias entre los integrantes, con commits propios y revisión entre pares, mejora la calidad y permite que cada uno entienda el código de los demás.

## 5. Uso de inteligencia artificial

## Uso de inteligencia artificial
El equipo usó Claude (Anthropic) como apoyo durante el proyecto:
- Organizar la estructura del proyecto y hacer seguimiento del trabajo paso a paso.
- Guiar el ciclo TDD (rojo, verde, refactor) y los commits.
- Proponer ejemplos de código y de pruebas, que el equipo escribió, ejecutó, revisó y ajustó.
- Ayudar a diagnosticar errores (configuración de Jest, mensajes de Git y PowerShell).
- Preparar las plantillas de la documentación (plan de pruebas, matriz, defectos e informe).

Los integrantes ejecutaron cada prueba y cada commit, y pueden explicar cada línea del código y de las pruebas.
