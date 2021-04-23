import React from 'react'

const List = (props) => {
    if(props.href) {
        return(
            <li>{props.text}<a href={props.href} target={props.target}>{props.label}</a>{props.afterlink}</li>
            )
    }
    return(
        <li>{props.text}</li>
        )
}
export default List