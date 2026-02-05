class App {
    constructor() {
        this.O_sensor = new Sensor("api.json");
        this.O_ui = new Interface();
    }

    async start() {
        const A_history = await this.O_sensor.fetchHistory();
        if (!A_history || A_history.length === 0) return;

        const O_latest = A_history[A_history.length - 1];
        const I_val = parseInt(O_latest.Valeur, 10);

        this.O_ui.updateCurrent(I_val);
        this.O_ui.updateHistoryTable(A_history);
        this.O_ui.updateAlerts(I_val);
    }
}
