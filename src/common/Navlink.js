import React from 'react'

const Navlink = (props) => {
    return (
        <li className="nav-item">
                                    <a className="nav-link " href={props.href}>{props.title}</a>
                                </li>
        )
}
export default Navlink;
