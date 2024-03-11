// hamburger button
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');

let scrollStarted = false;

btn.addEventListener('click', navToggle); 
document.addEventListener('scroll', scrollPage);

function navToggle() {
    console.log(btn)
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

// scroll page
function scrollPage() {
    const scrollPos = window.scrollY;
   // console.log(scrollPos);
   if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
   } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
   }
}

// counter
function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';
        // console.log(counter);

        const updateCounter = () => {
            // get count target
            const target = +counter.getAttribute('data-target');
           // console.log(target);
            // get current counter value
            const c = +counter.innerText;

            // create an increment 
            const increment = target / 100;

            // if counter is less than target, add increment
            if (c < target) {
                // Round up and set the counter value 
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 65);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => counter.innerText = '0');
}

// countUp();

