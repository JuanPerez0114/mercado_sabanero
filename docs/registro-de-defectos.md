# Registro de defectos

Se registran los defectos encontrados durante el desarrollo con TDD y la revisión entre pares.

| ID | Descripción | Pasos para reproducir | Severidad | Estado |
|---|---|---|---|---|
| D-01 | (describir el defecto encontrado) | 1. ... 2. ... 3. ... | Alta | Abierto |

**Severidades:** Crítica (pérdida de dinero o bloqueo), Alta (resultado incorrecto), Media (caso límite mal manejado), Baja (mensaje o nombre).

**Estados:** Abierto, En corrección, Corregido, Verificado.

## Ambigüedades del enunciado (a confirmar con la docente)

1. **HU-05 CA2:** no se aclara si "productos con IVA suman $150.000 o más" se mide antes o después del descuento. Se asumió que se mide antes.
2. **HU-04 CA1:** no se indica qué pasa con SABANERO10 si el subtotal es menor a $50.000. Se asumió que se rechaza con error de cupón inválido.
3. **HU-01 CA2:** no se aclara si el límite de 50 unidades aplica a la cantidad acumulada del mismo producto. Se asumió que aplica por cada operación de agregar.