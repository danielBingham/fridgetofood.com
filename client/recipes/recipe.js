import React, { Component } from  'react';

/**
 * Recipe Component
 *
 * Provides a full details view of a recipe.   Loads the recipe from the ``/recipes/{id}`` endpoint.
 *
 * Usage:
 * ```
 * <Recipe id={recipe_id} />
 * ```
 */
class Recipe extends Component {

    /**
     * Takes a single prop, ``id``, that is used to get the recipe's data from the recipes endpoint.
     *
     * @param   {int}   id  The id of the recipe we want to load.
     */
    constructor(props) {
        super(props);
        this.state = {
            recipe: null
        };

    }

    /**
     * Loads the recipe's data from the ``GET /recipes/{id}`` endpoint.  Sets the loaded recipe on
     * state.
     */
    componentDidMount() {
        fetch('/api/v0/recipes/' + this.props.id)
            .then(res => res.json())
            .then(function(recipe) {
                this.setState({recipe: recipe});
            });
    }

    /**
     * While we're waiting for the recipe to be loaded to state, show a "loading" section.  Once the
     * recipe is loaded, render it.
     */
    render() {
        if ( this.state.recipe === null ) {
            return (
                <section class="recipe loading">
                    Loading...
                </section>
            );
        } else {
            const recipe = this.state.recipe;
            return (
                <section id={recipe.id} class="recipe">
                    <h1>{recipe.title}</h1>
                    <p class="source">{recipe.source_url}</p>
                </section>
            );
        }
    }

}

export default Recipe
