import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const handleChange = (marker) => {
    if (marker){
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }

};

const Map = withGoogleMap(props =>

    <GoogleMap
    bootstrapURLKeys={{key: 'AIzaSyDub8h5G3VqoC5Vh88K7C0YfaseSqBgLs8'}}
    defaultZoom={15}
    onCenterChanged={handleChange}
    center={{lat: 59.95, lng: 30.33}}>
        {

            <Marker
                key={marker.id}
                position={{lat: 59.95, lng: 30.33}}
                defaultAnimation={google.maps.Animation.DROP}
            />
        }
    </GoogleMap>

);

function MarkerWithLable(props){
    return(
        <h1>add lable here.....</h1>
    )
}

export default Map;