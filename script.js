const menuButton = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-icon');
const navigationPage = document.querySelector('.navigation');

const browserWidth = document.documentElement.clientWidth;

if(browserWidth < 1000){
    closeButton.classList.add('hidden');
    navigationPage.classList.add('hidden');
    menuButton.classList.remove('hidden');
}else{
    closeButton.classList.add('hidden');
    menuButton.classList.add('hidden');
    navigationPage.classList.remove('hidden');
}

menuButton.addEventListener('click',() => {
    disableScroll();
    closeButton.classList.remove('hidden');
    menuButton.classList.add('hidden');
    navigationPage.classList.remove('hidden');
})

closeButton.addEventListener('click', () => {
    enableScroll();
    closeButton.classList.add('hidden');
    menuButton.classList.remove('hidden');
    navigationPage.classList.add('hidden');
})
function linkClick(e){
    enableScroll();
    navigationPage.classList.add('hidden');
    closeButton.classList.add('hidden');
    if(browserWidth < 1000){
        menuButton.classList.remove('hidden');
    }else{
        navigationPage.classList.remove('hidden')
    }
  }

// resize event
window.addEventListener("resize", () => {
    if(document.documentElement.clientWidth < 1000){
        closeButton.classList.add('hidden');
        navigationPage.classList.add('hidden');
        menuButton.classList.remove('hidden');
    }else{
        closeButton.classList.add('hidden');
        menuButton.classList.add('hidden');
        navigationPage.classList.remove('hidden');
    }
});



// stop scroll
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


  function preventDefault(e) {
    e.preventDefault();
  }

  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  
  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }