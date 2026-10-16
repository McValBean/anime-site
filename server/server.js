import dotenv from 'dotenv';
import { anime } from './data/animeData.js';
dotenv.config();    
import express from 'express';
import cors from 'cors';
 
const app = express();

app.use(cors());
app.use(express.json()); 
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!')
})
app.get('/anime', (req,res) => {
    res.json(anime);
})
app.get('/anime/:id', (req,res) => {
  const animeId = parseInt(req.params.id);
  const selectedAnime =anime.find(anime => anime.id === animeId);
  if(selectedAnime){
    res.json(selectedAnime);
  }
  else{
    res.status(404).json({message: 'Anime not found'});
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})