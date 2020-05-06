import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';
import HotelsClickableTh from './HotelsClickableTh';

const HotelsTable = ({ hotels, sortKey, onSort }) => (
  <table>
    <tbody>
      <tr>
        <th>ホテル名</th>
        <th>画像</th>
        <HotelsClickableTh 
          label="料金"
          sortKey="price"
          isSelected={sortKey === 'price'}
          onSort={key => onSort(key)}
        />
        <HotelsClickableTh 
          label="距離"
          sortKey="distance"
          isSelected={sortKey === 'distance'}
          onSort={key => onSort(key)}
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

export default HotelsTable;