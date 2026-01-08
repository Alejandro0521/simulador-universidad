const quizData = [
    // --- PENSAMIENTO MATEMÁTICO ---
    { id: 1, category: "PENSAMIENTO MATEMÁTICO", question: "¿Cuál es el resultado de la operación -20 + (-5)?", options: ["-4", "2", "4", "-25"], correct: 3, procedure: "-20 + (-5) = -25" },
    {
        id: 2,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Determina la fracción del área del cuadrado, que representa la región sombreada.",
        options: ["1/10", "1/8", "1/6", "1/4"],
        correct: 3,
        procedure: "Visualmente 1/4 (un triángulo de 4).",
        visual: `<svg width="200" height="200" viewBox="0 0 200 200" style="margin: 0 auto; display: block; border: 2px solid #333;">
            <rect x="0" y="0" width="200" height="200" fill="white"/>
            <line x1="0" y1="0" x2="200" y2="200" stroke="black" stroke-width="2"/>
            <line x1="200" y1="0" x2="0" y2="200" stroke="black" stroke-width="2"/>
            <path d="M0,0 L200,0 L100,100 Z" fill="#64748b"/>
        </svg>`
    },
    { id: 3, category: "PENSAMIENTO MATEMÁTICO", question: "Resultado de (3 + (4 - 6)² + 2) + 3", options: ["2", "3", "18", "27"], correct: 3, procedure: "Calculo detallado: 27." },
    { id: 4, category: "PENSAMIENTO MATEMÁTICO", question: "Simplificar 8√2 + 3√4 - 2√18 + 2√9", options: ["8√2 - 2√18 + 12", "11 - √3", "2√2 + 12", "11√3"], correct: 2, procedure: "Simplificación: 2√2 + 12" },
    { id: 5, category: "PENSAMIENTO MATEMÁTICO", question: "Lago pierde agua. 3 días >40°, 4 días <=40°.", options: ["21", "27", "31", "35"], correct: 1, procedure: "Total = 27L" },
    { id: 6, category: "PENSAMIENTO MATEMÁTICO", question: "180 bultos 9000kg. Peso consistente al retirar 15%.", options: ["1350", "2700", "7650", "8820"], correct: 2, procedure: "7650 kg" },
    { id: 7, category: "PENSAMIENTO MATEMÁTICO", question: "El triple del cuadrado del producto de 3 y 2.", options: ["106", "108", "110", "112"], correct: 1, procedure: "108" },
    { id: 8, category: "PENSAMIENTO MATEMÁTICO", question: "Número tal que mitad de su cuadrado es su inverso (cifras).", options: ["18", "16", "12", "10"], correct: 0, procedure: "18 -> 81" },
    { id: 9, category: "PENSAMIENTO MATEMÁTICO", question: "x=2, y=3. (2/3) + (3/y)", options: ["45", "36", "11/9", "5/3"], correct: 3, procedure: "5/3" },
    { id: 10, category: "PENSAMIENTO MATEMÁTICO", question: "Polinomios: Simplificación", options: ["-x + 3xy - y - 4", "9x...", "x...", "-3x..."], correct: 0, procedure: "Simplificación algebraica." },
    { id: 11, category: "PENSAMIENTO MATEMÁTICO", question: "Equivalente a (x² - 5)(xᵐ)", options: ["xᵐ⁺² + 5xᵐ", "x²ᵐ - 5xᵐ", "x²ᵐ + 5xᵐ", "xᵐ⁺² - 5xᵐ"], correct: 3, procedure: "Ley exponentes." },
    { id: 12, category: "PENSAMIENTO MATEMÁTICO", question: "(3x+2)(9x²-6x+4)", options: ["8x²-4", "9x²-4", "27x³-8", "27x³+8"], correct: 3, procedure: "Suma de cubos." },
    { id: 13, category: "PENSAMIENTO MATEMÁTICO", question: "Area cuadrado lado 2a-3", options: ["8a-12", "4a²+9", "4a²-12a+9", "4a²-6a+9"], correct: 2, procedure: "Binomio cuadrado." },
    { id: 14, category: "PENSAMIENTO MATEMÁTICO", question: "Factorizar x²-3x-10", options: ["(x-3)(x+2)", "(x-5)(x+2)", "(x-5)(x+1)", "(x-5)(x-1)"], correct: 1, procedure: "Factorización." },
    { id: 15, category: "PENSAMIENTO MATEMÁTICO", question: "Simplificar (9x²-4y²)/(3x-2y)", options: ["3x+2y", "3x-y", "3x+y", "3x-2y"], correct: 0, procedure: "Dif cuadrados." },
    { id: 16, category: "PENSAMIENTO MATEMÁTICO", question: "Si y+2=7, y+1=?", options: ["5", "6", "7", "8"], correct: 1, procedure: "y=5 -> 6." },
    { id: 17, category: "PENSAMIENTO MATEMÁTICO", question: "Pedro/Rosa edad", options: ["23", "25", "27", "29"], correct: 0, procedure: "23 años." },
    { id: 18, category: "PENSAMIENTO MATEMÁTICO", question: "Suma 48, uno triple", options: ["12 y 36", "16 y 8", "24 y 8", "42 y 14"], correct: 0, procedure: "12 y 36." },
    {
        id: 19,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Selecciona los valores que corresponden a 'a' y 'b' en la tabla de frecuencias.",
        options: ["a: 7-13; b=9", "a: 7-13; b=18", "a: 7-9; b=11", "a: 7-13, b=16"],
        correct: 0,
        procedure: "Análisis de intervalos y conteo.",
        visual: `<table style="width:100%; border-collapse:collapse; margin:1rem 0; color:white; font-size:0.9rem;">
            <thead><tr style="border-bottom:1px solid #666;"><th style="padding:8px;">Intervalo (g)</th><th style="padding:8px;">Marca Clase</th><th style="padding:8px;">Frecuencia</th></tr></thead>
            <tbody>
                <tr><td style="padding:8px; text-align:center;">1 - 7</td><td style="padding:8px; text-align:center;">4</td><td style="padding:8px; text-align:center;">3</td></tr>
                <tr><td style="padding:8px; text-align:center; background:#4F46E5;">a</td><td style="padding:8px; text-align:center;">10</td><td style="padding:8px; text-align:center;">b</td></tr>
                <tr><td style="padding:8px; text-align:center;">13 - 19</td><td style="padding:8px; text-align:center;">16</td><td style="padding:8px; text-align:center;">3</td></tr>
            </tbody>
        </table>`
    },
    { id: 20, category: "PENSAMIENTO MATEMÁTICO", question: "Moda concentración Pb: 23, 28, 28, 28...", options: ["23", "28", "39", "42"], correct: 1, procedure: "28" },
    {
        id: 21,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Calcula la media aritmética para los datos contenidos en la tabla.",
        options: ["17.6", "18.6", "19.6", "20.6"],
        correct: 2,
        procedure: "Cálculo media ponderada.",
        visual: `<table style="width:100%; border-collapse:collapse; margin:1rem 0; color:white; font-size:0.9rem;">
            <thead><tr style="border-bottom:1px solid #666;"><th style="padding:8px;">Intervalo</th><th style="padding:8px;">Frecuencia (f)</th><th style="padding:8px;">Marca (x)</th></tr></thead>
            <tbody>
                <tr><td style="padding:8px; text-align:center;">10 - 15</td><td style="padding:8px; text-align:center;">6</td><td style="padding:8px; text-align:center;">12.5</td></tr>
                <tr><td style="padding:8px; text-align:center;">15 - 20</td><td style="padding:8px; text-align:center;">8</td><td style="padding:8px; text-align:center;">17.5</td></tr>
                <tr><td style="padding:8px; text-align:center;">20 - 25</td><td style="padding:8px; text-align:center;">8</td><td style="padding:8px; text-align:center;">22.5</td></tr>
            </tbody>
        </table>`
    },
    {
        id: 22,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "170 personas encuestadas. ¿Cuántas prefieren los lirios? (Lirios = 20%)",
        options: ["17", "34", "51", "68"],
        correct: 1,
        procedure: "20% de 170 es 34.",
        visual: `<svg width="200" height="200" viewBox="0 0 32 32" style="margin: 0 auto; display: block;">
            <circle r="16" cx="16" cy="16" fill="#334155" />
            <path d="M16 16 L32 16 A16 16 0 0 1 27.3 27.3 Z" fill="#10B981" /> <!-- Approx slice -->
            <text x="22" y="24" fill="white" font-size="3" font-weight="bold">20%</text>
            <text x="22" y="28" fill="white" font-size="2">Lirios</text>
        </svg>`
    },
    { id: 23, category: "PENSAMIENTO MATEMÁTICO", question: "Números 4 cifras final 0", options: ["84", "504", "720", "5040"], correct: 1, procedure: "504" },
    { id: 24, category: "PENSAMIENTO MATEMÁTICO", question: "Probabilidad NO verde", options: ["1/5", "1/2", "4/5", "7/8"], correct: 2, procedure: "4/5" },
    {
        id: 25,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "¿Cuántos centímetros mide el perímetro de la figura?",
        options: ["35.2", "39.2", "43.2", "47.2"],
        correct: 1,
        procedure: "Suma de lados.",
        visual: `<svg width="250" height="150" viewBox="0 0 250 150" style="margin: 0 auto; display: block;">
            <polygon points="20,130 80,20 180,20 230,130" fill="none" stroke="#f8fafc" stroke-width="2"/>
            <text x="120" y="145" fill="#94a3b8" font-size="12" text-anchor="middle">12.4 cm</text>
            <text x="130" y="15" fill="#94a3b8" font-size="12" text-anchor="middle">12.4 cm</text>
            <text x="35" y="80" fill="#94a3b8" font-size="12">7.2 cm</text>
            <text x="195" y="80" fill="#94a3b8" font-size="12">7.2 cm</text>
        </svg>`
    },
    {
        id: 26,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Determina la longitud del segmento MN, si las coordenadas de P son (-3, 4).",
        options: ["3", "4", "5", "6"],
        correct: 2,
        procedure: "Distancia = 5.",
        visual: `<svg width="200" height="200" viewBox="0 0 200 200" style="margin: 0 auto; display: block; background: #1e293b;">
            <!-- Grid -->
            <line x1="100" y1="0" x2="100" y2="200" stroke="#475569" stroke-width="1"/>
            <line x1="0" y1="100" x2="200" y2="100" stroke="#475569" stroke-width="1"/>
            <!-- Triangle Sim -->
            <line x1="100" y1="100" x2="40" y2="20" stroke="#10B981" stroke-width="2"/>
            <circle cx="40" cy="20" r="3" fill="#F59E0B"/>
            <text x="20" y="20" fill="white" font-size="10">P(-3,4)</text>
        </svg>`
    },
    { id: 27, category: "PENSAMIENTO MATEMÁTICO", question: "Paralela recta", options: ["2x-3y+12=0", "6x-4x-12=0", "4x-6y+25=0", "2x-3y+9=0"], correct: 3, procedure: "m=2/3" },
    {
        id: 28,
        category: "PENSAMIENTO MATEMÁTICO",
        question: "Calcula la distancia que hay entre el pino y el manzano.",
        options: ["18.42", "24.57", "32.51", "35.67"],
        correct: 3,
        procedure: "Trigonometría.",
        visual: `<svg width="200" height="150" viewBox="0 0 200 150" style="margin: 0 auto; display: block;">
            <path d="M20,130 L180,130 L100,20 Z" fill="none" stroke="#f8fafc" stroke-width="2"/>
            <circle cx="20" cy="130" r="4" fill="#10B981"/> <text x="20" y="145" fill="#94a3b8" font-size="10">Pino</text>
            <circle cx="180" cy="130" r="4" fill="#EF4444"/> <text x="180" y="145" fill="#94a3b8" font-size="10">Manzano</text>
            <text x="140" y="80" fill="#94a3b8" font-size="10">?</text>
        </svg>`
    },

    // --- PENSAMIENTO ANALÍTICO ---
    { id: 29, category: "PENSAMIENTO ANALÍTICO", question: "Lectura IPN lenguaje", options: ["Coloquial", "Culto", "Científico", "Literario"], correct: 1, procedure: "Culto." },
    { id: 30, category: "PENSAMIENTO ANALÍTICO", question: "Modo discursivo", options: ["Narrativo", "Expositivo", "Argumentativo", "Descriptivo"], correct: 2, procedure: "Argumentativo." },
    { id: 31, category: "PENSAMIENTO ANALÍTICO", question: "Proposición falsa", options: ["Calidad", "Estudiantes", "Obligaciones", "Opuestas"], correct: 3, procedure: "Análisis." },
    { id: 32, category: "PENSAMIENTO ANALÍTICO", question: "Analogía China-Libra", options: ["LIRA", "CENTAVO", "PESETA", "YEN-REINO UNIDO"], correct: 3, procedure: "Moneda." },
    { id: 33, category: "PENSAMIENTO ANALÍTICO", question: "Sinónimos Pluma", options: ["2y5", "3y4", "1y5", "2y6"], correct: 2, procedure: "Bolígrafo." },
    {
        id: 34,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si la palabra BECA se representa mediante símbolos. ¿Cuál símbolo representa un error?",
        options: ["i", "Cuadrado", "Pentágono", "1"],
        correct: 0,
        procedure: "Lógica de patrones.",
        visual: `<div style="font-size: 1.5rem; text-align: center; margin-bottom: 1rem; color: #fff;">
         B = ⭐ | E = 🔷 | C = 🟣 | A = 🔺 <br>
         <span style="font-size:0.8rem; color:#aaa;">(Representación simulada de la tabla)</span>
         </div>`
    },
    { id: 35, category: "PENSAMIENTO ANALÍTICO", question: "Suma lados 34", options: ["Opción A", "B", "C", "D"], correct: 1, procedure: "Geom." },
    { id: 36, category: "PENSAMIENTO ANALÍTICO", question: "Mensaje oculto signos", options: ["Hacia cada café", "Hacia cabo", "Había cada", "Había ceja"], correct: 2, procedure: "Decod." },
    { id: 37, category: "PENSAMIENTO ANALÍTICO", question: "BADEA operaciones", options: ["11.5", "10", "6", "6.5"], correct: 3, procedure: "6.5" },
    { id: 38, category: "PENSAMIENTO ANALÍTICO", question: "Código Mi perro", options: ["crffd", "drffc", "zafffc", "dgggb"], correct: 0, procedure: "Cripto." },
    { id: 39, category: "PENSAMIENTO ANALÍTICO", question: "Amo / Amo", options: ["Homónimos", "Sinónimos", "Palíndromos", "Homófonos"], correct: 0, procedure: "Homónimos." },
    {
        id: 40,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Encuentra la palabra oculta de acuerdo a la imagen.",
        options: ["Lucrecio", "Pelmazo", "Palmera", "Astutas"],
        correct: 2,
        procedure: "Palmera (Palma + Era).",
        visual: `<div style="text-align: center; font-size: 4rem;">🌴 + 🕰️</div>`
    },
    { id: 41, category: "PENSAMIENTO ANALÍTICO", question: "Secuencia faltante", options: ["A", "B", "C", "D"], correct: 0, procedure: "Serie." },
    {
        id: 42,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si las ventas siguen la secuencia, ¿qué fruta corresponde a la venta 42?",
        options: ["Tuna", "Papaya", "Mamey", "Uva"],
        correct: 1,
        procedure: "Papaya.",
        visual: `<div style="text-align:center; padding:10px; background:rgba(255,255,255,0.1); border-radius:8px;">
        1: Tuna | 2: Uva | 3: Mamey | 4: Papaya | 5: Tuna...
        </div>`
    },
    { id: 43, category: "PENSAMIENTO ANALÍTICO", question: "Venta 33 prisma", options: ["Rect", "Hex", "Cuad", "Pent"], correct: 0, procedure: "Rect." },
    { id: 44, category: "PENSAMIENTO ANALÍTICO", question: "Desempleo excepción", options: ["Tijuana", "Reducción", "Tepic", "Mérida"], correct: 3, procedure: "Tabla." },
    { id: 45, category: "PENSAMIENTO ANALÍTICO", question: "n k = 15", options: ["2", "4", "5", "6"], correct: 2, procedure: "5." },
    {
        id: 46,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Cuántos cuadrados blancos tendrá la octava figura?",
        options: ["21", "28", "36", "45"],
        correct: 2,
        procedure: "36.",
        visual: `<div style="display:flex; gap:10px; justify-content:center;">
        <div style="border:1px solid white; width:20px; height:20px;"></div>
        <div style="display:grid; grid-template-columns:1fr 1fr; border:1px solid white; width:30px; height:30px;"><div style="border:1px solid #555;"></div></div>
        <span style="align-self:end;">...</span>
        </div>`
    },
    { id: 47, category: "PENSAMIENTO ANALÍTICO", question: "Papel cortes", options: ["10", "15", "17", "25"], correct: 2, procedure: "17." },
    {
        id: 48,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Cuál es el cubo que se puede formar con el siguiente recorte?",
        options: ["A", "B", "C", "D"],
        correct: 2,
        procedure: "Espacial.",
        visual: `<svg width="150" height="150" viewBox="0 0 150 150" style="margin: 0 auto; display: block;">
            <rect x="50" y="0" width="50" height="50" fill="none" stroke="white"/>
            <rect x="50" y="50" width="50" height="50" fill="none" stroke="white"/>
            <rect x="50" y="100" width="50" height="50" fill="none" stroke="white"/>
            <rect x="0" y="50" width="50" height="50" fill="none" stroke="white"/>
            <rect x="100" y="50" width="50" height="50" fill="none" stroke="white"/>
        </svg>`
    },
    {
        id: 49,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Si el área de todos los cuadrados es 80cm², ¿perímetro de la figura?",
        options: ["64", "128", "256", "512"],
        correct: 0,
        procedure: "64.",
        visual: `<svg width="100" height="100" viewBox="0 0 100 100" style="margin: 0 auto; display: block;">
            <rect x="33" y="0" width="33" height="33" fill="#64748b" stroke="white"/> <!-- Top -->
            <rect x="33" y="33" width="33" height="33" fill="#64748b" stroke="white"/> <!-- Mid -->
            <rect x="0" y="33" width="33" height="33" fill="#64748b" stroke="white"/> <!-- Left -->
            <rect x="66" y="33" width="33" height="33" fill="#64748b" stroke="white"/> <!-- Right -->
            <rect x="33" y="66" width="33" height="33" fill="#64748b" stroke="white"/> <!-- Bot -->
        </svg>`
    },
    { id: 50, category: "PENSAMIENTO ANALÍTICO", question: "Cubos pirámide 30", options: ["325", "465", "650", "930"], correct: 1, procedure: "465." },
    {
        id: 51,
        category: "PENSAMIENTO ANALÍTICO",
        question: "¿Cuántos triángulos se pueden identificar en la figura?",
        options: ["15", "13", "12", "9"],
        correct: 1,
        procedure: "13.",
        visual: `<svg width="100" height="100" viewBox="0 0 100 100" style="margin: 0 auto; display: block;">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="white" stroke-width="2"/>
            <line x1="50" y1="10" x2="50" y2="90" stroke="white"/>
            <line x1="30" y1="50" x2="70" y2="50" stroke="white"/>
        </svg>`
    },
    {
        id: 52,
        category: "PENSAMIENTO ANALÍTICO",
        question: "Indica qué número corresponde con el código binario: 0011001...",
        options: ["13 542", "24 531", "31 452", "53 421"],
        correct: 2,
        procedure: "Conv.",
        visual: `<div style="font-family:monospace; text-align:center; font-size:1.2rem; background:#000; padding:10px;">00110101</div>`
    },
    { id: 53, category: "PENSAMIENTO ANALÍTICO", question: "Pastel caras", options: ["16", "32", "40", "48"], correct: 2, procedure: "40." },
    { id: 54, category: "PENSAMIENTO ANALÍTICO", question: "Secuencia", options: ["C6H9", "G14O17", "A2D5", "E10K13"], correct: 1, procedure: "G14." },
    { id: 55, category: "PENSAMIENTO ANALÍTICO", question: "Caras pirámide", options: ["5", "6", "7", "8"], correct: 0, procedure: "5." },

    // Lengua and Lectura (No visuals required generally)
    { id: 56, category: "ESTRUCTURA DE LA LENGUA", question: "Modificador sujeto", options: ["transitan", "calles", "ciudad", "algunos"], correct: 3, procedure: "Algunos." },
    { id: 57, category: "ESTRUCTURA DE LA LENGUA", question: "Compl circunstancial", options: ["Nosotros", "Doctor", "Madrugada", "Aves en nidos"], correct: 3, procedure: "Lugar." },
    { id: 58, category: "ESTRUCTURA DE LA LENGUA", question: "Oración simple", options: ["Qué película", "Si salimos", "La mascota...", "Si estudias"], correct: 2, procedure: "Simple." },
    { id: 59, category: "ESTRUCTURA DE LA LENGUA", question: "Alzheimer sustantivos", options: ["2,4,5,11", "1,3,6,7", "1,3,5,9", "3,7,10,11"], correct: 0, procedure: "Gramática." },
    { id: 60, category: "ESTRUCTURA DE LA LENGUA", question: "Sexo Momo", options: ["Pequeña", "Momo", "Desusado", "Bastante"], correct: 0, procedure: "Pequeña." },
    { id: 61, category: "ESTRUCTURA DE LA LENGUA", question: "Sustantivos", options: ["1,4..."], correct: 1, procedure: "Gramática." },
    { id: 62, category: "ESTRUCTURA DE LA LENGUA", question: "Compuestos excepto", options: ["Revolucionario"], correct: 3, procedure: "Simple." },
    { id: 63, category: "ESTRUCTURA DE LA LENGUA", question: "Ésta, éste...", options: ["demostrativos"], correct: 0, procedure: "Demostrativos." },
    { id: 64, category: "ESTRUCTURA DE LA LENGUA", question: "Verbo transitivo", options: ["Se aplicará"], correct: 2, procedure: "Transitivo." },
    { id: 65, category: "ESTRUCTURA DE LA LENGUA", question: "Superlativo pobre", options: ["Paupérrimo"], correct: 1, procedure: "Irregular." },
    { id: 66, category: "ESTRUCTURA DE LA LENGUA", question: "Participios", options: ["Comido..."], correct: 0, procedure: "-ado, -ido." },
    { id: 67, category: "ESTRUCTURA DE LA LENGUA", question: "Tiempo compuesto", options: ["He gastado..."], correct: 2, procedure: "Haber + Part." },
    { id: 68, category: "ESTRUCTURA DE LA LENGUA", question: "Palabras graves", options: ["1,4..."], correct: 0, procedure: "Penúltima." },
    { id: 69, category: "ESTRUCTURA DE LA LENGUA", question: "Homófonas", options: ["casa-caza"], correct: 1, procedure: "Sonido." },
    { id: 70, category: "ESTRUCTURA DE LA LENGUA", question: "ADEMÁS relación", options: ["Aditivo"], correct: 1, procedure: "Suma." },
    { id: 71, category: "ESTRUCTURA DE LA LENGUA", question: "Relación párrafos", options: ["Causa"], correct: 0, procedure: "Lógica." },
    { id: 72, category: "ESTRUCTURA DE LA LENGUA", question: "A PESAR DE", options: ["Objeción"], correct: 1, procedure: "Adversativo." },
    { id: 73, category: "ESTRUCTURA DE LA LENGUA", question: "Oración simple", options: ["Omar entregó"], correct: 3, procedure: "Un verbo." },
    { id: 74, category: "ESTRUCTURA DE LA LENGUA", question: "Argumentación", options: ["Convencer"], correct: 1, procedure: "Persuasión." },
    { id: 75, category: "ESTRUCTURA DE LA LENGUA", question: "Volitivo", options: ["Voluntario"], correct: 2, procedure: "Voluntad." },
    { id: 76, category: "ESTRUCTURA DE LA LENGUA", question: "Copretérito", options: ["hablaba"], correct: 2, procedure: "-aba." },
    { id: 77, category: "ESTRUCTURA DE LA LENGUA", question: "Mácula", options: ["mancha"], correct: 1, procedure: "Sinónimo." },
    { id: 78, category: "ESTRUCTURA DE LA LENGUA", question: "Taciturno antónimo", options: ["Alegre"], correct: 3, procedure: "Antónimo." },
    { id: 79, category: "ESTRUCTURA DE LA LENGUA", question: "Error coherencia", options: ["Aroma se ve"], correct: 1, procedure: "Sentido." },
    { id: 80, category: "ESTRUCTURA DE LA LENGUA", question: "Subjuntivo", options: ["Ojalá llegue"], correct: 0, procedure: "Modo." },
    { id: 81, category: "ESTRUCTURA DE LA LENGUA", question: "Coma enumeración", options: ["pasas, higos..."], correct: 3, procedure: "Lista." },
    { id: 82, category: "ESTRUCTURA DE LA LENGUA", question: "Diptongos", options: ["1 y 2"], correct: 1, procedure: "Vocales." },

    { id: 83, category: "COMPRENSIÓN LECTORA", question: "Poco hacer -> habladoras", options: ["Desempleados"], correct: 1, procedure: "Refrán." },
    { id: 84, category: "COMPRENSIÓN LECTORA", question: "Opinión", options: ["No creo Santiago"], correct: 2, procedure: "Subjetividad." },
    { id: 85, category: "COMPRENSIÓN LECTORA", question: "Columnas", options: ["1B..."], correct: 0, procedure: "Orden." },
    { id: 87, category: "COMPRENSIÓN LECTORA", question: "Idea Napoleón", options: ["No natural"], correct: 1, procedure: "Envenenamiento." },
    { id: 88, category: "COMPRENSIÓN LECTORA", question: "Prueba Marsh", options: ["Detectado antes"], correct: 1, procedure: "Forense." },
    { id: 89, category: "COMPRENSIÓN LECTORA", question: "Polvo herencia", options: ["Trimetil"], correct: 1, procedure: "Veneno." },
    { id: 90, category: "COMPRENSIÓN LECTORA", question: "Excepción científico", options: ["Ojos esmeralda"], correct: 1, procedure: "Poético." },
    { id: 91, category: "COMPRENSIÓN LECTORA", question: "Función apelativa", options: ["Reglamento..."], correct: 0, procedure: "Mandato." },
    { id: 92, category: "COMPRENSIÓN LECTORA", question: "Tipo texto", options: ["1C..."], correct: 2, procedure: "Clasificación." },
    { id: 93, category: "COMPRENSIÓN LECTORA", question: "Nivel lenguaje", options: ["1C..."], correct: 0, procedure: "Registro." },
    { id: 94, category: "COMPRENSIÓN LECTORA", question: "Saeta voladora", options: ["Vida sin rumbo"], correct: 3, procedure: "Metáfora." },
    { id: 95, category: "COMPRENSIÓN LECTORA", question: "Brisa besa", options: ["Figurado"], correct: 2, procedure: "Personificación." },
    { id: 96, category: "COMPRENSIÓN LECTORA", question: "Argumentos", options: ["Hice tarea porque"], correct: 1, procedure: "Razón." },
    { id: 97, category: "COMPRENSIÓN LECTORA", question: "Ordena ALD", options: ["6,1..."], correct: 2, procedure: "Secuencia." },
    { id: 98, category: "COMPRENSIÓN LECTORA", question: "Ordena texto", options: ["6,4..."], correct: 1, procedure: "Secuencia." },
    { id: 99, category: "COMPRENSIÓN LECTORA", question: "Peligrosas aristas", options: ["Suelas heridas"], correct: 0, procedure: "Riesgo." },
    { id: 100, category: "COMPRENSIÓN LECTORA", question: "Quicio", options: ["Exasperar"], correct: 2, procedure: "Significado." },
    { id: 101, category: "COMPRENSIÓN LECTORA", question: "Zapatos estado", options: ["Agujeros/filosos"], correct: 0, procedure: "Descrip." },
    { id: 102, category: "COMPRENSIÓN LECTORA", question: "Texto informativo", options: ["Noticia"], correct: 1, procedure: "Género." },
    { id: 103, category: "COMPRENSIÓN LECTORA", question: "Crónica", options: ["Mañana martes..."], correct: 0, procedure: "Tiempo." },
    { id: 104, category: "COMPRENSIÓN LECTORA", question: "Causa efecto", options: ["4"], correct: 3, procedure: "Lógica." },
    { id: 105, category: "COMPRENSIÓN LECTORA", question: "Epílogo", options: ["Conclusión"], correct: 2, procedure: "Parte final." },
    { id: 106, category: "COMPRENSIÓN LECTORA", question: "De la misma manera", options: ["Analogía"], correct: 0, procedure: "Comparación." },
    { id: 107, category: "COMPRENSIÓN LECTORA", question: "Por lo contrario", options: ["Contrastar"], correct: 0, procedure: "Oposición." },
    { id: 108, category: "COMPRENSIÓN LECTORA", question: "Por consiguiente", options: ["Causa-consecuencia"], correct: 3, procedure: "Resultado." },
    { id: 109, category: "COMPRENSIÓN LECTORA", question: "Conectores orden", options: ["1,4,5"], correct: 3, procedure: "Estructura." },
    { id: 110, category: "COMPRENSIÓN LECTORA", question: "Relación causal", options: ["Porque"], correct: 1, procedure: "Causa." }
];

// Helper
function getQuestionsByCategory(cat) {
    return quizData.filter(q => q.category === cat);
}
