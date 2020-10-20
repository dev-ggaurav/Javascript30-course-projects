const pressed = [];
const secretCode = 'darkmode';
const body = document.body;


window.addEventListener ('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if  (pressed.join('').toLowerCase().includes(secretCode)) {
        body.classList.toggle('active');
    }

    console.log(e.key);
});

