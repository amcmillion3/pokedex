# McMillion Pokédex
## Description
### What is The McMillion Pokédex?
A small app that displays pokémon. 

### Why did I build this project?
I wanted to build a project that consumes an API and uses the data to create the UI. I grew up playing Pokémon so I thought this would be a more enjoyable API project to build than just a simple weather app.

### My Learning Experience
The most important than for this project was fetching and processing the data. I had issues getting the data fetching to work at first mostly because the useEffect React Hook is calling twice upon mounting and at first it was creating an empty array. I solved the problem by setting an initial empty array. The other main pain point I had was building the search function. It was straight forward to get it to search but I was stuck for a little bit with how to get the other pokémon to return when letters were deleted from the search input. I fixed this by using state to create an array of all the pokémon when the data is fetched and never altering the array so I always have all the data to reset the searched data. I enjoyed building it and seeing some of the old pokémon I haven't seen or thought about in a while brought back nice memories from years past. 

## Demo
![Demo](./src/assets/pokedex.gif)

### Built with
- React
- Tailwind

### Run Locally
- Clone this Repo
- Run `npm install` and `npm run start` to start the dev environment
- The application runs in `http://localhost:3000/`.

### Future Features
- When you click on a pokémon I want a details page to come up that contains a bunch of info about the pokemon. 
- I want to add color to the cards based on what type the pokémon is.

### Acknowledgments
- Poke API for providing the data
- Pokémon for all the childhood memories.