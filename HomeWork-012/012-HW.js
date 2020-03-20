const API = 'https://swapi.co/api/';
let button = document.getElementById('button');
let chekedFilm = document.getElementById('films');
let container = document.querySelector('.container');
let left = document.querySelector(".left");
let right = document.querySelector(".right");
button.addEventListener('click', onClick);
left.addEventListener("click",function(){
    if(currPage!=1){
        currPage--;
        getPlanets(currPage).then(showPlanets);
    }
})
right.addEventListener("click",function(){
    if(currPage!=6){
        currPage++;
        getPlanets(currPage).then(showPlanets);
    }
})
getPlanets().then(showPlanets);
let currPage=1;



function onClick(){
    let promise = new Promise(async function(resolve,reject){
        container.innerHTML='';
        const res = await axios.get(API+"films/"+episode.value+"/");
        episode.value='';
        console.log(res.data);
        resolve(res.data.characters);
    });
    promise.then(people=>{
        people.forEach(async element=>{
            const result = await axios.get(element);
            let div = document.createElement('div');
            div.classList.add('info');
            div.innerHTML=`
            
            <p>
               name: ${result.data.name} <br>
               birth: ${result.data.birth_year}<br>
               male: ${result.data.gender}
            </p>
            `;
            container.append(div);
        });
    })
}
async function getPlanets(currPage=1){
    let config = {
        params :{
            'page' : currPage
        }
    };
    const planets = await axios.get(API+`planets/`,config);
    return planets.data.results;
}
function showPlanets(planets){
    let div = document.querySelector(".planets");
    let count = 1;
    div.innerHTML="";
    planets.forEach(curr=>{
        
        let listOfPlanets = document.createElement("div")
        listOfPlanets.append(count++ + ' ' + curr.name);
        div.append(listOfPlanets);
    })
    div.append(div);
}


