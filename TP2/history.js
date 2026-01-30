function saveToHistory(I_value, S_className, S_date) {
    let S_oldValues = localStorage.getItem("allValues") || "";
    let S_oldClasses = localStorage.getItem("allClasses") || "";
    let S_oldDates = localStorage.getItem("allDates") || "";

    if (S_oldValues === "") {
        localStorage.setItem("allValues", I_value);
        localStorage.setItem("allClasses", S_className);
        localStorage.setItem("allDates", S_date);
    } else {
        localStorage.setItem("allValues", S_oldValues + "|" + I_value);
        localStorage.setItem("allClasses", S_oldClasses + "|" + S_className);
        localStorage.setItem("allDates", S_oldDates + "|" + S_date);
    }
}

function updateHistory() {
    let O_corpsTableau = document.getElementById("historique-corps");
    if (!O_corpsTableau) return;

    let S_valuesStr = localStorage.getItem("allValues") || "";
    let S_classesStr = localStorage.getItem("allClasses") || "";
    let S_datesStr = localStorage.getItem("allDates") || "";

    if (S_valuesStr === "") {
        O_corpsTableau.innerHTML = "";
        return;
    }

    let A_valuesTab = S_valuesStr.split("|");
    let A_classesTab = S_classesStr.split("|");
    let A_datesTab = S_datesStr.split("|");

    O_corpsTableau.innerHTML = "";

    for (let I_i = 0; I_i < A_valuesTab.length; I_i++) {
        let O_ligne = document.createElement("tr");

        let O_celluleDate = document.createElement("td");
        O_celluleDate.textContent = A_datesTab[I_i];

        let O_celluleVal = document.createElement("td");
        O_celluleVal.textContent = A_valuesTab[I_i] + " °C";
        O_celluleVal.className = A_classesTab[I_i];

        O_ligne.appendChild(O_celluleDate);
        O_ligne.appendChild(O_celluleVal);
        O_corpsTableau.appendChild(O_ligne);
    }
}

if (document.getElementById("historique-corps")) {
    updateHistory();
    setInterval(updateHistory, 2000);
}
