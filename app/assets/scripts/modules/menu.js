import $ from "jquery";

class Menu {
    constructor() {
        this.menuIcon = $(".b-desc__menu-icon");
        this.menu = $(".b-menu");
        this.content = $(".content");
        
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuIcon.toggleClass("b-desc__menu-icon--close-x");
        this.menu.toggleClass("b-menu--visible");
        this.content.toggleClass("content-show-menu");
        // console.log(this.menu.hasClass("b-menu--visible"))
    }
}

export default Menu;