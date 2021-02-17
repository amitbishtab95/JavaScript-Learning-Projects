const quotes=[
{
    name:'Walt Disney',
    quote:'The Best Way To Get Started Is To Quit Talking And Begin Doing'
},

{
    name:' Winston Churchill',
    quote:'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty'
},

{
    name:' Will Rogers',
    quote:'Don’t Let Yesterday Take Up Too Much Of Today'
},

{
    name:' Unknown',
    quote:'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character'
},

{
    name:'Vince Lombardi',
    quote:'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up'
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote (){
    let randomNumber=Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[randomNumber].name; 
    quote.innerHTML = quotes[randomNumber].quote;

}