function getRandomInt(I_min, I_max) {
    return Math.floor(Math.random() * (I_max - I_min + 1)) + I_min;
}

function get_current_time() {
    let O_date = new Date();
    return O_date.toLocaleDateString() + " " + O_date.toLocaleTimeString();
}

var A_tableau = [];
var A_tableau_dates = [];

for (let I_i = 0; I_i < 20; I_i++) {
    A_tableau.push(getRandomInt(-10, 40));
    A_tableau_dates.push(get_current_time());
}

var I_i = 0;
