import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => (
  <form onSubmit={e => props.onSubmit(e)}>
    <input
      type="text"
      value={props.place}
      onChange={e => props.onPlaceChange(e.target.value)}
    />
    <button type="submit">検索</button>
  </form>
)

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
}

export default SearchForm