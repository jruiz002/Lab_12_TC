# Laboratorio 12 - Programación Funcional con JavaScript

Este laboratorio contiene las soluciones a tres problemas de programación funcional utilizando JavaScript y funciones lambda (arrow functions).

## Archivos incluidos

- `problema2.js` - Ordenar lista de diccionarios por key
- `problema3.js` - Calcular matriz transpuesta
- `problema4.js` - Eliminar elementos de una lista
- `ejecutar_todos.js` - Archivo principal que ejecuta todos los problemas
- `README.md` - Este archivo de documentación

## Cómo ejecutar

Para ejecutar todos los problemas:
```bash
node ejecutar_todos.js
```

Para ejecutar un problema individual:
```bash
node problema2.js
node problema3.js
node problema4.js
```

## Problema 2: Ordenar lista de diccionarios

**Objetivo:** Ordenar una lista de diccionarios con respecto a un key indicado usando funciones lambda.

**Solución:** Utiliza el método `sort()` con una función lambda que compara los valores del key especificado.

```javascript
const sortDictionariesByKey = (dictionaries, key) => {
    return dictionaries.sort((a, b) => a[key] - b[key]);
};
```

## Problema 3: Matriz transpuesta

**Objetivo:** Calcular la matriz transpuesta de una matriz (lista de listas) usando funciones lambda.

**Solución:** Utiliza `map()` para crear una nueva matriz donde cada columna de la original se convierte en una fila.

```javascript
const transposeMatrix = (matrix) => {
    return matrix[0].map((_, colIndex) => 
        matrix.map(row => row[colIndex])
    );
};
```

## Problema 4: Eliminar elementos de una lista

**Objetivo:** Eliminar elementos indicados de una lista usando funciones lambda.

**Solución:** Utiliza `filter()` con una función lambda que excluye los elementos que están en la lista de elementos a eliminar.

```javascript
const removeElements = (originalList, elementsToRemove) => {
    return originalList.filter(element => !elementsToRemove.includes(element));
};
```

## Características de las soluciones

1. **Programación funcional:** Todas las soluciones utilizan funciones de orden superior como `sort()`, `map()`, `filter()`, y `reduce()`.

2. **Funciones lambda:** Se utilizan arrow functions (`=>`) para crear funciones anónimas concisas.

3. **Inmutabilidad:** Las funciones no modifican los datos originales, sino que devuelven nuevos arrays/objetos.

4. **Ejemplos completos:** Cada archivo incluye ejemplos que demuestran el funcionamiento con los datos del enunciado.

5. **Funciones alternativas:** Se proporcionan diferentes enfoques para resolver cada problema.

## Ventajas de JavaScript para programación funcional

- Soporte nativo para funciones de orden superior
- Arrow functions para sintaxis concisa
- Métodos de array funcionales (`map`, `filter`, `reduce`, etc.)
- Closures y scope lexical
- Funciones como ciudadanos de primera clase