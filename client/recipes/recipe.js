import React, { Component } from  'react';

class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipe: null
        };

    }

    componentDidMount() {
        fetch('/api/v0/recipes/' + this.props.id)
            .then(res => res.json())
            .then(function(recipe) {
                this.setState({recipe: recipe});
            });
    }

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
