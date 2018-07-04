import $ from "jquery";

class Menu {
    constructor() {
        this.menuIcon = $(".b-desc__menu-icon");

        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuIcon.toggleClass("b-desc__menu-icon--close-x");
    }
}

export default Menu;