import React from 'react'
import {map} from '../data/data';


const MapDetails = (props) => {
    if(props.dir) {
        return (
            <li><img src={props.icon} alt="" /> <span className="dir-l">{props.label}</span></li>
            );
    }
    return (
        <li><img src={props.icon} alt="" />{props.label}</li>
        );
}

export default MapDetails;