var models  = require('../models');
var express = require('express');
var router  = express.Router();

var Genre=models.Genre;

// create a Genre
router.post('/genres', function(req,res) {
    Genre.create(req.body).then(function(){
      res.status(201).send;
    }).catch(function(err){
      console.warn(err);
    })
});

// get all genres and all tvshows associated with genres
router.get('/genres', function(req, res) {
    Genre.findAll({limit: 100,include: [{model: models.TvShow}]
        }).then(function(genres) {
             res.status(200).send(genres);
    });
});

// get one genre by id
router.get('/genres/:id', function(request,response){
    Genre.findById(request.params.id).then(function(article){
        if(Genre) {
            response.status(200).send(article);
        } else {
            response.status(404).send();
        }
    });
});

// delete a genre by id
router.delete('/genres/:id', function(req,res){
    Genre
        .findById(req.params.id)
        .then(function(article){
            if(article) {
                article
                    .destroy()
                    .then(function(){
                        res.status(204).send();
                    })
                    .catch(function(error){
                        console.warn(error);
                        res.status(400).send('There was a server error.');
                    });
            } else {
                res.status(404).send();
            }
        });
});

module.exports = router;