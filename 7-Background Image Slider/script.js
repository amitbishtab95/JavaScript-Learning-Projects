

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container= document.querySelector('.images');

let counter=0;

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if(counter===5){
        counter=0;
    }
    counter++;
    container.style.backgroundImage = `url(bg-${counter}.jpg)`;
}
function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});

    if(counter<0){
        counter=6;
    }
    counter--;
    container.style.backgroundImage = `url(bg-${counter}.jpg)`;
}