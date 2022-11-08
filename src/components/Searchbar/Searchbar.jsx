import React from 'react';
import { toast } from 'react-toastify';

export default class Searchbar extends React.Component {
  state = {
    query: '',
  };

  handleQueryChange = e => {
    this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.info('Please enter a request');
      return;
    }

    this.props.handleQuerySubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
