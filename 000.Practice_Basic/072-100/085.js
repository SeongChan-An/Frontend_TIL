const lands = document.getElementsByClassName('land');
[...lands].forEach(
  land => land.style.fill = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
);