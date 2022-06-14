## PokéDex Lite: <a target="_blank" href="https://pokedexlookup.netlify.app">Visit Demo Here (Work In Progress!)</a> 

This simple project was made to teach myself how to use promises, async/await, and try/catch with the Pokémon API by <a target="_blank" href="https://pokeapi.co/">PokéAPI.co</a>.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, API by PokéAPI.co. 
You can also view an interactive demo version <a target="_blank" href="https://codepen.io/corey-damocles/pen/rNJZQXB">here on my codepen.io</a>!

 <tr>
    <td width="33.3%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/pokedex-lite.gif?raw=true" width="100%"  alt="codewars repo gif."/>
    </td>
  </tr>

## Optimizations:
In the future, I'd like to use either Svelte or React and get more practice in with those libraries. Also figure out a way to have everything display once everything has loaded; currently, it seems like the image rendering lags behind when the text renders.

## Lessons Learned:
One cool thing I figured out how to do was to make the card responsive to the typing of the pokémon that is provided from the API. I set each pokémon type to a specific color in style.css (Ex: Color for Fighting type was assigned as <strong>--fighting: #C03028</strong>; <strong>Flying --flying: #A890F0;</strong> etc.). In main.js, I used the Document method <strong>.getElementById()</strong> and a template literal to assign the color of the card according to which type or types (poke_type) were passed from the API.

I have used callbacks in the past when incorporating API calls; after building this application, I learned that using promises is just as effective and looks cleaner than callbacks (ex: the infamous "Callback Hell" pyramid). This project is still in progress, and I would like to return to this project in the future after I learn a bit more. I will plan to update this section again after I've made changes!
