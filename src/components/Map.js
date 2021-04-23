import React from 'react'
import {map} from '../data/data';
import MapDetails from './MapDetails';

const Map = (props) => {
    return(
            <section className="map-section" id="map-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="title">
                        {map.title}
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="map-wrapper">
                    <img src="images/dynamic/map.jpg" className="map-img" />
                    <div className="map-details shadow p-5">
                        <p className="title-detailed mb-3">{map.title_detailed}</p>
                        <ul>
                             {map.location.map((location) => {
                                const { icon, label, dir } = location;
                                return (
                                  <MapDetails icon={icon} label={label} dir={dir} />
                                );
                              })}
                        </ul>
                        <img src={map.marker_src} className="marker" />

                    </div>
                </div>
            </div>
        </div>
    </section>
        );
}

export default Map;