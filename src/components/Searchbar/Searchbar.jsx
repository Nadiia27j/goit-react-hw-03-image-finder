import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchbarForm,
  SearchbarBbutton,
  SearchbarLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends React.Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.info('Please enter a value to search!');
      return;
    }

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <SearchbarHeader>
        <SearchbarForm onSubmit={this.handleSubmit}>
          <SearchbarBbutton type="submit">
            <span>Search</span>
          </SearchbarBbutton>

          <SearchbarLabel>
            <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={this.handleChange}
            />
          </SearchbarLabel>
        </SearchbarForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
