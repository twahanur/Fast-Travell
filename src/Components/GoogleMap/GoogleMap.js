import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
    render() {
        const style = {
            maxWidth: "500px",
            height: "650px",
            overflowX: "hidden",
            overflowY: "hidden"
           };
           const containerStyle = {
            maxWidth: "500px%",
            height: "550px"
           };
        return (
            <div >
                <Map style={style} containerStyle={containerStyle} google={this.props.google} zoom={15}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                </Map>
            </div>
        );
    };
};

export default
    GoogleApiWrapper({
        apiKey: 'AIzaSyBq8AK3psUCpElR7YRa1bWdyKZW5mMhRcE'
    })(GoogleMap)