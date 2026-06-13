// Imports
import { get_link } from "./linkHandler.js";

// Classes
class NavigationItem {
    constructor (title, url) {
        this.title = title;
        this.url = url;
    };
    get element () {
        let linkElement = document.createElement('a');
            linkElement.href = get_link(this.url);

            let innerElement = document.createElement('div');
                innerElement.innerText = this.title;
                innerElement.classList = 'navElement';

            linkElement.appendChild(innerElement);

        return linkElement;
    };
};

// Variables
let navItems = [
    new NavigationItem ('Home', 'HOME'),
    new NavigationItem ('Find Me', 'FIND_ME'),
]

// Functions
function addNavItems () {
    let navHolder = document.querySelector('nav');

    navItems.forEach(navItem => {
        navHolder.appendChild(navItem.element);
    });
};

// Exports
export { addNavItems };