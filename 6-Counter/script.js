

const counter = document.querySelector('.counter');
const lowerCount = document.querySelector('#lowerCountBtn');
const addCount = document.querySelector('#addCountBtn');
// console.log(lowerCount);
let count=0;

lowerCount.addEventListener('click',decrementCounter);

addCount.addEventListener('click',incrementCounter);

function incrementCounter (){
    count++;
    counter.innerHTML=count;
    if(counter.innerHTML>'0'){
    counter.style.color='blue';
    }else if(counter.innerHTML==='0'){
        counter.style.color='white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:600,fill:'forwards'});
}
function decrementCounter (){
    count--;
    counter.innerHTML=count;
    if(counter.innerHTML<'0'){
        counter.style.color='red';
    }else if(counter.innerHTML==='0'){
            counter.style.color='white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],
    {duration:600,fill:'forwards'});
}