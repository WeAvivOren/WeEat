

/* global google */
import React from 'react';
import { withScriptjs, withGoogleMap } from "react-google-maps";
import { compose, withProps } from "recompose"
import { GoogleMap, Marker } from 'react-google-maps';

const handleChange = (marker) => {
    if (marker){
          marker.setAnimation(google.maps.Animation.BOUNCE);
    }

};

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAaB9ETxhqyx2lKpPT1VJ0iYbhbvC-Xs08&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props =>
        <GoogleMap

            ref={props.onMapLoad}
            defaultZoom={15}
            onCenterChanged={handleChange}
            center={props.center}>
            {
                props.restaurants.map(marker => (
                    <Marker
                        key={marker.id}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        //defaultAnimation={ google.maps.Animation.DROP}
                    />))
            }
        </GoogleMap>
));

function MarkerWithLable(props){
    return(
        <h1>add lable here.....</h1>
    )
}

export default Map;