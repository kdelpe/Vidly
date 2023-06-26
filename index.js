const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.listen(4000, () => console.log("Listening on port 4000..."));

const genres = [
    { id: 1, name: 'horror'},
    { id: 2, name: 'comedy'},
    { id: 3, name: 'action'},
];

app.get('/', (req, res) => {
    res.send('Vidly Application Homepage');
});

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.post('/api/genres', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error)
        return res.status(400).send(error.details[0].message)

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genre);
});

app.put('/api/genres/:id', (req, res) => { 
    const genre = genres.find(g => g.id === parseInt(req.params.id))
    if (!genre) res.status(404).send('No genre found!')

    const { error } = validateGenre(req.body);
    if (error)
        return res.status(400).send(error.details[0].message)

    genre.name = req.body.name;
    res.send(genre);

})

app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id))
    if (!genre) res.status(404).send('No genre found!');

    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
})

const validateGenre = (genre) => {
    const schema = {
        name: Joi.string().required()
    }
    return Joi.validate(genre, schema);
}

