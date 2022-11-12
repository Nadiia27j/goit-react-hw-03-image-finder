import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends React.Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
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
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>

          <label>
            <SearchFormInput
              onChange={this.handleChange}
              value={query}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </label>
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
