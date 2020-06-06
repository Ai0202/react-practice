import { getDistance } from 'geolib';

import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = '1044611485623665851';

export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.SimpleHotelSearch(params)
    .then(res =>
      res.data.hotels.map((hotel) => {
        const basicInfo = hotel.hotel[0].hotelBasicInfo;
        const distance = getDistance(
          { latitude: location.lat, longitude: location.lng },
          { latitude: basicInfo.latitude, longitude: basicInfo.longitude },
        );
        return {
          id: basicInfo.hotelNo,
          name: basicInfo.hotelName,
          url: basicInfo.hotelInformationUrl,
          thumbUrl: basicInfo.hotelThumbnailUrl,
          price: basicInfo.hotelMinCharge,
          distance
        };
      }),
    );
}