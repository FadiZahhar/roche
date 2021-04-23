import React from 'react'

const ListImage = (props) => {
    if(props.dir) {
        return(
           <li>
                                    <a href={props.href}>
                                        <img src={props.icon} alt="" /> <span className="dir-l">{props.label}</span>
                                    </a>
                                </li>
            )
    }
    return(
        <li>
                                    
                                    <a href={props.href}>
                                        <img src={props.icon} alt="" />{props.label}
                                    </a>
                                </li>
        )
}
export default ListImage