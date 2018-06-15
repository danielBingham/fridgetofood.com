import React, { Component } from 'react';
import './app.css';
import RecipeList from './recipes/recipe-list.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <RecipeList />
    );
  }
}
