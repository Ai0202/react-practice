import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import queryString from 'query-string';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import HotelsTable from './HotelsTable';

import { geocode } from '../domain/Geocooder';
import { searchHotelByLocation } from '../domain/HotelRepository';

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35.1602977,
        lng: 139.8407663,
      },
      sortKey: 'price',
      place: this.getPlaceParam() || 'スカイツリー',
    };
  }

  componentDidMount() {
    const place = this.getPlaceParam();
    
    if (place) {
      this.startSearch(place);
    }

  }

  getPlaceParam() {
    const params = queryString.parse(this.props.location.search);
    const place = params.place;
    
    if (place && place.length > 0) {
      return place;
    }
    return null;
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      lat: 0,
      lng: 0,
    })
  }
  
  handlePlaceChange(place) {
    this.setState({ place })
  }

  handlePlaceSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/?place=${this.state.place}`);
    this.startSearch();
  }

  startSearch() {
    geocode(this.state.place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK':
            this.setState({ address, location })
            return searchHotelByLocation(location);
          case 'ZERO_RESULTS':
            this.setErrorMessage('結果が見つかりませんでした')
            break;
          default:
            this.setErrorMessage('エラーが発生しました');
            break;
        }
        return [];
      })
      .then(hotels => {
        this.setState({ hotels: sortedHotels(hotels, this.state.sortKey) })
      })
      .catch(() => {
        this.setErrorMessage('通信に失敗しました');
      })
  }

  handleSortKeyChange(sortKey) {
    this.setState({
      sortKey,
      hotels: sortedHotels(this.state.hotels, sortKey),
    });
  }

  render() {
    return (
      <div>
        <h1>ホテル検索</h1>
        <SearchForm
          onSubmit={e => this.handlePlaceSubmit(e)} 
          place={this.state.place}
          onPlaceChange={place => this.handlePlaceChange(place)}
        />
        <GeocodeResult 
          address={this.state.address}
          location={this.state.location}
        />
        <HotelsTable
          hotels={this.state.hotels} 
          sortKey={this.state.sortKey}
          onSort={sortKey => this.handleSortKeyChange(sortKey)}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
};

export default SearchPage;
