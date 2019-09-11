// #6 
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);


// # 7 load 

const Success = document.querySelector('.packing .success');
const OhSnap = document.querySelector('.packing .error');
const Abort = document.querySelector('.packing .abort');
const log = document.querySelector('.event-log');

function numberseven(event) {
    log.textContent = log.textContent + `${event.type}: ${event.loaded} items transferred\n`;
}

function addListeners(packing) {
    packing.addEventListener('loadstart', handleEvent);
    packing.addEventListener('load', handleEvent);
    packing.addEventListener('loadend', handleEvent);
    packing.addEventListener('progress', handleEvent);
    packing.addEventListener('error', handleEvent);
    packing.addEventListener('abort', handleEvent);
}

function runpacking(url) {
    log.textContent = '';

    const packing = new packingItemsNumber();
    addListeners(packing);
    packing.open("GET", url);
    packing.send();
    return packing;  
}

success.addEventListener('click', () => {
    runpacking('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg');
});

OhSnap.addEventListener('click', () => {
    runpacking('https://somewhere.org/i-dont-exist');
});

Abort.addEventListener('click', () => {
    runpacking('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg').abort();
});


// #8 select

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);

// # 9 wheel 

function zoom(event) {
      event.preventDefault();
      scale += event.deltaY * -0.01;
    
      // Restrict scale
      scale = Math.min(Math.max(.125, scale), 4);
    
      // Apply scale transform
      el.style.transform = `scale(${scale})`;
    } 
    let scale = 1;
    const el = document.querySelector('div');
    el.onwheel = zoom;

// # 10 key up

const log2 = document.getElementById('keyuplog');

document.addEventListener('keyup', logKey);

function logKey(e) {
  log2.textContent += `${e.code}`;
}