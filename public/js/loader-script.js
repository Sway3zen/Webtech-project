var navbarBrand = document.querySelector('.navbar-brand');
var tagbody = document.querySelector('body');
var csslink = document.querySelector('link[href="styles/loader.css"]');

var rect = navbarBrand.getBoundingClientRect();
var targetX = rect.left;
var targetY = rect.top;

var loader = document.getElementById('loader');

loader.style.transform = 'translate(-50%, -50%)';

function moveLoaderToTarget() {
  var startX = window.innerWidth / 2; 
  var startY = window.innerHeight / 2; 

  targetX -= startX;
  targetY -= startY;

  loader.style.opacity = '1';
  loader.style.transform = 'translate(' + (targetX) + 'px, ' + (targetY+25) + 'px)';
}



window.addEventListener('load', function() {
  setTimeout(moveLoaderToTarget, 1000); 
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
}, 1500);
}



const loaderContainer = document.querySelector('.loader-container');
loaderContainer.addEventListener('transitionend', hideBackground);
