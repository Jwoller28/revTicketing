// console.log(document);

// selecting elements

const elementById = document.getElementById("myElementId");

console.log(elementById);

const elementsByClass = document.getElementsByClassName("myClassName");

console.log(elementsByClass);

const elementsByTags = document.getElementsByTagName("p");

console.log(elementsByTags);


// css selector
const elementBySelector = document.querySelector("#myElementId")

// manipulate

elementById.textContent = "I have been changed";


// traversal

const parent = elementById.parentElement;
const bodyChildren = document.querySelector("body").children;

console.log(bodyChildren);

// bodyChildren[0].nextSibling
bodyChildren[0].previousElementSibling



// delete

// bodyChildren[0].parentElement.removeChild(bodyChildren[0]);


// Events and Listeners

const header = bodyChildren[0];

header.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.currentTarget)
    alert("I have been clicked");
})

// Bubbling & Capturing

// Capturing phase
// Event travels from root of the dom tree down to the target element where the event ocurred

// addEventListener("click", () => , true) ; // capturing phase

// bubbling phase
//After the event reaches the target element and triggers any event listeners, the event then bubbles up from the target element to the root of the DOM tree

// addEventListener("click", () =>); // default


// Fetch API
fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response => {
        if (!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("fetch error: ", error);
    })


// Promises
// three states

// pending
// successful
// failed

// Async/Await keywords

async function getPokemon(number){
    try{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
        let data = await response.json();
        generatePokeImage(data);
    }catch(error){
        console.error(error);
    }
}

getPokemon();



    // <div id="poke-search-div">
    //     <h2>Pokemon Selector</h2>
    //     <input type="number" id="poke-search">
    //     <input type="button" id="poke-search-button" value="Search">
    // </div>

    // <div id="poke-image-div">

    // </div>


const pokeSearchDiv = document.querySelector("#poke-search-div");
const pokeSearchInput = document.querySelector("#poke-search");
const pokeSearchButton = document.querySelector("#poke-search-button");

const pokeImageDiv = document.querySelector("#poke-image-div");

// search for a pokemon, and then display it to the page

pokeSearchButton.addEventListener("click", () => {
    const number = pokeSearchInput.value
    getPokemon(number);
})

function generatePokeImage(data){
    pokeImageDiv.innerHTML = "";
    const image = document.createElement("img");
    image.src = data.sprites.front_default
    pokeImageDiv.appendChild(image);
}