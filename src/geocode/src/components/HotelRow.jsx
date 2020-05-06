import React from 'react';
import PropTypes from 'prop-types';

const HotelRow = ({ hotel }) => (
  <tr>
    <td>
      <a href={hotel.url} rel="noopener noreferrer" target="_blank">
        {hotel.name}
      </a>
    </td>
    <td>
      <img src={hotel.thumbUrl} alt={hotel.name} />
    </td>
    <td>{hotel.price}円</td>
    <td>{hotel.distance}</td>
  </tr>
);

HotelRow.prototype = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    thumbUrl: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default HotelRow;
