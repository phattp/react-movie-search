import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    //We need to go and fetch movie data
    this.props.fetchMovies(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="header">
        <div className="header__search-box">
          <h1 className="heading-primary">Search mOvies</h1>
          <form onSubmit={this.onFormSubmit} className="input-group form-head form__customize">
            <input
              placeholder="Search for movies"
              className="form-control form__customize-input"
              value={this.state.term}
              onChange={this.onInputChange} />
            <span className="input-group-append">
              <button type="submit" className="btn btn-outline-secondary form__customize-btn">Submit</button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
