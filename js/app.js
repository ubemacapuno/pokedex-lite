//Async Await Practice
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('button').addEventListener('click', toggleHidden)

function toggleHidden(){
    card1.classList.add('hidden');
    card1.classList.toggle('hidden');
}

async function getFetch(){
    try {
        const choice = document.querySelector('input').value.toLowerCase() //choice is the pokemon that user inputs
        const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
        const res = await fetch(url)
        const data = await res.json()
        let pokeImg = []
        const poke_type = data.types.map(type => type.type.name)
        const abilities = data.abilities.map(ability =>` ${ability.ability.name}` )
        console.log(data)
        console.log(data.name)
        console.log(data.id)
        console.log(data.sprites.front_default)
        pokeImg.push(data.sprites.front_default)
        document.querySelector(".pokephoto").src = pokeImg[0]
        document.querySelector(".name").innerText = `Name: ${data.name}`
        document.querySelector(".number").innerText = `Number: ${data.id}`
        document.querySelector(".type1").innerText = `Type: ${poke_type.join(' / ').toLowerCase()}`
        document.querySelector(".ability").innerText = `Abilities: ${abilities}`
        document.getElementById("card1").style.background = `var(--${poke_type.join('), var(--').toLowerCase()}` + `)`
        document.getElementById("card1").style.backgroundImage = `linear-gradient(45deg, var(--${poke_type.join('), var(--').toLowerCase()}` + `))`
        console.log(` linear-gradient(45deg, var(--${poke_type.join('), var(--').toLowerCase()}` + `))`)
    }catch (error){
        const choice = document.querySelector('input').value
        document.querySelector(".name").innerText = ``
        document.querySelector(".number").innerText = `Error 404 Not Found - "${choice}" does not exist. Please check spelling and submit again!`
        document.querySelector(".pokephoto").src = ''
        document.querySelector(".type1").innerText = ``
        document.querySelector(".ability").innerText = ``
        console.log(`Error caught in Catch - ${error}`)
    
    }
}