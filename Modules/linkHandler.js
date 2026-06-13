// Variables
let onGitHub = window.location.toString().includes('github');

var lookup_local = {
    'HOME': 'http://127.0.0.1:3000/',
    'FIND_ME': 'http://127.0.0.1:3000/Find-Me/',
};
var lookup_github = {
    'HOME': 'https://axolotlazr.github.io/Find-Me/',
};

// Functions
function bind_links () {
    let allTags_a = document.getElementsByTagName('a');

    for (let i = 0; i < allTags_a.length; i++) {
        let element = allTags_a[i];
        console.log(element.href)
        element.href = onGitHub ? lookup_github[element.href] : lookup_local[element.href];
    };
};
function get_link (lookup) {
    return (onGitHub ? lookup_github[lookup] : lookup_local[lookup]);
};

// Exports
export { get_link, bind_links }