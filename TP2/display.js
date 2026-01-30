const S_froid = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
const S_chaud = "Caliente ! Vamos a la playa, ho hoho hoho !!";
let S_previous = null;

localStorage.removeItem("allValues");
localStorage.removeItem("allClasses");
localStorage.removeItem("allDates");


const I_interval = setInterval(() => {
    if (I_i >= A_tableau.length) {
        clearInterval(I_interval);
        return;
    }

    let I_val = A_tableau[I_i];
    let O_receiverSpan = document.getElementById("receiver");
    let O_receiverContainer = document.getElementById("receiver-container");
    let O_phrase = document.getElementById("phrase");
    let O_aria_phrase = document.getElementById("aria_phrase");

    if (O_receiverSpan) O_receiverSpan.textContent = I_val;

    if (O_receiverContainer) {
        O_receiverContainer.classList.remove(S_previous);

        if (I_val <= 0) {
            S_previous = "blue";
            O_phrase.textContent = S_froid;
        } else if (I_val <= 20) {
            S_previous = "green";
            O_phrase.textContent = "";
        } else if (I_val <= 30) {
            S_previous = "orange";
            O_phrase.textContent = "";
        } else if (I_val <= 40) {
            S_previous = "red";
            O_phrase.textContent = S_chaud;
        }

        O_receiverContainer.classList.add(S_previous);
    }

    saveToHistory(I_val, S_previous, A_tableau_dates[I_i]);

    if (O_aria_phrase) {
        O_aria_phrase.textContent = "";
        setTimeout(() => {
            O_aria_phrase.textContent = I_val + " a été ajouté à l'historique.";
        }, 10);
    }

    I_i += 1;
}, 2000);
