const container = document.querySelector('.container');
let posX = 0;
let maxX = -(container.clientWidth - window.innerWidth);

window.addEventListener('wheel', function(e) {
    console.log(posX);
    posX -= e.deltaY;
    if(posX>0) posX=0;
    if(posX < maxX) posX = maxX;
    container.style.transform = `translateX(${posX}px)`;
})
