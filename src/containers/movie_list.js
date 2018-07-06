import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  renderMovie(movieData) {
    const id = movieData.Search.map(mov => mov.imdbID);
    const listMovies = movieData.Search.map((mov) => {
      return (
          <div className="col-lg-3 col-md-4 col-sm-6" key={mov.imdbID}>
            <div className="card div-card">
              <img className="card-img-top div-card-img" src={mov.Poster} alt="Movie Poster" />
              <div className="card-body">
                <h6 className="card-title">{mov.Title}</h6>
              </div>
            </div>
          </div>
      )
    })

    return (
      <div className="container" key={id}>
        <div className="row div-movies">
          {listMovies}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.movies.map(this.renderMovie)}
      </div>
    )
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps)(MovieList);
