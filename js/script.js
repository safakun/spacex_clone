// hamburger button
const btn = document.getElementById('menu-btn');

btn.addEventListener('click', navToggle); 

function navToggle() {
    console.log(btn)
    btn.classList.toggle('open');
}

