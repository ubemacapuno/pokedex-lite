## PokéDex Lite: <a target="_blank" href="https://codepen.io/corey-damocles/pen/rNJZQXB">Visit My codepen.io Demo Here</a>!

This simple project was made to teach myself how to use <strong>promises, async/await, and try/catch</strong> with the Pokémon API by <a target="_blank" href="https://pokeapi.co/">PokéAPI.co</a>.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, API by PokéAPI.co. 
You can also view an interactive demo version hosted on Netlify <a target="_blank" href="https://codepen.io/corey-damocles/pen/rNJZQXB">here.</a>

 <tr>
    <td width="33.3%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/pokedex-lite.gif?raw=true" width="100%"  alt="codewars repo gif."/>
    </td>
  </tr>

## Optimizations:
In the future, I'd like to use either Svelte or React and get more practice in with those libraries. Also figure out a way to have everything display once everything has loaded; currently, it seems like the image rendering lags behind when the text renders.

## Lessons Learned:
One cool thing I figured out how to do was to make the card responsive to the typing of the pokémon that is provided from the API. I set each pokémon type to a specific color by using CSS variables (Ex: Color for Fighting type was assigned as <strong>--fighting: #C03028</strong>; Flying as <strong>--flying: #A890F0;</strong> etc.). In app.js, I used the Document method <strong>.getElementById()</strong> and a template literal to assign the color of the card according to which type or types (poke_type) were passed from the API. With this, for pokémon that have multiple types, you will notice that the card will incorporate both colors in a linear-gradient!

One problem I overcame was an error I would get when a pokémon did NOT have two types. When the API got the request about a second type that didn't exist, I was getting back an error. My code had originally requested a type 1 and a type 2, but I got around this by instead using the <strong>.map()</strong> method. With map, the updated code was requesting to iterate through each element (pokémon type) and return each element (pokémon type); if there was one type, it would only request and return one type without error. If there were two, it would request and return two without error. I also incorporated map with the pokémon abilities, which can range from 1 or more.

I would like to return to this project in the future after I learn more about using frameworks. I will plan to update this section again after I've made changes!
