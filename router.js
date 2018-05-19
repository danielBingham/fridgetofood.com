var express = require('express');
var router = express.Router();

var config = require('./config');

module.exports = function(database) {

    /******************************************************************************
     *          Index Route
     *
     * The index route needs to return the html, css, and javascript for the SPA
     * front end.  It isn't considered a RESTful route in this case.
     ******************************************************************************/
    router.get('/', function(request, response, next) {
      response.render('index', { title: 'Express' });
    });

    /******************************************************************************
     *          Recipe REST Routes
     ******************************************************************************/

    // Get a list of all recipes.
    router.get('/recipes', function(request, response, next) {
        database.query('select * from recipes', function(err, rows, fields) {
            console.log(rows);
        });

    });

    // Create a new recipe
    router.post('/recipes', function(request, response, next) {

    });

    // Get the details of a single recipe
    router.get('/recipes/:recipe_id', function(request, response, next) {

    });

    // Edit an existing recipe.
    router.post('/recipes/:recipe_id', function(request, response, next) {

    });


    // Delete an existing recipe.
    router.delete('/recipes/:recipe_id', function(request, response, next) {

    });

    return router;
};
