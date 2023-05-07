import googleMapReact from "google-map-react";
import dotenv from "dotenv";
dotenv.config();
const { API_GOOGLE } = process.env;


const MapGoogle = ({ latitud, longitud }) => {
  const defaultProps = {
    center: {
      lat: latitud,
      lng: longitud
    },
    zoom: 11
  };
  return (
    <div className="w-full aspect-video">
      <googleMapReact
        bootstrapURLKeys={{ key: API_GOOGLE }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </googleMapReact>
    </div>
  )
};

export default MapGoogle;