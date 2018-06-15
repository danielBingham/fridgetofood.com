import React, { Component } from  'react';

class RecipeBox extends Component {

    constructor(props) {
        super(props);
    }

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
