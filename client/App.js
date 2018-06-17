import React, { Component } from 'react';
import './app.css';
import RecipeList from './recipes/recipe-list.js';
import RecipeForm from './recipes/recipe-form.js';

/**
 * App component acts as the root for the component tree, loading the layout and all other
 * components.
 *
 * Usage:
 * ```
 * <App />
 * ```
 */
export default class App extends Component {

    /**
     * Takes no props.
     */
    constructor(props) {
        super(props);
    }

    /**
     * Render the header, navigation and the RecipeList.
     */
    render() {
        return (
            <section className="app">
                <header>
                    <h1>Fridge to Food</h1>
                </header>
                <RecipeList />
            </section>
        );
    }
}
