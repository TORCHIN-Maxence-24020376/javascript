class Interface {
    constructor() {
        this.S_blue = "blue";
        this.S_green = "green";
        this.S_orange = "orange";
        this.S_red = "red";
        this.S_coldMsg = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        this.S_hotMsg = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        this.S_lastColor = null;
    }

    getColor(I_val) {
        if (I_val <= 0) return this.S_blue;
        if (I_val <= 20) return this.S_green;
        if (I_val <= 30) return this.S_orange;
        if (I_val <= 40) return this.S_red;
        return "";
    }

    updateCurrent(I_val) {
        const O_span = document.getElementById("receiver");
        const O_container = document.getElementById("receiver-container");

        if (O_span) O_span.textContent = I_val;

        if (O_container) {
            if (this.S_lastColor) O_container.classList.remove(this.S_lastColor);

            const S_newColor = this.getColor(I_val);
            O_container.classList.add(S_newColor);
            this.S_lastColor = S_newColor;
        }
    }

    updateAlerts(I_val) {
        const O_phrase = document.getElementById("phrase");
        if (!O_phrase) return;

        if (I_val <= 0) {
            O_phrase.textContent = this.S_coldMsg;
        } else if (I_val > 30) {
            O_phrase.textContent = this.S_hotMsg;
        } else {
            O_phrase.textContent = "";
        }
    }

    updateHistoryTable(A_data) {
        const O_tbody = document.getElementById("historique-corps");
        if (!O_tbody) return;

        O_tbody.innerHTML = "";

        A_data.forEach(O_item => {
            const I_val = parseInt(O_item.Valeur, 10);

            const O_tr = document.createElement("tr");

            const O_tdDate = document.createElement("td");
            const O_date = new Date(O_item.Timestamp * 1000);
            O_tdDate.textContent = O_date.toLocaleString();

            const O_tdVal = document.createElement("td");
            O_tdVal.textContent = O_item.Valeur + " °C";
            O_tdVal.className = this.getColor(I_val);

            O_tr.appendChild(O_tdDate);
            O_tr.appendChild(O_tdVal);
            O_tbody.appendChild(O_tr);
        });
    }
}
