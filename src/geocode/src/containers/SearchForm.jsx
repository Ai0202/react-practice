import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// 1. actionをインポート
import { setPlace, startSearch } from '../actions';

const SearchForm = props => (
  <form onSubmit={e => {
      e.preventDefault();
      props.history.push(`/?place=${props.place}`);
      props.startSearch();
    }}
  >
    <input
      type="text"
      value={props.place}
      onChange={(e) => {
        e.preventDefault();
        props.setPlace(e.target.value)
      }}
    />
    <button type="submit">検索</button>
  </form>
)

SearchForm.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  startSearch: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
}

// 2. actionをprops.xxxでコンポーネントで使用できるようにする
export default connect(
  state => ({
    place: state.place,
  }), 
  { setPlace, startSearch }
  )(SearchForm);