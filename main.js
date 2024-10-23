var menu = document.getElementById('toggle-menu');
var ismenu = false;
var list = document.querySelector('.container nav ul');

// Function to show the menu
function showMenu() {
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.position = 'absolute';
    list.style.left = '0';
    list.style.top = '100%';
    list.style.width = '100%';
    list.style.backgroundColor = 'black';

    var links = document.querySelectorAll('header nav ul li');
    links.forEach(link => {
        link.style.padding = '0px';
    });

    ismenu = true;
}

// Function to hide the menu
function hideMenu() {
    list.style.display = 'none';
    ismenu = false;
}

// Toggle the menu on click
menu.addEventListener('click', () => {
    if (!ismenu) {
        showMenu();
    } else {
        hideMenu();
    }
});
