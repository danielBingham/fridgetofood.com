import React, { Component } from  'react';

class RecipeForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="recipe-form">
                <label htmlFor="title">Title</label><input name="title" value={this.props.recipe.title} onChange={this.props.handleChange} />
                <label htmlFor="source_url">Source</label><input name="source_url" value={this.props.recipe.source_url} onChange={this.props.handleChange} />
                <input type="submit" value="Add Recipe" />
            </form>
        );
    }

}

export default RecipeForm
