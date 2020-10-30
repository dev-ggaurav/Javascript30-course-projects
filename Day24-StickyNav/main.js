const nav = document.getElementById('navbar');
const topOfNav = nav.offsetTop;
const body = document.body;

function fixedNav() {
    if(window.scrollY >= topOfNav) {
        body.style.paddingTop = nav.offsetHeight + 'px';
        body.classList.add('fixed-nav');
    }else{
        body.style.paddingTop = 0;
        body.classList.remove('fixed-nav');
    }
}


window.addEventListener('scroll',fixedNav)