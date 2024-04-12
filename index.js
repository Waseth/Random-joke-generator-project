const btn = document.querySelector('.whole button');
const pJoke = document.querySelector('.whole p');
btn.addEventListener('click', accessJoke);
document.addEventListener('DOMContentLoaded',accessJoke)
async function accessJoke(){
   const data= await fetch('https://icanhazdadjoke.com/',{
    headers:{
        'Accept':'application/json'
    }
   });
   const object = await data.json();
    pJoke.innerHTML= object.joke;
}




