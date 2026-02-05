class Sensor {
    constructor(S_apiUrl) {
        this.S_apiUrl = S_apiUrl;
    }

    async fetchHistory() {
        try {
            const O_response = await fetch(this.S_apiUrl);
            if (!O_response.ok) {
                throw new Error("Erreur réseau");
            }
            const O_data = await O_response.json();
            return O_data.capteurs;
        } catch (O_error) {
            console.error("Erreur fetch:", O_error);
            return [];
        }
    }
}
