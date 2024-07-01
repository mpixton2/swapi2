import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors'
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(cors())
const PORT = 3000;

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const client = await MongoClient.connect(url);
const db = client.db(dbName);

app.use(express.json());

app.get('/api/planets', async (req, res) => {

    try{
    const collection = db.collection('planets');
    const planets = await collection.find({}).toArray();

    res.json(planets)
    }
    catch (err){
        res.status(500).send("Failed to retrieve planets")
    }

})

app.get('/api/films', async (req, res) => {
    try{
    const collection = db.collection('films');
    const films = await collection.find({}).toArray();

    res.json(films)
    }
    catch (err){
        res.status(500).send("Failed to retrieve films")
    }

})

app.get('/api/characters', async (req, res) => {
    try{
    const collection = db.collection('characters');
    const characters = await collection.find({}).toArray();

    res.json(characters)
    }
    catch (err){
        res.status(500).send("Failed to retrieve characters")
    }

})

app.get('/api/planets/:id', async (req, res) => {
    try{

    const { id } = req.params
    console.log(id)
    const collection = db.collection('planets');
    const planet = await collection.find({"id": Number(id)}).toArray();

    res.json(planet)
    }
    catch (err){
        res.status(500).send("Failed to retrieve planet")
    }

})

app.get('/api/characters/:id', async (req, res) => {
    try{

    const { id } = req.params
    console.log(id)
    const collection = db.collection('characters');
    const character = await collection.find({"id": Number(id)}).toArray();

    res.json(character)
    }
    catch (err){
        res.status(500).send("Failed to retrieve character")
    }

})

app.get('/api/films/:id', async (req, res) => {
    try{

    const { id } = req.params
    console.log(id)
    const collection = db.collection('films');
    const film = await collection.find({"id": Number(id)}).toArray();

    res.json(film)
    }
    catch (err){
        res.status(500).send("Failed to retrieve film")
    }

})

app.get('/api/films/:id/characters', async (req, res) => {
    try{

    const { id } = req.params
    console.log(id)
    const filmsColl = db.collection('films_characters');
    const charsColl = db.collection('characters')
    const films = await filmsColl.find({"film_id": Number(id)}).toArray();

     const chars = []
     for (let i = 0; i < films.length; i++){
         let relChar = await charsColl.findOne({"id":films[i].character_id})
         chars.push(relChar)
     }

    res.json(chars)
    }
    catch (err){
        res.status(500).send("Failed to retrieve films" + err)
    }

})

app.get('/api/films/:id/planets', async (req, res) => {
    try{

    const { id } = req.params
    console.log(id)
    const filmsColl = db.collection('films_planets');
    const plansColl = db.collection('planets')
    const films = await filmsColl.find({"film_id": Number(id)}).toArray();

     const planets = []
     for (let i = 0; i < films.length; i++){
         let relPlanet = await plansColl.findOne({"id":films[i].planet_id})
         planets.push(relPlanet)
     }

    res.json(planets)
    }
    catch (err){
        res.status(500).send("Failed to retrieve planets" + err)
    }

})

app.get('/api/characters/:id/films', async (req, res) => {
    try{

    const { id } = req.params
    console.log(id)
    const relFilmsColl = db.collection('films_characters');
    const filmsColl = db.collection('films')
    const relFilms = await relFilmsColl.find({"character_id": Number(id)}).toArray();

     const filmsList = []
     for (let i = 0; i < relFilms.length; i++){
         let relFilm = await filmsColl.findOne({"id":relFilms[i].film_id})
         filmsList.push(relFilm)
     }

    res.json(filmsList)
    }
    catch (err){
        res.status(500).send("Failed to retrieve film" + err)
    }

})

app.get('/api/planets/:id/films', async (req, res) => {
    try{

    const { id } = req.params
    console.log(id)
    const relFilmsColl = db.collection('films_planets');
    const filmsColl = db.collection('films')
    const relFilms = await relFilmsColl.find({"planet_id": Number(id)}).toArray();

     const planetsList = []
     for (let i = 0; i < relFilms.length; i++){
         let relFilm = await filmsColl.findOne({"id":relFilms[i].film_id})
         planetsList.push(relFilm)
     }

    res.json(planetsList)
    }
    catch (err){
        res.status(500).send("Failed to retrieve film" + err)
    }

})

app.get('/api/planets/:id/characters', async (req, res) => {
    try{

    const { id } = req.params
    console.log(id)
    const charsColl = db.collection('characters');
    const planetsColl = db.collection('planets')
    const relChars = await charsColl.find({"homeworld": Number(id)}).toArray();

    res.json(relChars)
    }
    catch (err){
        res.status(500).send("Failed to retrieve film" + err)
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});