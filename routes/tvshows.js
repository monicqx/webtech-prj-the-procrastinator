var models  = require('../models');
var express = require('express');
var router  = express.Router();

var TvShow=models.TvShow;

// create a tvshow
router.post('/tvshows', function(req,res) {
    TvShow.create(req.body).then(function(){
      res.status(201).send;
    }).catch(function(err){
      console.warn(err);
    })
});

// get all tvshows
router.get('/tvshows', function(req,res){
    TvShow.findAll().then(function(tvshows){
        res.status(200).send(tvshows);
    });
});

// get one tvshow by id
router.get('/tvshows/:id', function(request,response){
    TvShow.findById(request.params.id).then(function(article){
        if(TvShow) {
            response.status(200).send(article);
        } else {
            response.status(404).send();
        }
    });
});

// update a specific tvshow by id
router.put('/tvshows/:id', function(request,response){
    TvShow
        .findById(request.params.id)
        .then(function(tvshow){
            if(tvshow) {
                tvshow
                    .updateAttributes(request.body)
                    .then(function(){
                        response.status(202).send('Updated successfully.');
                    })
                    .catch(function(error){
                        console.warn(error);
                        response.status(400).send('There wa a server error.');
                    });
            } else {
                response.status(404).send();
            }
        });
});

// delete a tvshow by id
router.delete('/tvshows/:id', function(req,res){
    TvShow
        .findById(req.params.id)
        .then(function(tvshow){
            if(tvshow) {
                tvshow
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