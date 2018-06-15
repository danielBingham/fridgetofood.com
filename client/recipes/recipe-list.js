import React, { Component } from  'react';
import RecipeBox from './recipe-box.js';

class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: null
        };
        this.loadRecipes = this.loadRecipes.bind(this);

    }

    loadRecipes(recipes) {
        this.setState({recipes: recipes});
    }

    componentDidMount() {
        fetch('/api/v0/recipes/')
            .then(res => res.json())
            .then(this.loadRecipes);
    }

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

export default Recipe
