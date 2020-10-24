const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 25;

function shadow(e) {
  //const width = hero.offsetWidth;
  //const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height} = hero; //ES6 destrucuting

  let { offsetX: x , offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (Math.round(x / width * walk) - (walk / 2));
  const yWalk = (Math.round(y / height * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px #FDB0C0`;
}

hero.addEventListener('mousemove', shadow);
