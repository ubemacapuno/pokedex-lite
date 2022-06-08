document.querySelector('#button1').addEventListener('click', getFetch)
document.querySelector('#button1').addEventListener('click', toggleHidden)
document.querySelector('#button2').addEventListener('click', getRandom)
document.querySelector('#button2').addEventListener('click', toggleHidden)

function toggleHidden(){
    card1.classList.add('hidden');
    card1.classList.toggle('hidden');
}

async function getFetch(){
    try {
        const choice = document.querySelector('input').value.toLowerCase().trim().replace(/^\s+/, "")//choice is the pokemon that user inputs
        const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
        const res = await fetch(url)
        const data = await res.json()
        let pokeImg = []
        const poke_type = data.types.map(type => type.type.name)
        const abilities = data.abilities.map(ability =>` ${ability.ability.name}` )
        pokeImg.push(data.sprites.front_default)
        document.querySelector(".pokephoto").src = pokeImg[0]
        document.querySelector(".name").innerText = ` ${data.name}`
        document.querySelector(".number").innerText = ` ${data.id}`
        document.querySelector(".type1").innerText = ` ${poke_type.join(' / ').toLowerCase()}`
        document.querySelector(".ability").innerText = ` ${abilities}`
        document.getElementById("card1").style.background = `var(--${poke_type.join('), var(--').toLowerCase()}` + `)`
        document.getElementById("card1").style.backgroundImage = `linear-gradient(45deg, var(--${poke_type.join('), var(--').toLowerCase()}` + `))`
    }catch (error){
        errorStyle()
        const choice = document.querySelector('input').value.toLowerCase().trim().replace(/^\s+/, "")
        document.querySelector(".name").innerText = `Error 404 "${choice}" Not Found in Database! Please review entry and submit again.`
        console.log(`Error caught in getFetch() Catch - ${error}`)
    }
}

async function getRandom(){
    try {
        const randomChoice = Math.floor(Math.random() * 898) //As of 06/08/2022, there are 898 total pokemon in the database; this is value is currently hard-coded!
        const url = `https://pokeapi.co/api/v2/pokemon/${randomChoice}`
        const res = await fetch(url)
        const data = await res.json()
        let pokeImg = []
        const poke_type = data.types.map(type => type.type.name)
        const abilities = data.abilities.map(ability =>` ${ability.ability.name}` )
        pokeImg.push(data.sprites.front_default)
        document.querySelector(".pokephoto").src = pokeImg[0]
        document.querySelector(".name").innerText = ` ${data.name}`
        document.querySelector(".number").innerText = ` ${data.id}`
        document.querySelector(".type1").innerText = ` ${poke_type.join(' / ').toLowerCase()}`
        document.querySelector(".ability").innerText = ` ${abilities}`
        document.getElementById("card1").style.background = `var(--${poke_type.join('), var(--').toLowerCase()}` + `)`
        document.getElementById("card1").style.backgroundImage = `linear-gradient(45deg, var(--${poke_type.join('), var(--').toLowerCase()}` + `))`
    }catch (error){
        errorStyle()
        document.querySelector(".name").innerText = `Error 404 Not Found! Oops! \n${error}`
        console.log(`Error caught in getRandom() Catch - ${error}`)
    }
}

function errorStyle(){
    document.querySelector(".number").innerText = `Error`
    document.querySelector(".pokephoto").src = `Error`
    document.querySelector(".type1").innerText = `Error`
    document.querySelector(".ability").innerText = `Error`
    document.getElementById("card1").style.background = `linear-gradient(45deg, var(--background-color), var(--heading-color))`
}