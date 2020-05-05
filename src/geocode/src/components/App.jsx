import React from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import HotelsTable from './HotelsTable';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';
const GEOCODE_API_KEY = '';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "鋸山",
      lat: 35.1602977,
      lng: 139.8407663,
      hotels: [
        { id: 1, name: '東横イン', url: 'https://amazon.co.jp'},
        { id: 2, name: 'ウォーターフロントホテル', url: 'https://fast.com'},
      ]
    };
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      lat: 0,
      lng: 0,
    })
  }

  handleSubmit(place) {
    axios
      .get(GEOCODE_ENDPOINT, {params: { address: place, key:  GEOCODE_API_KEY}})
      .then(results => {
        const data = results.data
        const result = data.results[0];

        switch (data.status) {
          case 'OK':
            this.setState({
              address: result.formatted_address,
              lat: result.geometry.location.lat,
              lng: result.geometry.location.lng,
            })
            break;
          case 'ZERO_RESULTS':
            this.setErrorMessage('結果が見つかりませんでした');
            break;
          default:
            this.setErrorMessage('エラーが発生しました');
            break;
        }
      })
      .catch(() => {
        this.setErrorMessage('通信に失敗しました');
      })
  }

  render() {
    return (
      <div className="App">
        <h1>ホテル検索</h1>
        <SearchForm onSubmit={place => this.handleSubmit(place)} />
        <GeocodeResult 
          address={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <HotelsTable hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
