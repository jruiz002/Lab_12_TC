// Problema 2: Ordenar lista de diccionarios con respecto a un key usando funciones lambda

// Función para ordenar lista de diccionarios por un key específico
const sortDictionariesByKey = (dictionaries, key) => {
    return dictionaries.sort((a, b) => a[key] - b[key]);
};

// Ejemplo del problema
const originalList = [
    {'make': 'Nokia', 'model': 216, 'color': 'Black'},
    {'make': 'Mi Max', 'model': 2, 'color': 'Gold'},
    {'make': 'Samsung', 'model': 7, 'color': 'Blue'}
];

console.log("Lista original:");
console.log(originalList);

// Ordenar por el key 'model'
const sortedList = sortDictionariesByKey(originalList, 'model');

console.log("\nLista ordenada por 'model':");
console.log(sortedList);

// Función alternativa usando una función lambda más explícita
const sortDictionariesByKeyLambda = (dictionaries, key) => {
    const sortFunction = (a, b) => a[key] - b[key];
    return dictionaries.sort(sortFunction);
};

// Ejemplo adicional ordenando por 'make' (alfabéticamente)
const sortByMake = (dictionaries) => {
    return dictionaries.sort((a, b) => a.make.localeCompare(b.make));
};

console.log("\nLista ordenada por 'make' (alfabéticamente):");
const sortedByMake = sortByMake([...originalList]); // Usar spread para no modificar el original
console.log(sortedByMake);