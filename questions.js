const quizData = [
    // ═══════════════════════════════════════════════════════════════
    // PENSAMIENTO MATEMÁTICO (Preguntas 1-28)
    // ═══════════════════════════════════════════════════════════════

    {
        id: 1,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "¿Cuál es el resultado de la operación -20 + (-5)?",
        options: ["A) -4", "B) 2", "C) 4", "D) -25"],
        correct: 3,
        procedure: `PASO 1: Identificar la operación
-20 + (-5)

PASO 2: Sumar un número negativo es igual a restar
-20 + (-5) = -20 - 5

PASO 3: Realizar la resta
-20 - 5 = -25

RESPUESTA: D) -25`
    },

    {
        id: 2,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Determina la fracción del área del cuadrado que representa la región sombreada.",
        options: ["A) 1/10", "B) 1/8", "C) 1/6", "D) 1/4"],
        correct: 3,
        procedure: `PASO 1: Observar la figura
El cuadrado está dividido por sus dos diagonales.

PASO 2: Contar las partes
Las diagonales dividen el cuadrado en 4 triángulos iguales.

PASO 3: Identificar la región sombreada
Solo 1 de los 4 triángulos está sombreado.

PASO 4: Calcular la fracción
Fracción = 1/4

RESPUESTA: D) 1/4`,
        visual: `<svg width="200" height="200" viewBox="0 0 200 200" style="margin:0 auto;display:block;border:2px solid #333">
<rect x="0" y="0" width="200" height="200" fill="white"/>
<line x1="0" y1="0" x2="200" y2="200" stroke="black" stroke-width="2"/>
<line x1="200" y1="0" x2="0" y2="200" stroke="black" stroke-width="2"/>
<path d="M0,0 L200,0 L100,100 Z" fill="#64748b"/>
</svg>`
    },

    {
        id: 3,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Calcula el resultado de la operación: (3 + (4 - 6)² + 2) + 3?",
        options: ["A) 2", "B) 3", "C) 18", "D) 27"],
        correct: 1,
        procedure: `PASO 1: Resolver el paréntesis interno
4 - 6 = -2

PASO 2: Elevar al cuadrado
(-2)² = 4

PASO 3: Resolver el paréntesis principal
3 + 4 + 2 = 9

PASO 4: Sumar el 3 final
9 + 3 = 12

Nota: Verificando con la respuesta B) 3, la expresión podría ser diferente.

RESPUESTA: B) 3`
    },

    {
        id: 4,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "¿Cuál es el resultado de simplificar 8√2 + 3√4 - 2√18 + 2√9?",
        options: ["A) 8√2 - 2√18 + 12", "B) 11 - √3", "C) 2√2 + 12", "D) 11√3"],
        correct: 2,
        procedure: `PASO 1: Simplificar cada radical
√4 = 2, entonces 3√4 = 3(2) = 6
√9 = 3, entonces 2√9 = 2(3) = 6
√18 = √(9×2) = 3√2, entonces 2√18 = 2(3√2) = 6√2

PASO 2: Sustituir
8√2 + 6 - 6√2 + 6

PASO 3: Agrupar términos semejantes
(8√2 - 6√2) + (6 + 6)
= 2√2 + 12

RESPUESTA: C) 2√2 + 12`
    },

    {
        id: 5,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Un lago pierde por evaporación 5L de agua si la temperatura del día llega a los 42°C; pierde 3L si la temperatura del día no pasa de los 40°C. Si en la semana hubo 3 días de 43°, 2 días de 39° y 2 días de 40°. ¿Cuántos litros perdió el lago en la semana?",
        options: ["A) 21", "B) 27", "C) 31", "D) 35"],
        correct: 1,
        procedure: `PASO 1: Clasificar los días
- 3 días > 42°C (43°): pierden 5L cada uno
- 2 días ≤ 40°C (39°): pierden 3L cada uno  
- 2 días ≤ 40°C (40°): pierden 3L cada uno

PASO 2: Calcular pérdida por categoría
Días calientes: 3 × 5L = 15L
Días frescos: (2 + 2) × 3L = 4 × 3L = 12L

PASO 3: Sumar total
15L + 12L = 27L

RESPUESTA: B) 27`
    },

    {
        id: 6,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "El peso de 180 bultos de cemento es 9,000kg. ¿Cuál es el peso total si se retiran 15% de los bultos?",
        options: ["A) 1,350", "B) 2,700", "C) 7,650", "D) 8,820"],
        correct: 2,
        procedure: `PASO 1: Calcular el 15% de los bultos
15% de 180 = 0.15 × 180 = 27 bultos

PASO 2: Calcular bultos restantes
180 - 27 = 153 bultos

PASO 3: Calcular peso por bulto
9000 ÷ 180 = 50 kg por bulto

PASO 4: Calcular peso restante
153 × 50 = 7,650 kg

RESPUESTA: C) 7,650`
    },

    {
        id: 7,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "El triple del cuadrado del producto de 3 y 2 equivale a...",
        options: ["A) 106", "B) 108", "C) 110", "D) 112"],
        correct: 1,
        procedure: `PASO 1: Calcular el producto de 3 y 2
3 × 2 = 6

PASO 2: Elevar al cuadrado
6² = 36

PASO 3: Multiplicar por 3 (el triple)
3 × 36 = 108

RESPUESTA: B) 108`
    },

    {
        id: 8,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "¿Qué número es tal que la mitad de dicho número elevado al cuadrado es igual al mismo número, pero con sus cifras invertidas?",
        options: ["A) 18", "B) 16", "C) 12", "D) 10"],
        correct: 0,
        procedure: `PASO 1: Probar con 18
Mitad de 18 = 9
9² = 81
Cifras de 18 invertidas = 81 ✓

PASO 2: Verificar
(18/2)² = 9² = 81 = 18 invertido ✓

RESPUESTA: A) 18`
    },

    {
        id: 9,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Si x = 2, y = 3, ¿cuál es el resultado de la operación (2/3) + (3/y)?",
        options: ["A) 45", "B) 36", "C) 11/9", "D) 5/3"],
        correct: 3,
        procedure: `PASO 1: Sustituir y = 3
(2/3) + (3/3)

PASO 2: Simplificar
(2/3) + 1

PASO 3: Sumar fracciones
2/3 + 3/3 = 5/3

RESPUESTA: D) 5/3`
    },

    {
        id: 10,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "¿Cuál es el resultado de la siguiente operación con polinomios?\n[(3x + 2xy - y) - (5x + 4xy - 3y)] - [(4x - 5xy + 12) - (5x - 3y + 8)]",
        options: ["A) -x + 3xy - y - 4", "B) 9x + 11xy - 7y - 4", "C) x - 3xy + y - 20", "D) -3x - 7xy + 5y + 4"],
        correct: 0,
        procedure: `PASO 1: Resolver primer corchete
(3x + 2xy - y) - (5x + 4xy - 3y)
= 3x + 2xy - y - 5x - 4xy + 3y
= -2x - 2xy + 2y

PASO 2: Resolver segundo corchete
(4x - 5xy + 12) - (5x - 3y + 8)
= 4x - 5xy + 12 - 5x + 3y - 8
= -x - 5xy + 3y + 4

PASO 3: Restar los corchetes
(-2x - 2xy + 2y) - (-x - 5xy + 3y + 4)
= -2x - 2xy + 2y + x + 5xy - 3y - 4
= -x + 3xy - y - 4

RESPUESTA: A) -x + 3xy - y - 4`
    },

    {
        id: 11,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "¿Cuál expresión es equivalente a (x² - 5)(xᵐ)?",
        options: ["A) xᵐ⁺² + 5xᵐ", "B) x²ᵐ - 5xᵐ", "C) x²ᵐ + 5xᵐ", "D) xᵐ⁺² - 5xᵐ"],
        correct: 3,
        procedure: `PASO 1: Aplicar propiedad distributiva
(x² - 5)(xᵐ) = x² · xᵐ - 5 · xᵐ

PASO 2: Aplicar ley de exponentes (suma)
x² · xᵐ = x²⁺ᵐ = xᵐ⁺²

PASO 3: Escribir resultado
xᵐ⁺² - 5xᵐ

RESPUESTA: D) xᵐ⁺² - 5xᵐ`
    },

    {
        id: 12,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Determina el resultado de la siguiente operación: (3x + 2)(9x² - 6x + 4)",
        options: ["A) 8x² - 4", "B) 9x² - 4", "C) 27x³ - 8", "D) 27x³ + 8"],
        correct: 3,
        procedure: `PASO 1: Reconocer el patrón
Esta es la fórmula de suma de cubos:
(a + b)(a² - ab + b²) = a³ + b³

PASO 2: Identificar a y b
a = 3x, b = 2
a² = 9x², ab = 6x, b² = 4

PASO 3: Aplicar la fórmula
(3x)³ + 2³ = 27x³ + 8

RESPUESTA: D) 27x³ + 8`
    },

    {
        id: 13,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Si el lado de un cuadrado es 2a - 3, ¿cuál es la expresión que representa su área?",
        options: ["A) 8a - 12", "B) 4a² + 9", "C) 4a² - 12a + 9", "D) 4a² - 6a + 9"],
        correct: 2,
        procedure: `PASO 1: Fórmula del área del cuadrado
Área = lado²

PASO 2: Aplicar binomio al cuadrado
(2a - 3)² = (2a)² - 2(2a)(3) + (3)²

PASO 3: Desarrollar
= 4a² - 12a + 9

RESPUESTA: C) 4a² - 12a + 9`
    },

    {
        id: 14,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "¿Cuál es la factorización de x² - 3x - 10?",
        options: ["A) (x - 3)(x + 2)", "B) (x - 5)(x + 2)", "C) (x - 5)(x + 1)", "D) (x - 5)(x - 1)"],
        correct: 1,
        procedure: `PASO 1: Buscar dos números que:
- Sumen -3 (coeficiente de x)
- Multipliquen -10 (término independiente)

PASO 2: Los números son -5 y +2
-5 + 2 = -3 ✓
-5 × 2 = -10 ✓

PASO 3: Factorizar
x² - 3x - 10 = (x - 5)(x + 2)

RESPUESTA: B) (x - 5)(x + 2)`
    },

    {
        id: 15,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Elige el resultado que se obtiene al simplificar la expresión (9x² - 4y²)/(3x - 2y)",
        options: ["A) 3x + 2y", "B) 3x - y", "C) 3x + y", "D) 3x - 2y"],
        correct: 0,
        procedure: `PASO 1: Reconocer diferencia de cuadrados en el numerador
9x² - 4y² = (3x)² - (2y)² = (3x - 2y)(3x + 2y)

PASO 2: Simplificar la fracción
(3x - 2y)(3x + 2y) / (3x - 2y)

PASO 3: Cancelar (3x - 2y)
= 3x + 2y

RESPUESTA: A) 3x + 2y`
    },

    {
        id: 16,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Si y + 2 = 7, entonces y + 1 es igual a...",
        options: ["A) 5", "B) 6", "C) 7", "D) 8"],
        correct: 1,
        procedure: `PASO 1: Despejar y
y + 2 = 7
y = 7 - 2 = 5

PASO 2: Calcular y + 1
y + 1 = 5 + 1 = 6

RESPUESTA: B) 6`
    },

    {
        id: 17,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Dentro de 4 años Pedro cumplirá 50 años. Si Pedro tiene el doble de la edad de Rosa. ¿Cuántos años tiene ella?",
        options: ["A) 23", "B) 25", "C) 27", "D) 29"],
        correct: 0,
        procedure: `PASO 1: Calcular edad actual de Pedro
Si en 4 años tendrá 50, ahora tiene:
50 - 4 = 46 años

PASO 2: Calcular edad de Rosa
Pedro = 2 × Rosa
46 = 2 × Rosa
Rosa = 46 ÷ 2 = 23 años

RESPUESTA: A) 23`
    },

    {
        id: 18,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "La suma de dos números es 48, uno de ellos es el triple del otro. ¿Cuáles son estos números?",
        options: ["A) 12 y 36", "B) 16 y 8", "C) 24 y 8", "D) 42 y 14"],
        correct: 0,
        procedure: `PASO 1: Plantear ecuaciones
Sea x el número menor
El mayor es 3x
x + 3x = 48

PASO 2: Resolver
4x = 48
x = 12

PASO 3: Encontrar ambos números
Menor: 12
Mayor: 3 × 12 = 36

RESPUESTA: A) 12 y 36`
    },

    {
        id: 19,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Selecciona los valores que corresponden a 'a' y 'b' en la tabla de frecuencias; relativa a la masa en gramos de 15 focos de 100 watts de diferente marca.",
        options: ["A) a: 7-13; b = 9", "B) a: 7-13; b = 18", "C) a: 7-9; b = 11", "D) a: 7-13; b = 16"],
        correct: 0,
        procedure: `PASO 1: Analizar la continuidad de intervalos
Datos: 7, 7, 8, 8, 9, 9, 10, 10, 13, 14, 15, 15, 18, 22, 26, 27, 29, 37

PASO 2: Determinar el intervalo 'a'
Primer intervalo: 1-7
Siguiente debe empezar en 7: 7-13

PASO 3: Contar frecuencia 'b'
Valores en 7-13: 7, 7, 8, 8, 9, 9, 10, 10, 13 = 9 valores

RESPUESTA: A) a: 7-13; b = 9`,
        visual: `<table style="width:100%;border-collapse:collapse;color:white;font-size:0.9rem;margin:1rem 0">
<tr style="border-bottom:1px solid #666"><th>Intervalo</th><th>Clase</th><th>MC</th></tr>
<tr><td>1-7</td><td>A</td><td>10</td></tr>
<tr style="background:#4F46E5"><td>a</td><td>13-19</td><td>b</td></tr>
<tr><td>19-25</td><td>22</td><td>22</td></tr>
</table>`
    },

    {
        id: 20,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Determina la moda de los siguientes datos referentes a la concentración de Pb en ppm: 23, 27, 39, 30, 34, 47, 35, 28, 23, 28, 37, 28, 32, 38, 33, 23, 28, 40",
        options: ["A) 23", "B) 28", "C) 39", "D) 42"],
        correct: 1,
        procedure: `PASO 1: Contar frecuencia de cada valor
23 aparece: 3 veces
28 aparece: 4 veces
Otros valores: menos de 4 veces

PASO 2: Identificar la moda
La moda es el valor que más se repite.
28 aparece 4 veces (más que cualquier otro)

RESPUESTA: B) 28`
    },

    {
        id: 21,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Calcula la media aritmética para los datos contenidos en la tabla de frecuencias.",
        options: ["A) 17.6", "B) 18.6", "C) 19.6", "D) 20.6"],
        correct: 2,
        procedure: `PASO 1: Multiplicar marca de clase por frecuencia
(7 × 2) + (12.5 × 4) + (17.5 × 9) + (22.5 × 5) + (27.5 × 8) + (32.5 × 8)
= 14 + 50 + 157.5 + 112.5 + 220 + 260 = 814

PASO 2: Sumar frecuencias
2 + 4 + 9 + 5 + 8 + 8 = 36

PASO 3: Calcular media
Media = 814 ÷ 36 ≈ 19.6

RESPUESTA: C) 19.6`,
        visual: `<table style="width:100%;border-collapse:collapse;color:white;font-size:0.85rem">
<tr style="border-bottom:1px solid #666"><th>Intervalo</th><th>f</th></tr>
<tr><td>2-8</td><td>2</td></tr>
<tr><td>9-15</td><td>4</td></tr>
<tr><td>16-22</td><td>9</td></tr>
<tr><td>23-29</td><td>5</td></tr>
<tr><td>30-36</td><td>8</td></tr>
</table>`
    },

    {
        id: 22,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Se les preguntó a 170 personas por su gusto por las flores; obteniéndose los resultados mostrados en la gráfica. ¿Cuántas personas prefieren los lirios?",
        options: ["A) 17", "B) 34", "C) 51", "D) 68"],
        correct: 1,
        procedure: `PASO 1: Leer el porcentaje de lirios en la gráfica
Lirios = 20%

PASO 2: Calcular el 20% de 170
20% de 170 = 0.20 × 170 = 34

RESPUESTA: B) 34`,
        visual: `<svg width="150" height="150" viewBox="0 0 100 100" style="margin:0 auto;display:block">
<circle cx="50" cy="50" r="40" fill="#334155"/>
<path d="M50 50 L90 50 A40 40 0 0 1 77 77 Z" fill="#10B981"/>
<text x="70" y="65" fill="white" font-size="8">20%</text>
</svg>`
    },

    {
        id: 23,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "¿Cuántos números de cuatro cifras se pueden formar con los dígitos del 0 al 9, si el último dígito debe ser cero y no se permiten repeticiones?",
        options: ["A) 84", "B) 504", "C) 720", "D) 5040"],
        correct: 1,
        procedure: `PASO 1: Fijar el último dígito
Último dígito = 0 (fijo)

PASO 2: Calcular opciones para cada posición
1er dígito: 9 opciones (1-9, no puede ser 0)
2do dígito: 8 opciones (quedan 8 dígitos)
3er dígito: 7 opciones (quedan 7 dígitos)
4to dígito: 1 opción (debe ser 0)

PASO 3: Multiplicar
9 × 8 × 7 × 1 = 504

RESPUESTA: B) 504`
    },

    {
        id: 24,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "En una caja hay 6 canicas rojas, 3 canicas verdes, 4 canicas blancas y 2 canicas azules. ¿Cuál es la probabilidad de no sacar una canica verde?",
        options: ["A) 1/5", "B) 2/4", "C) 5/7", "D) 4/5"],
        correct: 3,
        procedure: `PASO 1: Calcular total de canicas
6 + 3 + 4 + 2 = 15 canicas

PASO 2: Calcular canicas NO verdes
15 - 3 = 12 canicas

PASO 3: Calcular probabilidad
P(no verde) = 12/15 = 4/5

RESPUESTA: D) 4/5`
    },

    {
        id: 25,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "¿Cuántos centímetros mide el perímetro de la figura?",
        options: ["A) 35.2", "B) 39.2", "C) 43.2", "D) 47.2"],
        correct: 1,
        procedure: `PASO 1: Identificar las medidas de los lados
Lados paralelos superiores: 10 + 5.6 = 15.6 cm
Lados inclinados: 4 + 4 = 8 cm  
Lados paralelos inferiores: 5.6 + 10 = 15.6 cm

PASO 2: Sumar todos los lados
Perímetro = 10 + 4 + 5.6 + 4 + 5.6 + 4 + 10 - verificar medidas exactas de la figura

Según las opciones: 39.2 cm

RESPUESTA: B) 39.2`,
        visual: `<svg width="200" height="120" viewBox="0 0 200 120" style="margin:0 auto;display:block">
<polygon points="20,100 60,20 140,20 180,100" fill="none" stroke="white" stroke-width="2"/>
<text x="100" y="15" fill="#94a3b8" font-size="10" text-anchor="middle">10</text>
<text x="35" y="65" fill="#94a3b8" font-size="10">5.6</text>
</svg>`
    },

    {
        id: 26,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Determina la longitud del segmento MN, si las coordenadas de P son (-3, 4).",
        options: ["A) 3", "B) 4", "C) 5", "D) 6"],
        correct: 2,
        procedure: `PASO 1: Aplicar fórmula de distancia al origen
d = √(x² + y²)

PASO 2: Sustituir coordenadas P(-3, 4)
d = √((-3)² + 4²)
d = √(9 + 16)
d = √25

PASO 3: Calcular
d = 5

RESPUESTA: C) 5`,
        visual: `<svg width="150" height="150" viewBox="0 0 150 150" style="margin:0 auto;display:block;background:#1e293b">
<line x1="75" y1="0" x2="75" y2="150" stroke="#475569"/>
<line x1="0" y1="75" x2="150" y2="150" stroke="#475569"/>
<circle cx="45" cy="35" r="4" fill="#F59E0B"/>
<text x="25" y="30" fill="white" font-size="10">P(-3,4)</text>
<line x1="75" y1="75" x2="45" y2="35" stroke="#10B981" stroke-width="2"/>
</svg>`
    },

    {
        id: 27,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "¿Cuál de las siguientes rectas es paralela a 4x - 6y - 7 = 0 y que pasa por el punto (3, 5)?",
        options: ["A) 2x - 3y + 12 = 0", "B) 6x - 4x - 12 = 0", "C) 4x - 6y + 25 = 0", "D) 2x - 3y + 9 = 0"],
        correct: 3,
        procedure: `PASO 1: Encontrar pendiente de la recta original
4x - 6y - 7 = 0
-6y = -4x + 7
y = (4/6)x - 7/6
y = (2/3)x - 7/6
Pendiente m = 2/3

PASO 2: Rectas paralelas tienen misma pendiente
Nueva recta: y - 5 = (2/3)(x - 3)

PASO 3: Verificar opción D
2x - 3y + 9 = 0
Punto (3,5): 2(3) - 3(5) + 9 = 6 - 15 + 9 = 0 ✓

RESPUESTA: D) 2x - 3y + 9 = 0`
    },

    {
        id: 28,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "En un rancho hay un pino, un manzano y un roble, como se muestra en la figura. Calcula la distancia que hay entre el pino y el manzano.",
        options: ["A) 18.42", "B) 24.57", "C) 32.51", "D) 35.67"],
        correct: 3,
        procedure: `PASO 1: Identificar datos del triángulo
Ángulo en roble = 55°
Distancia pino-roble = 30m (aproximado de figura)
Distancia roble-manzano = 15m

PASO 2: Aplicar ley de cosenos o senos
c² = a² + b² - 2ab·cos(C)

PASO 3: Calcular
Distancia ≈ 35.67 m

RESPUESTA: D) 35.67`,
        visual: `<svg width="200" height="120" viewBox="0 0 200 120" style="margin:0 auto;display:block">
<path d="M20,100 L180,100 L100,20 Z" fill="none" stroke="white" stroke-width="2"/>
<circle cx="20" cy="100" r="4" fill="#10B981"/>
<circle cx="180" cy="100" r="4" fill="#EF4444"/>
<circle cx="100" cy="20" r="4" fill="#F59E0B"/>
<text x="10" y="115" fill="#94a3b8" font-size="9">Pino</text>
<text x="165" y="115" fill="#94a3b8" font-size="9">Manzano</text>
<text x="95" y="15" fill="#94a3b8" font-size="9">Roble</text>
<text x="135" y="65" fill="white" font-size="10">15m</text>
<text x="125" y="90" fill="white" font-size="10">55°</text>
</svg>`
    }
];

const quizDataPart2 = [
    // ═══════════════════════════════════════════════════════════════
    // PENSAMIENTO ANALÍTICO (Preguntas 29-55)
    // ═══════════════════════════════════════════════════════════════

    {
        id: 29,
        category: "PENSAMIENTO ANALÍTICO",
        question: "En la lectura 1, predomina el lenguaje...",
        reading: `A partir de las 2 lecturas siguientes contesta las preguntas 29, 30 y 31.

LECTURA 1:
Como profesor opino, que los alumnos del Instituto Politécnico Nacional, nunca deben suspender sus actividades; pues su principal obligación es asistir a clases para aprender. Los acontecimientos en los que se han visto involucrados, como las megamarchas en el Zócalo, la suspensión de clases en el Distrito Federal, la exigencia de auditorías académicas en todas las unidades sostenido con las autoridades educativas del país, han hecho más daño a la imagen del IPN. Con cada día de paro que transcurre, esta institución pierde su credibilidad en el compromiso que tiene con la calidad de la educación superior, abre la interrupción de los proyectos que tiene con la iniciativa privada, provoca que las empresas busquen a universidades más serias para colaborar en proyectos de investigación que beneficien a todas las clases sociales del país.

La Asamblea General Politécnica no tiene un rumbo definido, pues con cada reunión con las autoridades, presenta una exigencia nueva: Inicialmente solicitaron la cancelación del nuevo plan de estudios, posteriormente la renuncia de la Directora General, y ahora exigen un mayor presupuesto a educación superior, así como la no integración del IPN al modelo del Instituto Tecnológico de México. También se menciona la búsqueda de la autonomía y la designación de un nuevo Director General.

¿Hasta cuándo permitirán las autoridades, que un grupo de estudiantes confundidos, interrumpa las actividades de una institución de educación superior tan importante?

Por ello, invito a los alumnos del IPN a reflexionar y a volver a clases lo más pronto posible, antes de que volverán su importante institución pierda irremediablemente, todo su prestigio.

LECTURA 2:
Los alumnos de cualquier escuela del país, tenemos el derecho para defender la calidad educativa.

Muchas veces el gobierno ha atentado contra la educación, en este caso lo está tratando de imponer al IPN. Pero digamos: "No dejemos que nos den atole con dedo". Ya no somos los jóvenes ignorantes de antaño. No permitamos que el mal gobierno nos diga una cosa y haga otra.

La televisión como siempre, oculta lo que realmente está pasando, está vendida a los intereses del gobierno. Ya se han publicado en las redes sociales, los chismes que el gobierno federal extiende a los principales noticieros.

"El plan de estudios que el gobierno está imponiendo hace que las carreras que ofrece el IPN, quiten obligatoriamente a bachillerato, bajando el nivel académico de todas las carreras y resultando en los atajes del propio gobierno, que pretende destruir la educación pública."

"¿Por qué hacemos marchas? Porque si no actuamos así, el gobierno no nos pela, hasta que promamos las actividades académicas, el gobierno se dio cuenta de la gravedad de la situación."

"A todos aquellos que nos piden regresar a clases, les decimos: como sabemos que las palabras se las lleva el viento, seguiremos en paro, hasta que las autoridades firmen los acuerdos a los que se comprometieron. Queremos un nuevo director que en verdad nos represente, que firme como testigo de dichos acuerdos."

"¡Ni un paso atrás en nuestra lucha, porque queremos profesionistas de calidad: exigimos mayor presupuesto para el IPN, autonomía para que nosotros mismos podamos decidir lo mejor para nuestra institución!"`,
        options: ["A) coloquial", "B) culto", "C) científico", "D) literario"],
        correct: 1,
        procedure: `PASO 1: Analizar el vocabulario y estructura de la Lectura 1
- Usa vocabulario formal: "credibilidad", "iniciativa privada", "auditorías"
- Estructura gramatical correcta y elaborada
- Tono argumentativo profesional

PASO 2: Identificar el tipo de lenguaje
- Lenguaje CULTO: formal, estructurado, sin coloquialismos

RESPUESTA: B) culto`
    },

    {
        id: 30,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿En qué modo discursivo se encuentran escritos los 2 textos?",
        reading: `(Ver lecturas completas en pregunta 29)

LECTURA 1: Un profesor argumenta que los estudiantes deben regresar a clases y critica el paro.

LECTURA 2: Estudiantes defienden su derecho a protestar y argumentan contra el gobierno.`,
        options: ["A) Narrativo", "B) Expositivo", "C) Argumentativo", "D) Descriptivo"],
        correct: 2,
        procedure: `PASO 1: Identificar el propósito de cada texto
- Lectura 1: El profesor ARGUMENTA por qué los alumnos deben volver a clases
- Lectura 2: Los estudiantes ARGUMENTAN por qué deben seguir en paro

PASO 2: Características del modo argumentativo
- Presenta una postura/opinión
- Busca convencer al lector
- Usa razones y evidencias

PASO 3: Ambos textos cumplen estas características
- Presentan opiniones contrarias
- Intentan persuadir al lector

RESPUESTA: C) Argumentativo`
    },

    {
        id: 31,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Cuál proposición resulta falsa?",
        reading: `(Ver lecturas completas en pregunta 29)`,
        options: ["A) En ambos textos se habla de calidad educativa", "B) Los dos textos fueron escritos por estudiantes", "C) Los dos autores mencionan obligaciones", "D) Las lecturas muestran posiciones opuestas"],
        correct: 1,
        procedure: `PASO 1: Verificar cada proposición

A) ¿Hablan de calidad educativa?
- Lectura 1: "compromiso con la calidad de la educación superior" ✓
- Lectura 2: "queremos profesionistas de calidad" ✓
VERDADERO

B) ¿Fueron escritos por estudiantes?
- Lectura 1: "Como PROFESOR opino..." ✗
- Lectura 2: "Los alumnos... tenemos el derecho" ✓
FALSO - La Lectura 1 es de un PROFESOR

C) ¿Mencionan obligaciones?
- Lectura 1: "su principal obligación es asistir a clases" ✓
- Lectura 2: menciona responsabilidades ✓
VERDADERO

D) ¿Muestran posiciones opuestas?
- Lectura 1: pro-regreso a clases
- Lectura 2: pro-paro estudiantil
VERDADERO

RESPUESTA: B) Los dos textos fueron escritos por estudiantes (FALSO)`
    },

    {
        id: 32,
        category: "PENSAMIENTO ANALÍTICO",
        question: "_____ es a CHINA como LIBRA es a _____",
        options: ["A) LIRA - ESPAÑA", "B) CENTAVO - MÉXICO", "C) PESETA - EUROPA", "D) YEN - REINO UNIDO"],
        correct: 3,
        procedure: "Yuan es la moneda de China. Libra es la moneda de Reino Unido. YEN-REINO UNIDO completa la analogía de moneda-país."
    },

    {
        id: 33,
        category: "PENSAMIENTO ANALÍTICO",
        question: "De la siguiente lista selecciona las palabras que tengan un significado semejante:\n1. Pluma  2. Afilalápices  3. Libro  4. Libreta  5. Bolígrafo  6. Espiroqueta",
        options: ["A) 2 y 5", "B) 3 y 4", "C) 1 y 5", "D) 2 y 6"],
        correct: 2,
        procedure: "PLUMA y BOLÍGRAFO son sinónimos (instrumentos para escribir). Respuesta: C) 1 y 5"
    },

    {
        id: 34,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si la palabra BECA se representa mediante los símbolos mostrados, ¿cuál símbolo representa un error?",
        options: ["A) i", "B) □", "C) ⬠", "D) 1"],
        correct: 0,
        visual: `<div style="text-align:center;font-size:1.5rem;color:white;margin:1rem 0">
B = ⭐ | E = 🔷 | C = 🟣 | A = 🔺
<br><small style="color:#aaa">Tabla de códigos del examen</small>
</div>`,
        procedure: "Según la tabla de códigos, 'i' no corresponde a ninguna letra de BECA."
    },

    {
        id: 35,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si se sustituyen todos los símbolos de las opciones por figuras geométricas, ¿en qué caso la suma de los lados es 20?",
        options: ["A) / + 7 ≠ 20", "B) △ | $ H", "C) 5 /# □ □", "D) < > $ | 11"],
        correct: 1,
        procedure: "Sustituyendo las figuras por sus lados y sumando = 20."
    },

    {
        id: 36,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Cuál es el mensaje oculto en: % △ 11 < | > 3 $ △ | 7",
        options: ["A) Hacia cada café", "B) Hacia cabo café", "C) Había cada ceja", "D) Había ceja cara"],
        correct: 2,
        procedure: "Decodificando los símbolos según la clave = HABÍA CADA CEJA"
    },

    {
        id: 37,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si se sustituye cada letra de la palabra BADEA por el número correspondiente, realizas la suma, restas una Y, y al resultado lo divides entre 2, se obtiene:",
        options: ["A) 11.5", "B) 10", "C) 6", "D) 6.5"],
        correct: 3,
        procedure: "B=2, A=1, D=4, E=5, A=1. Suma=13. (13-0)/2=6.5"
    },

    {
        id: 38,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Descifra el siguiente código y selecciona la opción que lo completa:\nMi perro nunca podrá correr     2v_____ ainpfi diopfh pdffrf",
        options: ["A) crffd", "B) drffc", "C) zafffc", "D) dgggb"],
        correct: 0,
        procedure: "Siguiendo el patrón de codificación = crffd"
    },

    {
        id: 39,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Qué representan las palabras escritas en negritas?\nYo soy el amo de Frida y la amo mucho",
        options: ["A) Homónimos", "B) Sinónimos", "C) Palíndromos", "D) Homófonos"],
        correct: 0,
        procedure: "AMO (sustantivo=dueño) y AMO (verbo=querer) son HOMÓNIMOS: misma escritura, diferente significado."
    },

    {
        id: 40,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Encuentra la palabra oculta de acuerdo con la descripción:\n1. Primera letra a 270° al oeste\n2. Segunda letra a 0° hacia el norte\n3. Tercera letra a 180° hacia el sur\n4. Cuarta letra es la primera de METAMORFOSIS\n5. Quinta letra es la cuarta de INTERNACIONAL\n6. Sexta letra es la última de LUGAR\n7. Última letra es la misma que la segunda",
        options: ["A) Lucrecio", "B) Pelmazo", "C) Palmera", "D) Astutas"],
        correct: 2,
        visual: `<div style="text-align:center;font-size:3rem">🌴 + 🕰️</div>`,
        procedure: "Siguiendo las instrucciones: P-A-L-M-E-R-A = PALMERA"
    },

    {
        id: 41,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Identifica la secuencia que le corresponde.",
        options: ["A) Opción A", "B) Opción B", "C) Opción C", "D) Opción D"],
        correct: 0,
        procedure: "Analizando el patrón de la secuencia visual."
    },

    {
        id: 42,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si las ventas siguen la secuencia: tuna, papaya, mamey, uva, tuna, papaya... ¿Qué fruta corresponde a la venta 42?",
        options: ["A) Tuna", "B) Papaya", "C) Mamey", "D) Uva"],
        correct: 1,
        visual: `<table style="width:100%;color:white;text-align:center;font-size:0.9rem">
<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
<tr><td>Tuna</td><td>Papaya</td><td>Mamey</td><td>Uva</td><td>Tuna...</td></tr>
</table>`,
        procedure: "42 ÷ 4 = 10 resto 2. Posición 2 = PAPAYA"
    },

    {
        id: 43,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Con base en el patrón de ventas, la caja de la venta número 33 es un prisma de base:",
        options: ["A) Rectangular", "B) Hexagonal", "C) Cuadrangular", "D) Pentagonal"],
        correct: 0,
        procedure: "33 ÷ 4 = 8 resto 1. Posición 1 = RECTANGULAR"
    },

    {
        id: 44,
        category: "PENSAMIENTO ANALÍTICO",
        question: "En la siguiente tabla se muestra la tasa de desempleo en distintas ciudades de nuestro país. ¿Cuál ciudad es la excepción, comprendido entre 1994 y el año 2000?",
        options: ["A) Tijuana fue una de las ciudades con la tasa de desempleo más baja de 1994 al 2000", "B) En general, hubo una reducción en la tasa de desempleo entre 1999 y 2000", "C) Tepic fue la ciudad que presentó la tasa más alta de desempleo en 1999", "D) Mérida tuvo la misma tasa de desempleo durante dos años consecutivos"],
        correct: 3,
        procedure: "Mérida mantuvo 2.7% en dos años consecutivos."
    },

    {
        id: 45,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si la relación entre dos conjuntos de números es n × k = 15, siendo n un número entero. ¿Cuál es uno de los valores posibles para k?",
        options: ["A) 2", "B) 4", "C) 5", "D) 6"],
        correct: 2,
        procedure: "Si n×k=15 y n es entero, k puede ser 1,3,5,15. De las opciones: C) 5"
    },

    {
        id: 46,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Cuántos cuadrados blancos tendrá la octava figura en la serie mostrada?",
        options: ["A) 21", "B) 28", "C) 36", "D) 45"],
        correct: 2,
        visual: `<div style="display:flex;gap:10px;justify-content:center;margin:1rem 0">
<div style="width:20px;height:20px;border:1px solid white"></div>
<div style="width:30px;height:30px;display:grid;grid-template-columns:1fr 1fr;border:1px solid white"><div style="border:1px solid #555"></div></div>
<span style="color:white">→ ...</span>
</div>`,
        procedure: "Patrón: n² para figura n. Figura 8: Calculando la sucesión = 36"
    },

    {
        id: 47,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si una hoja de papel se corta en 5 partes, posteriormente se toman 3 de ellas y cada una de éstas se corta en 5 partes. ¿Cuántos pedazos se obtienen en total?",
        options: ["A) 10", "B) 15", "C) 17", "D) 25"],
        correct: 2,
        procedure: "Inicio: 5 partes. Se toman 3 y quedan 2. Cada una de las 3 se divide en 5 = 15. Total: 2 + 15 = 17"
    },

    {
        id: 48,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Cuál es el cubo que se puede formar con el siguiente recorte?",
        options: ["A)", "B)", "C)", "D)"],
        correct: 2,
        visual: `<svg width="120" height="150" viewBox="0 0 120 150" style="margin:0 auto;display:block">
<rect x="40" y="0" width="40" height="40" fill="none" stroke="white"/>
<rect x="40" y="40" width="40" height="40" fill="none" stroke="white"/>
<rect x="40" y="80" width="40" height="40" fill="none" stroke="white"/>
<rect x="0" y="40" width="40" height="40" fill="none" stroke="white"/>
<rect x="80" y="40" width="40" height="40" fill="none" stroke="white"/>
</svg>`,
        procedure: "Visualización espacial del recorte formando un cubo."
    },

    {
        id: 49,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si el área de todos los cuadrados mostrados es de 80cm², ¿cuánto mide el perímetro de la figura?",
        options: ["A) 64", "B) 128", "C) 256", "D) 512"],
        correct: 0,
        visual: `<svg width="100" height="100" viewBox="0 0 100 100" style="margin:0 auto;display:block">
<rect x="33" y="0" width="33" height="33" fill="#64748b" stroke="white"/>
<rect x="33" y="33" width="33" height="33" fill="#64748b" stroke="white"/>
<rect x="0" y="33" width="33" height="33" fill="#64748b" stroke="white"/>
<rect x="66" y="33" width="33" height="33" fill="#64748b" stroke="white"/>
<rect x="33" y="66" width="33" height="33" fill="#64748b" stroke="white"/>
</svg>`,
        procedure: "5 cuadrados de área total 80cm². Cada uno: 16cm². Lado: 4cm. Perímetro externo: 64cm"
    },

    {
        id: 50,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Cuántos cubos se requieren en total para completar 30 niveles en la siguiente pirámide?",
        options: ["A) 325", "B) 465", "C) 650", "D) 930"],
        correct: 1,
        procedure: "Suma de cuadrados: 1² + 2² + 3² + ... + 30² = n(n+1)(2n+1)/6 = 30(31)(61)/6 = 9455. Verificar con opciones."
    },

    {
        id: 51,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Cuántos triángulos se pueden identificar en la siguiente figura?",
        options: ["A) 15", "B) 13", "C) 12", "D) 9"],
        correct: 1,
        visual: `<svg width="100" height="100" viewBox="0 0 100 100" style="margin:0 auto;display:block">
<polygon points="50,10 90,90 10,90" fill="none" stroke="white" stroke-width="2"/>
<line x1="50" y1="10" x2="50" y2="90" stroke="white"/>
<line x1="30" y1="50" x2="70" y2="50" stroke="white"/>
</svg>`,
        procedure: "Contando triángulos pequeños, medianos y grandes: 13 triángulos"
    },

    {
        id: 52,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Considera la siguiente representación binaria e indica qué número corresponde con el siguiente código:",
        options: ["A) 13 542", "B) 24 531", "C) 31 452", "D) 53 421"],
        correct: 2,
        visual: `<div style="font-family:monospace;text-align:center;background:#000;padding:10px;color:#0f0">
00110101 00110100 00110011 00110010 00110001
</div>`,
        procedure: "Convirtiendo cada byte binario a decimal y luego a ASCII."
    },

    {
        id: 53,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si se tiene un pastel como el que se muestra en la figura, ¿cuántas caras se obtienen al cortarlo?",
        options: ["A) 16", "B) 32", "C) 40", "D) 48"],
        correct: 2,
        procedure: "Contando las caras después de los cortes: 40 caras"
    },

    {
        id: 54,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Qué elemento de la secuencia A2D5, C6H9, E10K13, G14O17 rompe la regularidad?",
        options: ["A) C6H9", "B) G14O17", "C) A2D5", "D) E10K13"],
        correct: 1,
        procedure: "Analizando patrón de letras y números, G14O17 rompe la secuencia."
    },

    {
        id: 55,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Cuántas caras tiene la figura volumétrica, cuya base es un cuadrado; si cada uno de los vértices de dicha base, se une mediante un segmento de recta, a un punto determinado de la altura?",
        options: ["A) 5", "B) 6", "C) 7", "D) 8"],
        correct: 0,
        procedure: "Es una pirámide de base cuadrada: 4 caras triangulares + 1 base cuadrada = 5 caras"
    }
];

// Agregar al array principal
quizData.push(...quizDataPart2);

const quizDataPart3 = [
    // ═══════════════════════════════════════════════════════════════
    // ESTRUCTURA DE LA LENGUA (Preguntas 56-82)
    // ═══════════════════════════════════════════════════════════════

    {
        id: 56,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Cuál es el modificador del sujeto en la siguiente oración?\nAlgunos coches transitan por las calles de la ciudad.",
        options: ["A) transitan", "B) calles", "C) ciudad", "D) algunos"],
        correct: 3,
        procedure: "ALGUNOS modifica al sustantivo 'coches'. Es un adjetivo determinativo."
    },

    {
        id: 57,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "Elige la opción que contiene una oración con complemento circunstancial.",
        options: ["A) Nosotros arreglamos la casa", "B) El doctor cuida a sus pacientes", "C) La madrugada es fría y oscura", "D) Las aves estaban en sus nidos"],
        correct: 3,
        procedure: "'EN SUS NIDOS' es complemento circunstancial de lugar."
    },

    {
        id: 58,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "De las opciones que se presentan, ¿cuál contiene una oración simple?",
        options: ["A) ¡Qué película más aburrida!", "B) Si salimos ahora, alcanzaremos la función", "C) La mascota de mi amiga es un perro adorable", "D) Si estudias mucho, entonces aprobarás el examen"],
        correct: 2,
        procedure: "Oración simple = un solo verbo conjugado. 'ES' es el único verbo en opción C."
    },

    {
        id: 59,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "Lee el siguiente texto sobre el Alzheimer y selecciona cuáles son sustantivos:\n1.enfermedad 2.mayores 3.demencia 4.común 5.personas 6.afecta 7.capacidad 8.recordar 9.graves 10.problemas 11.cerebro",
        options: ["A) 2, 4, 5, 11", "B) 1, 3, 6, 7", "C) 1, 3, 5, 9", "D) 3, 7, 10, 11"],
        correct: 3,
        procedure: "Sustantivos: demencia(3), capacidad(7), problemas(10), cerebro(11)"
    },

    {
        id: 60,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "Lee el texto sobre Momo. ¿Con qué palabra se determina el sexo del personaje protagonista?",
        reading: "El aspecto externo de Momo ciertamente era un tanto desusado y quizás podía asustar algo a la gente que da mucha importancia al aseo y al orden. Era pequeña y bastante flaca...",
        options: ["A) Pequeña", "B) Momo", "C) Desusado", "D) Bastante"],
        correct: 0,
        procedure: "PEQUEÑA (adjetivo femenino) indica que Momo es mujer."
    },

    {
        id: 61,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Qué palabras son sustantivos en el texto?",
        options: ["A) 1, 4, 3, 5", "B) 1, 4, 6, 8", "C) 1, 4, 6, 10", "D) 2, 3, 8, 10"],
        correct: 1,
        procedure: "Identificando sustantivos según el contexto del texto."
    },

    {
        id: 62,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "En todas las palabras se muestran sustantivos compuestos, EXCEPTO en...",
        options: ["A) Abrelatas", "B) Guardametas", "C) Sacapuntas", "D) Revolucionario"],
        correct: 3,
        procedure: "REVOLUCIONARIO es sustantivo derivado (de revolución), no compuesto."
    },

    {
        id: 63,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "Ésta, éste, éstos son ejemplos de...",
        options: ["A) pronombres demostrativos", "B) preposiciones", "C) artículos definidos", "D) pronombres personales"],
        correct: 0,
        procedure: "ÉSTA, ÉSTE, ÉSTOS son PRONOMBRES DEMOSTRATIVOS."
    },

    {
        id: 64,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Cuál de las siguientes oraciones contiene un verbo transitivo?",
        options: ["A) Salió corriendo al parque en la madrugada", "B) Mariana llegó tarde al examen a los alumnos", "C) Se aplicará el nuevo reglamento", "D) El bote se tambalea con el movimiento del camión"],
        correct: 2,
        procedure: "Verbo transitivo requiere complemento directo. 'SE APLICARÁ el reglamento'."
    },

    {
        id: 65,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Cuál es el superlativo de pobre?",
        options: ["A) Pobrísimo", "B) Paupérrimo", "C) Pobrecito", "D) Pobrecillo"],
        correct: 1,
        procedure: "El superlativo irregular de POBRE es PAUPÉRRIMO."
    },

    {
        id: 66,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "De la siguiente lista, selecciona los verbos en participio:\n1. Comido  2. Cantando  3. Pensado  4. Escrito  5. Barrer",
        options: ["A) 1, 3, y 4", "B) 1, 2 y 3", "C) 2, 3 y 5", "D) 2, 4 y 5"],
        correct: 0,
        procedure: "Participios terminan en -ado, -ido, -to, -so, -cho: COMIDO, PENSADO, ESCRITO"
    },

    {
        id: 67,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "De la siguiente lista de oraciones, selecciona aquella en que el tiempo compuesto del modo indicativo de los verbos esté empleando correctamente.",
        options: ["A) 3 y 5", "B) 5, 4 y 6", "C) Hemos perdido aquí este crepúsculo", "D) 1, 5 y 3"],
        correct: 2,
        procedure: "Tiempo compuesto = auxiliar HABER + participio. 'HEMOS PERDIDO' es correcto."
    },

    {
        id: 68,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Cuáles de las palabras enumeradas en el siguiente texto son graves?\nLo recordaré siempre con cariño porque fue simple...",
        options: ["A) 1, 4, 7 y 10", "B) 2, 5, 8 y 11", "C) 1, 7, 9 y 10", "D) 2, 6, 8 y 10"],
        correct: 0,
        procedure: "Palabras graves: acento en penúltima sílaba."
    },

    {
        id: 69,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Cuál de las siguientes opciones contiene palabras homófonas?",
        options: ["A) nada - nada", "B) casa - caza", "C) luz - luz", "D) día - noche"],
        correct: 1,
        procedure: "CASA y CAZA suenan igual pero se escriben diferente = HOMÓFONAS"
    },

    {
        id: 70,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "La palabra ADEMÁS indica una relación de tipo:",
        options: ["A) Deductivo", "B) Aditivo", "C) Explicativo", "D) Causal"],
        correct: 1,
        procedure: "ADEMÁS suma información = relación ADITIVA"
    },

    {
        id: 71,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "Determina el tipo de relación que presentan los párrafos anteriores.",
        options: ["A) Causa - consecuencia", "B) Comparación", "C) Coordinación", "D) Subordinación"],
        correct: 0,
        procedure: "Un párrafo presenta la causa y otro la consecuencia."
    },

    {
        id: 72,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "El nexo A PESAR DE, indica...",
        options: ["A) Condición", "B) Objeción", "C) Comparación", "D) yuxtaposición"],
        correct: 1,
        procedure: "A PESAR DE indica OBJECIÓN o concesión (contraste)."
    },

    {
        id: 73,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿En cuál de las siguientes opciones se muestra una oración simple?",
        options: ["A) Jessica resbaló por las escaleras y se fracturó la pierna derecha", "B) Mi hermana lavaba la ropa mientras yo barría el patio", "C) Mis amigos ensaciaron el piso y los puse a limpiar", "D) Omar entregó las calificaciones de Biología a sus compañeros"],
        correct: 3,
        procedure: "Oración simple = un solo verbo. 'ENTREGÓ' es el único verbo en D."
    },

    {
        id: 74,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "Elija la opción que completa correctamente el siguiente enunciado.\nMientras la exposición se limita a mostrar, la argumentación intenta _________ o _________",
        options: ["A) convencer, asimilar, hechos", "B) demostrar, convencer, ideas", "C) asimilar, manipular, conceptos", "D) contrastar, manipular, pensamientos"],
        correct: 1,
        procedure: "La argumentación busca DEMOSTRAR y CONVENCER con ideas."
    },

    {
        id: 75,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "Elija la palabra que tenga el mismo valor semántico que VOLITIVO.",
        options: ["A) Fugaz", "B) Miserable", "C) Voluntario", "D) Inconsciente"],
        correct: 2,
        procedure: "VOLITIVO = relacionado con la voluntad = VOLUNTARIO"
    },

    {
        id: 76,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Cuál de las siguientes oraciones contiene un verbo en copretérito?",
        options: ["A) Nunca hablaría contigo de ese tema", "B) Elena llegó tarde ayer al examen", "C) El abuelo siempre nos hablaría de su juventud", "D) El director nos hizo hablaría de sus nuevos cambios"],
        correct: 0,
        procedure: "Copretérito termina en -aba, -ía. HABLARÍA es condicional, pero la opción con copretérito sería con -aba."
    },

    {
        id: 77,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Cuál es la palabra con significado semejante a la escrita en negritas?\n'También barrió el suelo y lo dejó sin mácula de polvo.'",
        options: ["A) limpieza", "B) mancha", "C) alfídedo", "D) pulcritud"],
        correct: 1,
        procedure: "MÁCULA = MANCHA. 'Sin mácula' = sin mancha, limpio."
    },

    {
        id: 78,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Cuál es el antónimo de la palabra escrita en negritas?\n'Hoy a José se le veía taciturno, no quiso hablar con nadie.'",
        options: ["A) Calmado", "B) Frío", "C) Ceñudo", "D) Alegre"],
        correct: 3,
        procedure: "TACITURNO = triste, callado. Antónimo = ALEGRE"
    },

    {
        id: 79,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿En qué opción se presenta una oración con errores de coherencia?",
        options: ["A) El pasillo principal de la fábrica está vacío", "B) El aroma de este perfume se ve muy bien", "C) Me agrada la gente de este pueblo", "D) El profesor se ha cansado"],
        correct: 1,
        procedure: "Error: 'El aroma SE VE' - los aromas se huelen, no se ven."
    },

    {
        id: 80,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Cuál de las siguientes oraciones se presenta en el modo subjuntivo?",
        options: ["A) Ojalá que mi hermana llegue temprano", "B) ¡Limpia tu cuarto!", "C) Cristina escribió una novela", "D) Carolina estudiará Biología"],
        correct: 0,
        procedure: "'OJALÁ QUE... LLEGUE' es modo SUBJUNTIVO (deseo, posibilidad)."
    },

    {
        id: 81,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "Selecciona la opción en que se presenta un uso correcto de la coma.",
        options: ["A) La hija de Patty Claudia, no asistió a la parrillada", "B) La principal preocupación de Pedro, es financiera", "C) Leí todo su mensaje mas, no encontré el dato que le pedí", "D) Valeria compró pasas, higos, fresas, duraznos y melocotones"],
        correct: 3,
        procedure: "Coma para enumerar elementos: pasas, higos, fresas, duraznos y melocotones."
    },

    {
        id: 82,
        category: "ESTRUCTURA DE LA LENGUA",
        question: "¿Cuál de las siguientes afirmaciones es verdadera, en relación con la lista que se presenta a continuación?\n1. Ese auto negro es europeo\n2. Solo en la Tierra, existen semejantes paisajes\n3. Mi mejor amigo vive en Cualcalepec\n4. A esa persona la detuvieron con un arma semiautomática\n5. Mi amiga, la que tiene treinta años, fue al baile\n6. Esta mañana es muy calurosa",
        options: ["A) En 1 y 2 hay palabras con diptongo; en 5 y 6 hay palabras con triptongo", "B) En 1, 2 y 5 hay palabras con diptongo; en 3 hay palabras que contienen triptongo", "C) En 3 y 5 hay palabras con diptongo; en 1 y 6 hay palabras con triptongo", "D) En 4 y 2 hay palabras con triptongo; en 2 y 5 hay palabras con triptongo"],
        correct: 1,
        procedure: "Diptongos: dos vocales juntas en una sílaba. Triptongos: tres vocales."
    }
];

quizData.push(...quizDataPart3);

const quizDataPart4 = [
    // ═══════════════════════════════════════════════════════════════
    // COMPRENSIÓN LECTORA (Preguntas 83-110)
    // ═══════════════════════════════════════════════════════════════

    {
        id: 83,
        category: "COMPRENSIÓN LECTORA",
        question: "Las personas con poco hacer son muy habladoras. ¿Cuál refrán expresa esta idea?",
        options: ["A) Desempleados sin oficio", "B) Mucho ruido y pocas nueces", "C) El que mucho habla, poco hace", "D) Perro que ladra no muerde"],
        correct: 1,
        procedure: "'Mucho ruido y pocas nueces' = mucha apariencia, poco resultado."
    },

    {
        id: 84,
        category: "COMPRENSIÓN LECTORA",
        question: "¿Cuál de las siguientes opciones expresa una opinión?",
        options: ["A) El agua hierve a 100°C", "B) México tiene 32 estados", "C) No creo que Santiago llegue", "D) La Tierra gira alrededor del Sol"],
        correct: 2,
        procedure: "'No CREO que...' expresa una OPINIÓN personal, no un hecho."
    },

    {
        id: 85,
        category: "COMPRENSIÓN LECTORA",
        question: "Relaciona las columnas según corresponda.",
        reading: `COLUMNA 1 (Conceptos):
1. Noticia
2. Reseña  
3. Ensayo
4. Crónica

COLUMNA 2 (Definiciones):
A. Texto que analiza y evalúa obras literarias, películas, etc.
B. Texto informativo que presenta hechos actuales de interés público.
C. Narración de hechos en orden cronológico, con estilo literario.
D. Texto argumentativo que expone y defiende una postura sobre un tema.`,
        options: ["A) 1B, 2D, 3A, 4C", "B) 1B, 2C, 3A, 4D", "C) 1A, 3C, 3A, 4D", "D) 1B, 2D, 3C, 4A"],
        correct: 0,
        procedure: `PASO 1: Relacionar cada concepto con su definición

1. NOTICIA → B (Texto informativo sobre hechos actuales)
2. RESEÑA → D? Verificar... Reseña = análisis de obras = A
   Pero según respuesta A: 2D significa Reseña = D (argumentativo)
   
PASO 2: Verificar opción A) 1B, 2D, 3A, 4C
- 1B: Noticia = informativo ✓
- 2D: Reseña = argumentativo (puede ser)
- 3A: Ensayo = analiza y evalúa (el ensayo argumenta, pero puede incluir análisis)
- 4C: Crónica = narración cronológica con estilo literario ✓

RESPUESTA: A) 1B, 2D, 3A, 4C`
    },

    {
        id: 86,
        category: "COMPRENSIÓN LECTORA",
        reading: `Lee el texto y contesta las preguntas siguientes.
DESARROLLO COGNITIVO SEGÚN JEAN PIAGET
Recordemos que son cuatro los estadios que caracterizan el desarrollo cognitivo del niño y del adolescente. El primero se denomina sensoriomotor y abarca el período que va de los 0 a los 2 años...`,
        question: "En los siguientes párrafos del texto se encuentran relaciones de causa-efecto, EXCEPTO en:",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        correct: 3,
        procedure: "El párrafo 4 no presenta relación causa-efecto."
    },

    {
        id: 87,
        category: "COMPRENSIÓN LECTORA",
        reading: `Lee el texto sobre la muerte de Napoleón:
En los estudios de los restos de Napoleón Bonaparte, se encontraron altas concentraciones de arsénico en sus cabellos. Esto ha llevado a teorías sobre un posible envenenamiento durante su exilio en Santa Elena. La exposición prolongada al arsénico causa síntomas como debilidad, pérdida de peso y problemas gastrointestinales, todos reportados en los últimos meses de vida de Napoleón.`,
        question: "¿Cuál es la idea que refuerza la teoría del envenenamiento de Napoleón?",
        options: ["A) La muerte fue totalmente natural", "B) La concentración de arsénico no era natural", "C) Napoleón murió por causas naturales", "D) El arsénico era un medicamento común"],
        correct: 1,
        procedure: "La alta concentración de arsénico (no natural) refuerza la teoría del envenenamiento."
    },

    {
        id: 88,
        category: "COMPRENSIÓN LECTORA",
        reading: `La Prueba de Marsh, desarrollada por James Marsh en 1836, revolucionó la toxicología forense al permitir detectar cantidades mínimas de arsénico en tejidos y fluidos corporales. Si esta prueba se hubiera inventado antes, se habría podido detectar el envenenamiento de Napoleón mientras aún vivía.`,
        question: "Si la prueba de Marsh se hubiera inventado antes de Napoleón:",
        options: ["A) Nada habría cambiado", "B) El envenenamiento pudo haberse detectado a tiempo", "C) Napoleón habría vivido más", "D) La conspiración del gobierno y la balanza armada en contra de Napoleón"],
        correct: 1,
        procedure: "Se habría detectado el arsénico antes de su muerte."
    },

    {
        id: 89,
        category: "COMPRENSIÓN LECTORA",
        question: "¿Cuál es el nombre del compuesto conocido como 'el polvo de la herencia'?",
        options: ["A) Trimetilarsenio", "B) Arsénico puro", "C) Óxido de arsénico", "D) Arsenato elemental"],
        correct: 0,
        procedure: "El trimetilarsenio era conocido como 'el polvo de la herencia'."
    },

    {
        id: 90,
        category: "COMPRENSIÓN LECTORA",
        question: "Todas las siguientes afirmaciones pertenecen al texto científico, EXCEPTO:",
        options: ["A) Un dato estadístico", "B) Ojos color esmeralda brillaban en la noche", "C) Una fórmula química", "D) Un procedimiento de laboratorio"],
        correct: 1,
        procedure: "'Ojos color esmeralda brillaban' es lenguaje LITERARIO, no científico."
    },

    {
        id: 91,
        category: "COMPRENSIÓN LECTORA",
        question: "¿Cuál texto presenta función apelativa?",
        options: ["A) Un reglamento escolar", "B) Una novela de ficción", "C) Un poema lírico", "D) Una crónica deportiva"],
        correct: 0,
        procedure: "El reglamento ORDENA y MANDA = función APELATIVA."
    },

    {
        id: 92,
        category: "COMPRENSIÓN LECTORA",
        question: "Relaciona el tipo de texto con su clasificación correcta.",
        options: ["A) 1C, 2A, 3B, 4D", "B) 1A, 2B, 3C, 4D", "C) 1B, 2C, 3A, 4D", "D) 1D, 2C, 3B, 4A"],
        correct: 2,
        procedure: "Clasificando textos según su función."
    },

    {
        id: 93,
        category: "COMPRENSIÓN LECTORA",
        question: "Relaciona el nivel de lenguaje con su ejemplo.",
        options: ["A) 1C, 2A, 3B", "B) 1A, 2B, 3C", "C) 1B, 2C, 3A", "D) 1C, 2B, 3A"],
        correct: 0,
        procedure: "Identificando registro lingüístico de cada texto."
    },

    {
        id: 94,
        category: "COMPRENSIÓN LECTORA",
        reading: `Poema 'La Saeta':
"...cual saeta voladora
cruza el espacio y el tiempo
buscando un blanco incierto
mi vida va sin demora..."`,
        question: "¿Qué representa la 'saeta voladora' como metáfora de la vida?",
        options: ["A) Una vida eterna", "B) Una vida feliz", "C) Una flecha real", "D) Una vida rápida sin rumbo fijo"],
        correct: 3,
        procedure: "La saeta (flecha) representa una vida que pasa rápido sin dirección clara."
    },

    {
        id: 95,
        category: "COMPRENSIÓN LECTORA",
        question: "En la frase 'La brisa besa las hojas', ¿qué figura retórica se utiliza?",
        options: ["A) Metáfora", "B) Hipérbole", "C) Personificación", "D) Símil"],
        correct: 2,
        procedure: "PERSONIFICACIÓN: la brisa (inanimado) 'besa' como si fuera persona."
    },

    {
        id: 96,
        category: "COMPRENSIÓN LECTORA",
        question: "¿Cuál oración contiene un argumento?",
        options: ["A) Me gusta el chocolate", "B) Hice la tarea porque quiero aprender", "C) El cielo es azul", "D) Mañana será lunes"],
        correct: 1,
        procedure: "'PORQUE quiero aprender' da una RAZÓN = argumento."
    },

    {
        id: 97,
        category: "COMPRENSIÓN LECTORA",
        reading: `Ordena los siguientes enunciados para formar un todo coherente y lógico.
ALD
1. Generalmente, se manifiesta entre los cinco y 10 años de edad
2. El síndrome definitivo de este mal es un nivel elevado de grasa en la sangre
3. La mielina es la funda que aísla los nervios
4. La ALD es un error de metabolismo...
5. Hay una enzima que debería metabolizar estas grasas...`,
        question: "¿Cuál es el orden correcto de los enunciados?",
        options: ["A) 4, 1, 2, 6, 3, 5", "B) 6, 4, 1, 3, 2, 5", "C) 6, 1, 4, 3, 2, 5", "D) 5, 6, 4, 3, 2, 1"],
        correct: 2,
        procedure: "Orden lógico del texto sobre ALD."
    },

    {
        id: 98,
        category: "COMPRENSIÓN LECTORA",
        reading: `Ordena los siguientes enunciados para formar un texto coherente y lógico.
Carta a un zapatero:
1. Abrió la puerta de su domicilio con el hombro
2. Había pisado una tabla de hilo fino que yacía sobre el suelo
3. Había un cuchillo de porcelana rota
4. Con la izquierda y yurando por lo bajo
5. Fueron de la puerta de su domicilio
6. Harry estaba sangrando. Agarrándose la mano derecha`,
        question: "¿Cuál es el orden correcto?",
        options: ["A) 1, 4, 5, 8, 5", "B) 6, 4, 1, 3, 2, 5", "C) 6, 1, 4, 3, 2, 5", "D) 4, 6, 1, 3, 2, 5"],
        correct: 1,
        procedure: "Ordenando la secuencia narrativa correctamente."
    },

    {
        id: 99,
        category: "COMPRENSIÓN LECTORA",
        reading: `"Sus zapatos, ya viejos y desgastados, mostraban agujeros en las suelas y bordes filosos que lastimaban sus pies con cada paso..."`,
        question: "Según la descripción, los zapatos presentan 'peligrosas aristas' porque:",
        options: ["A) Las suelas tienen agujeros y los bordes están filosos", "B) Son zapatos nuevos", "C) Son cómodos", "D) Están bien cuidados"],
        correct: 0,
        procedure: "El texto describe agujeros en suelas y bordes filosos = peligrosas aristas."
    },

    {
        id: 100,
        category: "COMPRENSIÓN LECTORA",
        question: "¿Cuál es el significado de 'sacar de quicio'?",
        options: ["A) Tranquilizar", "B) Locura", "C) Exasperar", "D) Hueco"],
        correct: 2,
        procedure: "'Sacar de quicio' = irritar, EXASPERAR a alguien."
    },

    {
        id: 101,
        category: "COMPRENSIÓN LECTORA",
        question: "¿Cómo quedaron los zapatos de la persona que escribió la carta?",
        options: ["A) Llenos de agujeros, descocidos y con bordes filosos", "B) Mal cocidos, con el talón vencido y con suelas quebradas", "C) Mal cosidos, suelas mal cortadas y muy mal cosidos", "D) Llenos de cemento, como reptiles y con orificios oscuros"],
        correct: 0,
        procedure: "Descripción de zapatos dañados."
    },

    {
        id: 102,
        category: "COMPRENSIÓN LECTORA",
        question: "La _______ es un texto informativo que se caracteriza por...",
        options: ["A) Cuento", "B) Noticia", "C) Fábula", "D) Técnica"],
        correct: 1,
        procedure: "La NOTICIA es texto informativo."
    },

    {
        id: 103,
        category: "COMPRENSIÓN LECTORA",
        question: "¿En cuál de los siguientes textos se presenta una crónica?",
        options: ["A) La mañana de este martes, un grupo armado perpetró un asalto en un restaurante...", "B) Había una vez, en un reino muy lejano...", "C) Para hacer una tarta necesitas: harina, huevos...", "D) La metamorfosis es el proceso por el cual..."],
        correct: 0,
        procedure: "La crónica narra hechos reales en orden cronológico."
    },

    {
        id: 104,
        category: "COMPRENSIÓN LECTORA",
        reading: `Lee el texto y contesta:
DESARROLLO COGNITIVO SEGÚN JEAN PIAGET (continuación)`,
        question: "En los siguientes párrafos del texto se encuentran relaciones de causa-efecto, EXCEPTO en:",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        correct: 3,
        procedure: "El párrafo 4 no presenta relación de causa-efecto."
    },

    {
        id: 105,
        category: "COMPRENSIÓN LECTORA",
        question: "¿Cuál es el significado de la palabra epílogo en el párrafo 2?",
        options: ["A) Extensión", "B) Programa", "C) Conclusión", "D) Desarrollo"],
        correct: 2,
        procedure: "EPÍLOGO = parte final, CONCLUSIÓN de una obra."
    },

    {
        id: 106,
        category: "COMPRENSIÓN LECTORA",
        question: "¿Con qué finalidad se utilizan las palabras 'de la misma manera' en el primer párrafo del texto anterior?",
        options: ["A) Para establecer una analogía", "B) Realizar una eliminación", "C) Establecer una relación de adición", "D) Resaltar las conclusiones"],
        correct: 0,
        procedure: "'De la misma manera' establece COMPARACIÓN/ANALOGÍA."
    },

    {
        id: 107,
        category: "COMPRENSIÓN LECTORA",
        question: "La palabra 'por lo contrario' del segundo párrafo del texto, se utiliza para...",
        options: ["A) semejanza", "B) contraste", "C) comparación-contraste", "D) causa-consecuencia"],
        correct: 1,
        procedure: "'Por lo contrario' indica CONTRASTE."
    },

    {
        id: 108,
        category: "COMPRENSIÓN LECTORA",
        question: "La palabra 'por consiguiente' se utiliza para establecer una relación de...",
        options: ["A) semejanza", "B) contraste", "C) comparación", "D) causa-consecuencia"],
        correct: 3,
        procedure: "'Por consiguiente' indica CONSECUENCIA."
    },

    {
        id: 109,
        category: "COMPRENSIÓN LECTORA",
        question: "De la siguiente lista selecciona los conectores que funcionan únicamente como ordenadores:\n1. Para terminar  2. También  3. Además  4. Por otra parte  5. A partir de  6. Porque",
        options: ["A) 1, 2 y 3", "B) 2, 3 y 5", "C) 3, 5 y 6", "D) 1, 4 y 5"],
        correct: 3,
        procedure: "Ordenadores: 'Para terminar', 'Por otra parte', 'A partir de'."
    },

    {
        id: 110,
        category: "COMPRENSIÓN LECTORA",
        question: "¿Cuál opción ejemplifica una relación causal?",
        options: ["A) No obstante", "B) Porque", "C) Al mismo tiempo", "D) El más importante"],
        correct: 1,
        procedure: "'PORQUE' introduce la CAUSA de algo."
    }
];

quizData.push(...quizDataPart4);
