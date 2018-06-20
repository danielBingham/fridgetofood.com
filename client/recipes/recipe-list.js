import React, { Component } from  'react';
import RecipeBox from './recipe-box.js';
import RecipeForm from './recipe-form.js';

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
            recipes: [],
            recipe: {
                title: '',
                source_url: '',
                ingredients: []
            }
        };
        this.addRecipe = this.addRecipe.bind(this);
        this.loadRecipes = this.loadRecipes.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Takes an array of recipes and sets them on state.  Bound to ``this``.
     */
    loadRecipes(recipes) {
        this.setState({recipes: recipes});
    }

    addRecipe(recipe) {
        var recipes = this.state.recipes;
        recipes.push(recipe);
        this.setState({recipes: recipes});
    }

    postRecipe(recipe) {
        var request = new Request('/api/v0/recipes', { 
            method: 'POST', 
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(recipe) 
        });
        fetch(request)
            .then(function(response) {
                if ( response.status === 200 ) {
                    return response.json();
                } else {
                    throw new Error('Backend error!');
                }
            })
            .then(this.addRecipe)
            .catch(function(error) {
                console.log(error);
            });

    }

    handleSubmit(event) {
        this.postRecipe(this.state.recipe);
        event.preventDefault();
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        var recipe = Object.assign({}, this.state.recipe, { [name]: value });

        this.setState({
            recipe: recipe
        });
    }

    /**
     * Loads recipes from the ``GET /recipes`` endpoint.
     */
    componentDidMount() {
        fetch('/api/v0/recipes/')
            .then(function(response) { 
                return response.json()
            })
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
            const recipe = this.state.recipe;
            return (
                <section className="recipes">
                    {recipes.map(function(recipe, i) {
                        return (<RecipeBox recipe={recipe}  key={recipe.id} />);
                    })}
                    <RecipeForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} recipe={recipe} />
                </section>
            );
        }
    }

}

export default RecipeList
