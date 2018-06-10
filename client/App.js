import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: null };
  }

  componentDidMount() {
      fetch('/api/recipes')
      .then(res => res.json())
      .then(recipes => this.setState({ recipes: recipes}));
  }

  render() {
    return (
      <div>
        {this.state.recipes ? (
          <h1>We have Recipes!</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}
