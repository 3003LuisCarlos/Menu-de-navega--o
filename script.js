function menuToggle() {
   let menuArea = document.getElementById('menu-area');

    if(menuArea.classList.contains('menu-opned') == true) {
        menuArea.classList.remove('menu-opned');
    } else {
        menuArea.classList.add('menu-opned');
    }
}