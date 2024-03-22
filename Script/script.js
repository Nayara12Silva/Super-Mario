function jump(){
const mario = document.querySelector('.mario');

    mario.classList.add('pulo');
    setTimeout(()=>{
    mario.classList.remove('pulo');

    },500)
}
const loop = setInterval(()=>{
const pipe = document.querySelector('.pipe-image');
const mario = document.querySelector('.mario');

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition);

    if(pipePosition <= 95 && pipePosition > 0 && marioPosition <80){
        pipe.style.animation = 'none';
        pipe.style.left =`${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom =`${marioPosition}px`

        mario.src ="./Src/game-over.png";
        mario.style.width = '55px';
        mario.style.marginLeft = '40px'

        clearInterval(loop);
        
    }

},10)

document.addEventListener('keydown', jump);



//alert("helo")