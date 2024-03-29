import React, { Component } from  'react';
import RecipeBox from './recipe-box.js';

/**
 * RecipeList Component
 *
 * Provides a list view of recipes pulled from the ``GET /recipes`` endpoint.
 *
 * Usage:
 * ```
 * <RecipeList />
 * ```
 *
 */
class RecipeList extends Component {

    /**
     * Takes no props.
     */
    constructor(props) {
        super(props);
        this.state = {
            recipes: null
        };
        this.loadRecipes = this.loadRecipes.bind(this);

    }

    /**
     * Takes an array of recipes and sets them on state.  Bound to ``this``.
     */
    loadRecipes(recipes) {
        this.setState({recipes: recipes});
    }

    /**
     * Loads recipes from the ``GET /recipes`` endpoint.
     */
    componentDidMount() {
        fetch('/api/v0/recipes/')
            .then(res => res.json())
            .then(this.loadRecipes);
    }


    /**
     * While we're waiting for recipes to load, show a "loading" section. Once they've been loaded
     * from the backend, render them.
     */
    render() {
        if ( this.state.recipes === null ) {
            return (
                <section className="recipes loading">
                    Loading...
                </section>
            );
        } else {
            const recipes = this.state.recipes;
            return (
                <section className="recipes">
                    {recipes.map(function(recipe, i) {
                        return (<RecipeBox recipe={recipe}  key={recipe.id} />);
                    })}
                </section>
            );
        }
    }

}

export default RecipeList
