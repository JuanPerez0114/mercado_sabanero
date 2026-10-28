# Mercado Sabanero — Módulo de liquidación (TDD con Jest)

Electiva Profesional en Ingeniería de Software · Agilidad Continua · IX semestre · CECAR

**Equipo:** Juan Felipe Pérez Gómez, Albeiro José Vergara Pérez
**Repositorio:** https://github.com/JuanPerez0114/mercado_sabanero

Módulo de lógica de negocio que liquida una compra: carrito, IVA, descuento por volumen, cupones, envío y puntos. No tiene interfaz ni base de datos; el servicio de inventario se simula con un mock (`jest.fn`).

## Requisitos
- Node.js 18 o superior
- Git

## Cómo ejecutar las pruebas
```bash
git clone https://github.com/JuanPerez0114/mercado_sabanero.git
cd mercado_sabanero
npm install
npm test
```

| Comando | Qué hace |
|---|---|
| `npm test` | Ejecuta todas las pruebas |
| `npm test -- --verbose` | Muestra el nombre de cada prueba |
| `npm run test:watch` | Modo observador: reejecuta al guardar |
| `npm run coverage` | Pruebas más reporte de cobertura |

El reporte HTML de cobertura queda en `coverage/lcov-report/index.html`. Jest falla si la cobertura de líneas es menor al 80 %.

En PowerShell, si `npx` da error de política de ejecución, use `npm test -- --verbose` o `npx.cmd`.

## Estructura
```
src/        código de cada historia de usuario
  errores.js        errores de dominio
  carrito.js        HU-01 agregar productos
  iva.js            HU-02 cálculo del IVA
  descuentos.js     HU-03 descuento por volumen
  cupones.js        HU-04 cupones
  envio.js          HU-05 envío
  puntos.js         HU-06 puntos
  liquidacion.js    orquesta las historias y devuelve el resumen
tests/      pruebas unitarias (una suite por historia)
docs/       plan de pruebas, matriz de casos, registro de defectos, informe y captura de cobertura
```

## Reparto de historias
| Integrante | Historias |
|---|---|
| Juan Felipe Pérez Gómez | HU-01 carrito, HU-02 IVA, HU-03 descuento por volumen |
| Albeiro José Vergara Pérez | HU-04 cupones, HU-05 envío, HU-06 puntos |

## Metodología
Cada criterio de aceptación se desarrolló con TDD, y los commits evidencian el ciclo: `test:` (rojo), `feat:` (verde) y `refactor:`.

## Uso de inteligencia artificial
El equipo usó Claude (Anthropic) como apoyo durante el proyecto:
- Organizar la estructura del proyecto y hacer seguimiento del trabajo paso a paso.
- Guiar el ciclo TDD (rojo, verde, refactor) y los commits.
- Proponer ejemplos de código y de pruebas, que el equipo escribió, ejecutó, revisó y ajustó.
- Ayudar a diagnosticar errores (configuración de Jest, mensajes de Git y PowerShell).
- Preparar las plantillas de la documentación (plan de pruebas, matriz, defectos e informe).

Los integrantes ejecutaron cada prueba y cada commit, y pueden explicar cada línea del código y de las pruebas.

## Decisiones sobre reglas ambiguas
1. Todo se calcula con enteros y `Math.round`; el IVA se redondea por línea.
2. El IVA se calcula por línea sobre `precio × cantidad × (1 − descuento)`.
3. "Productos con IVA" (envío gratis desde $150.000) = suma, antes del descuento, de los productos con tarifa 5 % o 19 %.
4. SABANERO10 con subtotal menor a $50.000 se rechaza con `CuponInvalidoError`.
5. El límite de 50 unidades aplica por operación de agregar; el stock se valida contra la cantidad acumulada en el carrito.
6. Descuento por volumen y cupón nunca se suman: se aplica el mayor porcentaje (HU-04 CA4).
7. Los puntos se calculan sobre el total sin envío (`total − envío`).
