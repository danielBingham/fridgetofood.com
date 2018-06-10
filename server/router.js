var express = require('express');
var router = express.Router();

var config = require('./config');

module.exports = function(database) {

    /******************************************************************************
     *          Recipe REST Routes
     ******************************************************************************/

    // Get a list of all recipes.
    router.get('/recipes', function(request, response) {
        database.query(
            'select * from recipes', 
            function(error, results, fields) {
                if ( error ) {
                    throw error;
                }
                response.json(results); 
            }
        );
    });

    // Create a new recipe
    router.post('/recipes', function(request, response) {
        database.query(
            'insert into recipes (title, source_url, created_date, update_date) values (?, ?, now(), now())', 
            [request.params.title, request.params.source_url], 
            function(error, results, fields) {
                if ( error ) {
                    throw error;
                }
                response.json({success: true, id: results.insertId});
            }
        );

    });

    // Get the details of a single recipe
    router.get('/recipes/:id', function(request, response) {
        database.query(
            'select * from recipes where id=?', 
            [request.params.id], 
            function(error, results, fields) {
                if ( error ) {
                    throw error;
                }
                response.json(results);
            }
        );
    });

    // Edit an existing recipe.
    router.post('/recipes/:id', function(request, response) {
        database.query(
            'update recipes set title = ? and source_url = ? where id = ?', 
            [request.params.title, request.params.source_url, request.params.id],
            function(error, results, fields) {
                if ( error ) {
                    throw error;
                }
                response.json({success: true});
            }
        );

    });


    // Delete an existing recipe.
    router.delete('/recipes/:id', function(request, response) {
        database.query(
            'delete from recipes where id = ?',
            [ request.params.id ],
            function(error, results, fields) {
                if ( error ) {
                    throw error;
                }
                response.json({success: true});
            }
        );
    });

    return router;
};
