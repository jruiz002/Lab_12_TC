// Problema 4: Eliminar elementos indicados de una lista usando funciones lambda

// Función para eliminar elementos de una lista usando filter y funciones lambda
const removeElements = (originalList, elementsToRemove) => {
    return originalList.filter(element => !elementsToRemove.includes(element));
};

// Función alternativa usando una función lambda más explícita
const removeElementsLambda = (originalList, elementsToRemove) => {
    const filterFunction = (element) => !elementsToRemove.includes(element);
    return originalList.filter(filterFunction);
};

// Función usando reduce (más funcional)
const removeElementsReduce = (originalList, elementsToRemove) => {
    return originalList.reduce((acc, element) => {
        return elementsToRemove.includes(element) ? acc : [...acc, element];
    }, []);
};

// Ejemplo del problema
const originalList = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
const elementsToRemove = ['amarillo', 'cafe', 'blanco'];

console.log("Lista original:");
console.log(originalList);

console.log("\nElementos a eliminar:");
console.log(elementsToRemove);

// Eliminar elementos usando filter
const filteredList = removeElements(originalList, elementsToRemove);

console.log("\nLista después de eliminar elementos:");
console.log(filteredList);

// Ejemplo adicional con números
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersToRemove = [2, 4, 6, 8, 11]; // 11 no está en la lista original

console.log("\n--- Ejemplo con números ---");
console.log("Lista original de números:");
console.log(numberList);

console.log("\nNúmeros a eliminar:");
console.log(numbersToRemove);

const filteredNumbers = removeElementsLambda(numberList, numbersToRemove);

console.log("\nLista de números después de eliminar:");
console.log(filteredNumbers);

// Ejemplo usando reduce
const filteredWithReduce = removeElementsReduce(originalList, elementsToRemove);

console.log("\n--- Usando reduce ---");
console.log("Resultado con reduce:");
console.log(filteredWithReduce);

// Función para mostrar el proceso paso a paso
const removeElementsVerbose = (originalList, elementsToRemove) => {
    console.log("\nProceso paso a paso:");
    return originalList.filter(element => {
        const shouldKeep = !elementsToRemove.includes(element);
        console.log(`'${element}' -> ${shouldKeep ? 'mantener' : 'eliminar'}`);
        return shouldKeep;
    });
};

console.log("\n--- Proceso detallado ---");
const detailedResult = removeElementsVerbose(['a', 'b', 'c', 'd'], ['b', 'd', 'e']);
console.log("Resultado final:", detailedResult);