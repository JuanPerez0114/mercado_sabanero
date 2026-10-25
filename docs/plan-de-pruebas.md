# Plan de pruebas ágil — Mercado Sabanero

**Asignatura:** Electiva Profesional en Ingeniería de Software · Agilidad Continua · IX semestre
**Docente:** Laudyt María Lambraño Pérez
**Equipo:** Juan Felipe Pérez Gómez, Albeiro José Vergara Pérez
**Repositorio:** https://github.com/JuanPerez0114/mercado_sabanero

## 1. Alcance

**Dentro del alcance:** la lógica de negocio del módulo que liquida una compra en Mercado Sabanero: carrito de compras (HU-01), IVA (HU-02), descuento por volumen (HU-03), cupones (HU-04), envío (HU-05) y puntos (HU-06).

**Fuera del alcance:** interfaz gráfica, base de datos y pasarela de pagos.

**Consideraciones:** el inventario es un servicio externo y se reemplaza en las pruebas por un doble de prueba (mock). Los valores se manejan en pesos, sin decimales, redondeando al peso más cercano.

## 2. Estrategia

- Se trabaja con Desarrollo Guiado por Pruebas (TDD): primero se escribe una prueba que falla (rojo), luego el código mínimo que la pasa (verde) y después se mejora el diseño (refactor).
- Cada criterio de aceptación (formato Dado, Cuando, Entonces) queda cubierto por al menos una prueba unitaria, y la relación se registra en la matriz de casos.
- Siempre se prueban los valores límite: 0, 1, 50 y 51 unidades; $199.999, $200.000, $499.999 y $500.000 de subtotal; $49.999 y $50.000 para el cupón; $149.999 y $150.000 para el envío gratis.
- Las pruebas siguen el patrón AAA (preparar, ejecutar, verificar) y tienen nombres que describen el comportamiento esperado.
- Cada integrante revisa las pruebas de un compañero y deja comentarios sobre su calidad.
- Los commits evidencian el ciclo TDD con los prefijos `test:`, `feat:` y `refactor:`.

## 3. Tipos de prueba

| Tipo | Descripción |
|---|---|
| Unitarias | Verifican una función o clase de forma aislada. |
| Parametrizadas | Una misma prueba con varios conjuntos de datos, para valores límite. |
| De error | Verifican que se lancen las excepciones esperadas (cantidad inválida, stock insuficiente, cupón inválido). |
| Con doble de prueba | Reemplazan el servicio de inventario con un mock para controlar el stock. |
| De integración ligera | Verifican la liquidación completa con el ejemplo oficial de la guía. |

## 4. Herramientas

| Necesidad | Herramienta | Justificación |
|---|---|---|
| Lenguaje | JavaScript (Node.js) | Sencillo, no requiere compilación y el equipo ya lo conoce. |
| Pruebas unitarias | Jest | Incluye ejecutor, aserciones, mocks y cobertura en una sola herramienta. |
| Pruebas parametrizadas | `test.each` de Jest | Permite probar varios valores límite con una sola prueba. |
| Dobles de prueba | `jest.fn` | Simula el servicio de inventario y verifica sus llamadas. |
| Cobertura | Cobertura de Jest (Istanbul) | Viene incluida; se configuró un umbral mínimo del 80 % de líneas. |
| Control de versiones | Git y GitHub | Dejan la evidencia del ciclo TDD en los commits. |

## 5. Criterio de éxito

- Todas las pruebas pasan, incluido el ejemplo de la guía (subtotal $228.000, descuento $11.400, IVA $33.915, envío $0, total $250.515 y 250 puntos).
- Mínimo 20 pruebas unitarias, con al menos 2 parametrizadas, 4 de error y 2 que usen un doble de prueba del inventario.
- Cobertura de líneas de al menos 80 % en la lógica de negocio.
- Cada criterio de aceptación tiene al menos un caso en la matriz y una prueba que lo cubre.
- Los defectos encontrados quedan registrados y los de severidad alta están corregidos.

## 6. Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Reglas ambiguas del enunciado (envío gratis, mínimo del cupón, límite de 50 unidades) | Alta | Medio | Documentar los supuestos en el README y confirmarlos con la docente. |
| Errores de redondeo al manejar dinero | Media | Alto | Usar `Math.round` y probar el redondeo de IVA y descuentos. |
| Commits que no muestran el ciclo TDD | Media | Alto | Hacer un commit por cada fase: `test:`, `feat:` y `refactor:`. |
| Un integrante sin aportes propios | Media | Alto | Repartir al menos dos historias por integrante y revisar los commits. |
| Cobertura alta pero pruebas débiles | Baja | Medio | Revisión entre pares con foco en casos límite y nombres claros. |

## 7. Reparto de historias

| Integrante | Historias | Revisa las pruebas de |
|---|---|---|
| Juan Felipe Pérez Gómez | HU-01, HU-02, HU-03 | Albeiro José Vergara Pérez |
| Albeiro José Vergara Pérez | HU-04, HU-05, HU-06 | Juan Felipe Pérez Gómez |