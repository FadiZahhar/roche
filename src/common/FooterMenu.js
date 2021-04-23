import React from 'react'


const FooterMenu = (props) => {
    return <li><a href={props.href}><p>{props.label}</p></a></li>
}
export default FooterMenu;
