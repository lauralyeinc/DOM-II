// Your code goes here
// #1 mouseover  #2 mouseout 
const MiddleImgs = document.querySelectorAll('.img-content');

MiddleImgs.forEach((image) => {
  image.addEventListener('mouseover', (event) => {
    image.style.transform = 'scale(1.3)';
    image.style.transition = 'transform 0.5s';
  });
  
  image.addEventListener('mouseout', (event) => {
    image.style.transform = 'scale(1.0)';
    image.style.transition = 'transform 0.5s';
  });
    
});

//---------------------------

// #3  dbclick
const numbertwo = document.querySelector('footer');

numbertwo.addEventListener('dblclick', function (event) {
  console.log('footer was double clicked');
  console.log(event.target);
  numbertwo.style.background = "pink";
});

const threepointfive = document.querySelector('header');

threepointfive.addEventListener('click', function (event) {
  console.log('Navigation area was clicked');
  console.log(event.target);
  threepointfive.style.background = "orange";
  console.log(event.myEventHandlingData);
})


//---------------------------

// #4 resize  (in the console)

const numberfour = document.querySelector('.container');

function reportContainerSize() {
  console.log(numberfour.textContent = window.innerHeight);
}

window.onresize = reportContainerSize;

//--------------------------

// #5  keydown  (in the console, but has an error)     
document.addEventListener('keydown', numberfive);

//doesn't work  error 

function numberfive(event) {
  log.textContent += `${event.code}`;
}

//---------------------------

// #6 drag 
// let dragged;

// document.addEventListener('drag', function(event) {

// }, false);

// document.addEventListener('dragstart', function(event) {
//   dragged = event.target;
//   event.target.style.opacity= .5;
// }, false);

// document.addEventListener('dragend', function(event) {
//   event.target.style.opacity = "";
// }, false);

// document.addEventListener('dragover', function(event) {
//   event.preventDefault();
// }, false);

// document.addEventListener('dragenter', function(event) {
// if (event.target.className == 'btn') {
//   event.target.style.background = "blue";
//   }
// }, false);

// document.addEventListener('dragleave', function(event) {
//   if (event.target.className == 'btn') {
//     event.target.style.background = "";
//   }
// }, false);

// document.addEventListener('drop', function(event) {
//   event.preventDefault();
//   if (event.target.className == 'btn') {
//     event.target.style.background = "";
//     dragged.parentNode.removeChild( dragged );
//     event.target.appendChild( dragged );
//   }
// }, false);

// ------------------------------------------------------------

// # 7 load on about-us.js


  
// # 8 select 
// function numbereight(event) {
//   const log = document.getElementsByTagName('p');
//   const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//   log.textContent = `You selected: ${selection}`;
// }

// const input = document.querySelector('input');
// input.addEventListener('select', logSelection);





