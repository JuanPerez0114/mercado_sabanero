# Matriz de casos de prueba

Los casos están relacionados con cada criterio de aceptación (CA). El estado cambia de **Pendiente** a **Aprobado** cuando la prueba automatizada pasa.

| ID | Historia | Criterio | Descripción | Datos de entrada | Resultado esperado | Estado |
|---|---|---|---|---|---|---|
| CP-01 | HU-01 | CA1 | Agregar la cantidad mínima válida | stock 100, cantidad 1 | queda 1 unidad en el carrito | Aprobado |
| CP-02 | HU-01 | CA1 | Agregar una cantidad intermedia | stock 100, cantidad 2 | queda 2 unidades | Pendiente |
| CP-03 | HU-01 | CA1 | Agregar justo por debajo del máximo | stock 100, cantidad 49 | quedan 49 unidades | Pendiente |
| CP-04 | HU-01 | CA1 | Agregar la cantidad máxima válida | stock 100, cantidad 50 | quedan 50 unidades | Pendiente |
| CP-05 | HU-01 | CA2 | Rechazar cero unidades | cantidad 0 | error de cantidad inválida | Aprobado |
| CP-06 | HU-01 | CA2 | Rechazar por encima del máximo | cantidad 51 | error de cantidad inválida | Aprobado |
| CP-07 | HU-01 | CA2 | Rechazar una cantidad negativa | cantidad -1 | error de cantidad inválida | Pendiente |
| CP-08 | HU-01 | CA3 | Stock menor a la cantidad pedida | stock 3, cantidad 4 | error de stock insuficiente y carrito vacío | Aprobado |
| CP-09 | HU-01 | CA3 | Stock exactamente igual a lo pedido | stock 4, cantidad 4 | quedan 4 unidades | Pendiente |
| CP-10 | HU-01 | CA4 | Producto repetido suma cantidades | agregar 2 y luego 3 | una línea con 5 unidades | Aprobado |
| CP-11 | HU-01 | CA4 | Suma que supera el stock | stock 4, agregar 3 y luego 2 | error de stock insuficiente; el carrito conserva 3 | Aprobado |
| CP-12 | HU-02 | CA1 | IVA con tarifa 0 % | valor $100.000, tarifa 0 | IVA $0 | Aprobado |
| CP-13 | HU-02 | CA1 | IVA con tarifa 5 % | valor $100.000, tarifa 5 | IVA $5.000 | Aprobado |
| CP-14 | HU-02 | CA1 | IVA con tarifa 19 % | valor $100.000, tarifa 19 | IVA $19.000 | Aprobado |
| CP-15 | HU-02 | CA2 | IVA sobre el valor con descuento | $180.000, tarifa 19, descuento 5 % | IVA $32.490 | Aprobado |
| CP-16 | HU-02 | CA1 | Redondeo del IVA al peso más cercano | $4.510, tarifa 19 | IVA $857 | Aprobado |
| CP-17 | HU-03 | CA1 | Sin descuento por debajo del umbral | subtotal $199.999 | descuento 0 % | Aprobado |
| CP-18 | HU-03 | CA2 | Descuento del 5 % en el límite inferior | subtotal $200.000 | descuento 5 % | Aprobado |
| CP-19 | HU-03 | CA2 | Descuento del 5 % en el límite superior | subtotal $499.999 | descuento 5 % | Aprobado |
| CP-20 | HU-03 | CA3 | Descuento del 10 % en el límite | subtotal $500.000 | descuento 10 % | Aprobado |
| CP-21 | HU-03 | CA2 | Valor del descuento del 5 % | subtotal $228.000 | descuento $11.400 | Aprobado |
| CP-22 | HU-04 | CA1 | SABANERO10 con el mínimo exacto | cupón SABANERO10, subtotal $50.000 | 10 % de descuento | Pendiente |
| CP-23 | HU-04 | CA1 | SABANERO10 por debajo del mínimo | cupón SABANERO10, subtotal $49.999 | error de cupón inválido | Pendiente |
| CP-24 | HU-04 | CA2 | Cupón ENVIOGRATIS | cupón ENVIOGRATIS, compra pequeña a Corozal | envío $0 | Pendiente |
| CP-25 | HU-04 | CA3 | Cupón inexistente | cupón NOEXISTE | error de cupón inválido | Pendiente |
| CP-26 | HU-04 | CA3 | Cupón vencido | cupón con fecha vencida | error de cupón inválido | Pendiente |
| CP-27 | HU-04 | CA3 | Cupón que vence hoy | fecha de uso igual a la de vencimiento | cupón válido | Pendiente |
| CP-28 | HU-04 | CA4 | Volumen 5 % con SABANERO10 | subtotal $228.000, cupón SABANERO10 | se aplica solo 10 % (descuento $22.800) | Pendiente |
| CP-29 | HU-04 | CA4 | Volumen 10 % con SABANERO10 | volumen 10 %, cupón 10 % | se aplica solo 10 %, sin sumar | Pendiente |
| CP-30 | HU-05 | CA1 | Envío dentro de Sincelejo | destino Sincelejo | envío $8.000 | Pendiente |
| CP-31 | HU-05 | CA1 | Envío a otro municipio de Sucre | destino Corozal | envío $15.000 | Pendiente |
| CP-32 | HU-05 | CA2 | Productos con IVA por debajo del umbral | productos con IVA $149.999 | envío $8.000 | Pendiente |
| CP-33 | HU-05 | CA2 | Productos con IVA en el umbral | productos con IVA $150.000 | envío $0 | Pendiente |
| CP-34 | HU-05 | CA3 | Total de la compra | 4 arroces de $4.500 a Sincelejo, sin descuento ni IVA | total $26.000 (subtotal − descuento + IVA + envío) | Pendiente |
| CP-35 | HU-06 | CA1 | Menos de $1.000 no da puntos | total sin envío $999 | 0 puntos | Pendiente |
| CP-36 | HU-06 | CA1 | $1.000 exactos dan 1 punto | total sin envío $1.000 | 1 punto | Pendiente |
| CP-37 | HU-06 | CA1 | Solo cuentan los miles completos | total sin envío $1.999 | 1 punto | Pendiente |
| CP-38 | HU-06 | CA2 | Cliente ORO recibe el doble | total sin envío $250.515, categoría ORO | 500 puntos | Pendiente |
| CP-39 | HU-06 | CA1 | El envío no cuenta para los puntos | total $26.000 con envío $8.000 | 18 puntos | Pendiente |
| CP-40 | Integración | Ejemplo guía | Ejemplo oficial de la guía | 1 licuadora $180.000 (IVA 19 %), 2 cafés $15.000 (IVA 5 %), 4 arroces $4.500 (IVA 0 %), Sincelejo, cliente ESTÁNDAR, sin cupón | subtotal $228.000, descuento $11.400, IVA $33.915, envío $0, total $250.515, 250 puntos | Pendiente |

**Total de casos planificados:** 40