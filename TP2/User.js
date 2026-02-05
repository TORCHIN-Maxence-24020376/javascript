class User {
    constructor() {
        this.S_url = "user.json";
    }

    async fetchUserData() {
        try {
            const O_response = await fetch(this.S_url);
            if (!O_response.ok) throw new Error("Erreur chargement utilisateur");
            return await O_response.json();
        } catch (O_error) {
            console.error(O_error);
            return null;
        }
    }

    getTemplate() {
        const O_template = document.getElementById("account");
        return O_template ? O_template.innerHTML : "";
    }

    async populate() {
        const O_data = await this.fetchUserData();
        if (!O_data) return;

        const O_nom = document.getElementById("user-nom");
        const O_prenom = document.getElementById("user-prenom");
        const O_mail = document.getElementById("user-mail");

        if (O_nom) O_nom.textContent = O_data.nom;
        if (O_prenom) O_prenom.textContent = O_data.prenom;
        if (O_mail) O_mail.textContent = O_data.mail;
    }
}
