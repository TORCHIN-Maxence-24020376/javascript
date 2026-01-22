console.log("QUESTION 1");

function getRandomInt(min, max) {
    // Génère un nombre entier aléatoire entre min et max inclus
    // En utilisant Math.random(), puis arrondit à l'entier inférieur
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var A_tableau = [];

for (let i = 0; i < 20; i++) {
    A_tableau.push(getRandomInt(-10,40));
}

console.log(A_tableau);