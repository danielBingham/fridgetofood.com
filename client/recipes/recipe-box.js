import React, { Component } from  'react';

/**
 * RecipeBox Component
 *
 * Provides a small box view of a recipe that can be used in a list context.  Takes its data in the
 * props, rather than pulling it from the API.  This allows it to be used in conjunction with the
 * ``GET /recipes`` endpoint that returns an array of full recipe data, and minimizes extra calls to
 * the backend.
 *
 * Usage:
 * ```
 * recipes.map(function(recipe, i) {
 *      return (<RecipeBox recipe={recipe} key={recipe.id} />);
 * });
 * ```
 */
class RecipeBox extends Component {

    /**
     * Takes a full recipe object as a prop.
     *
     * @param   {object}    recipe  A fully populated recipe object.
     * @param   {int}       recipe.id   The recipe's id.
     * @param   {string}    repice.title    The recipe's title.
     * @param   {string}    recipe.source_url   The url of the recipe's source.
     */
    constructor(props) {
        super(props);
    }

    /**
     * Immediately render the recipe box section from the prop data.
     */
    render() {
        const recipe = this.props.recipe;
        return (
            <section id={recipe.id} className="recipe">
                <h1>{recipe.title}</h1>
                <p className="source">{recipe.source_url}</p>
            </section>
        );
    }

}

export default RecipeBox; 
