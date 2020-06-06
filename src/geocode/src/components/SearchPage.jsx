import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startSearch } from '../actions/';

import SearchForm from '../containers/SearchForm';
import GeocodeResult from './GeocodeResult';
import HotelsTable from './HotelsTable';

class SearchPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(startSearch());
  }

  // handleSortKeyChange(sortKey) {
  //   this.setState({
  //     sortKey,
  //     hotels: sortedHotels(this.state.hotels, sortKey),
  //   });
  // }

  render() {
    return (
      <div>
        <h1>ホテル検索</h1>
        <SearchForm history={this.props.history} />
        <GeocodeResult 
          address={this.props.geocodeResult.address}
          location={this.props.geocodeResult.location}
        />
        <HotelsTable />
      </div>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  geocodeResult: PropTypes.shape({
    address: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

// stateを取得?するときに必要なprops??
const mapStateToProps = (state) => ({
  geocodeResult: state.geocodeResult,
});


export default connect(mapStateToProps)(SearchPage);
