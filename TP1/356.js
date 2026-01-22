console.log("QUESTION 3 ET 5 ET 6");

var I_i = 0;

const S_froid= "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
const S_chaud= "Caliente ! Vamos a la playa, ho hoho hoho !!"

let S_previous = null;

var A_history = [];

const interval = setInterval(() => {
    document.getElementById("receiver").innerHTML = A_tableau[I_i];
    let receiver = document.getElementById("receiver-container");
    let phrase = document.getElementById("phrase");
    let history = document.getElementById("historique");

    receiver.classList.remove(S_previous);

    if (A_tableau[I_i] <= 0){
        receiver.classList.add("blue");
        S_previous = "blue";
        phrase.innerHTML = S_froid;
    }

    if (A_tableau[I_i] > 0 && A_tableau[I_i] <= 20){
        receiver.classList.add("green");
        S_previous = "green";
        phrase.innerHTML = "";
    }

    if (A_tableau[I_i] > 20 && A_tableau[I_i] <= 30){
        receiver.classList.add("orange");
        S_previous = "orange";
        phrase.innerHTML = "";
    }

    if (A_tableau[I_i] > 30 && A_tableau[I_i] <= 40){
        receiver.classList.add("red");
        S_previous = "red";
        phrase.innerHTML = S_chaud;
    }

    A_history.push(A_tableau[I_i]);
    history.innerHTML = A_history;

    I_i += 1;
    if (I_i >= A_tableau.length) {
        console.log("Fin d'éxécution")
        clearInterval(interval);
    }
},2000);

