import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 3
    };


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%', top:500 }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDub8h5G3VqoC5Vh88K7C0YfaseSqBgLs8' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>

                </GoogleMapReact>

                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'AAAAAAAAAAAA'}
                />
            </div>
        );
    }
}

export default SimpleMap;