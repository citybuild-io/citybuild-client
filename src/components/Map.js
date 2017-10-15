import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

AnyReactComponent.propTypes = {
    text: PropTypes.element.isRequired,
};

class Map extends Component {
  render() {
    return (
        <div style={{ flex: 1 }}>
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                />
            </GoogleMapReact>
        </div>
    );
  }
}

Map.defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
};

export default Map