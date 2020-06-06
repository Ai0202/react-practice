import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import HotelRow from './HotelRow';
import HotelsClickableTh from './HotelsClickableTh';

const HotelsTable = ({ hotels }) => (
  <table>
    <tbody>
      <tr>
        <th>ホテル名</th>
        <th>画像</th>
        <HotelsClickableTh 
          label="料金"
          sortKey="price"
        />
        <HotelsClickableTh 
          label="距離"
          sortKey="distance"
        />
      </tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tbody>
  </table>
);

HotelsTable.prototype = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  hotels: [],
}

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

export default connect(
  state => ({
    hotels: sortedHotels(state.hotels, state.sortKey),
  }),
)(HotelsTable);