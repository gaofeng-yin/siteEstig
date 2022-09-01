import React, { Component } from 'react';

class Map extends Component {

    render() {

        return (
            <div className="map-area">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1LBTQrqMrYMjkIuZjF-J0z6K18CmEexc&ehbc=2E312F" loading="lazy"></iframe>
            </div>
        );
    }
}

export default Map;