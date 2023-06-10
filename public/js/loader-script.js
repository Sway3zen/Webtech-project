var navbarBrand = document.querySelector('.navbar-brand');
var tagbody = document.querySelector('body');
var csslink = document.querySelector('link[href="styles/loader.css"]');

var rect = navbarBrand.getBoundingClientRect();
var targetX = rect.left;
var targetY = rect.top;

var loader = document.getElementById('loader');

loader.style.transform = 'translate(-50%, -50%)';

function moveLoaderToTarget() {
  var startX = window.innerWidth / 2; // половина ширини екрана
  var startY = window.innerHeight / 2; // половина висоти екрана

  targetX -= startX;
  targetY -= startY;

  loader.style.opacity = '0';
  loader.style.transform = 'translate(' + (targetX + 5) + 'px, ' + (targetY + 25) + 'px)';
}

window.addEventListener('load', function() {
  setTimeout(moveLoaderToTarget, 1000); // Затримка виклику функції на 1 секунду (для демонстраційних цілей)
});

function deletecss() {
  csslink.disabled = true;
  var element = document.getElementById('preloader');
  element.remove();
}


function hideBackground() {
  const preloaderContainer = document.querySelector('.preloader-container');
    preloaderContainer.classList.add('hide-background');
  setTimeout(deletecss, 2200);
  setTimeout(() => {
document.body.style.overflow = "visible";
}, 1000);
}



const loaderContainer = document.querySelector('.loader-container');
loaderContainer.addEventListener('transitionend', hideBackground);
