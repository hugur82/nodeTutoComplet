const express = require('express');
const app = express();
let pokemons = require('./mock-pockemon.js')

const port = (3000 || process.env.PORT)

app.get('/api/pokemons/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === id);
    res.send(`Le pokemon choisi est ${pokemon.name}`);
    console.log(req.params);
})

app.get('/api/pokemons', (req,res) => {
    res.send(pokemons)
})

app.post('/api/pokemons', (req, res) => {
    const id = 123;
    const pokemonCreated = {...req.body, ...{id:id, created: new Date()}};
    pokemons.push(pokemonCreated);
})

app.listen(port, ()=> console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))