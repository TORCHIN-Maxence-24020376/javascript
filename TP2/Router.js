class Router {
    constructor() {
        this.O_main = document.querySelector("main");
        this.S_originalContent = this.O_main.innerHTML;
        this.S_originalTitle = document.title;
        this.O_user = new User();

        this.init();
    }

    init() {
        document.querySelectorAll("nav a").forEach(O_link => {
            O_link.addEventListener("click", (O_event) => this.handleNavigation(O_event));
        });

        window.addEventListener("popstate", (O_event) => {
            if (O_event.state && O_event.state.page === "account") {
                this.loadAccount(false);
            } else {
                this.restoreOriginal(false);
            }
        });
    }

    async handleNavigation(O_event) {
        const S_href = O_event.currentTarget.getAttribute("href");

        if (S_href === "account.html" || S_href === "#account") {
            O_event.preventDefault();
            this.loadAccount(true);
        }
        else if (S_href === "index.html" && window.location.pathname.includes("index.html") ||
            S_href === "index.html" && window.location.pathname.endsWith("/")) {
            if (this.isAccountActive()) {
                O_event.preventDefault();
                this.restoreOriginal(true);
            }
        }
        else if (S_href === "history.html" && window.location.pathname.includes("history.html")) {
            if (this.isAccountActive()) {
                O_event.preventDefault();
                this.restoreOriginal(true);
            }
        }
    }

    isAccountActive() {
        return document.querySelector("#account-title") !== null;
    }

    async loadAccount(B_pushState) {
        const S_html = this.O_user.getTemplate();
        this.O_main.innerHTML = S_html;
        this.O_user.populate();
        document.title = "Mon Compte - TD2";

        if (B_pushState) {
            history.pushState({ page: "account" }, "Mon Compte", "account.html");
        }

        const O_title = document.getElementById("account-title");
        if (O_title) {
            O_title.setAttribute("tabindex", "-1");
            O_title.focus();
        }
    }

    restoreOriginal(B_pushState) {
        this.O_main.innerHTML = this.S_originalContent;
        document.title = this.S_originalTitle;

        if (B_pushState) {
            history.pushState({ page: "original" }, this.S_originalTitle, window.location.pathname);
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    new Router();
});
