
const colorBtn = document.querySelector('.colorBtn');

const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green', '#3b5998', 'grey','#223423','#765732','#778213'];

colorBtn.addEventListener('click',changeColor);

function changeColor (){
    // bodyBcg.style.backgroundColor=colors[2];
    let random=Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}   