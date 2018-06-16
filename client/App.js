import React, { Component } from 'react';
import './app.css';
import RecipeList from './recipes/recipe-list.js';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section class="app">
                <header>
                    <h1>Fridge to Food</h1>
                </header>
                <RecipeList />
            </section>
        );
    }
}
