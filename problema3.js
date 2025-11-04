// Problema 3: Calcular matriz transpuesta usando funciones lambda

// Función para calcular la transpuesta de una matriz usando funciones lambda
const transposeMatrix = (matrix) => {
    // Obtener el número de columnas de la primera fila
    const numCols = matrix[0].length;
    
    // Crear la matriz transpuesta usando map y funciones lambda
    return Array.from({length: numCols}, (_, colIndex) => 
        matrix.map(row => row[colIndex])
    );
};

// Función alternativa más funcional
const transposeMatrixFunctional = (matrix) => {
    return matrix[0].map((_, colIndex) => 
        matrix.map(row => row[colIndex])
    );
};

// Ejemplo del problema
const originalMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz original:");
originalMatrix.forEach(row => console.log(row));

// Calcular la transpuesta
const transposedMatrix = transposeMatrix(originalMatrix);

console.log("\nMatriz transpuesta:");
transposedMatrix.forEach(row => console.log(row));

// Ejemplo adicional con matriz no cuadrada
const rectangularMatrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];

console.log("\nMatriz rectangular original:");
rectangularMatrix.forEach(row => console.log(row));

const transposedRectangular = transposeMatrixFunctional(rectangularMatrix);

console.log("\nMatriz rectangular transpuesta:");
transposedRectangular.forEach(row => console.log(row));

// Función para mostrar matriz de forma más visual
const printMatrix = (matrix, title) => {
    console.log(`\n${title}:`);
    matrix.forEach(row => {
        console.log(`[${row.join(' ')}]`);
    });
};

printMatrix(originalMatrix, "Matriz X");
printMatrix(transposedMatrix, "Matriz X^T");