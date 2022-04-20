const express = require('express'); 
const router = express.Router(); 

const MoviesModel = require("../models/Movie.model.js") 
router.get('/', (req, res, next) => {
  MoviesModel.find()
  .then((allMovies => {
    res.render("movies", { allMovies })
  }))
  .catch((err) => console.log("Can't load the movies data!", err))
});

router.get('/:movieId', (req, res, next) => {

  const { movieId } = req.params 

  MoviesModel.findById(movieId)
  .then((oneMovie) => {
    res.render("movie-details", { oneMovie })
  })
  .catch((err) => console.log("Can't get the movies data!", err))
  
});

module.exports = router;