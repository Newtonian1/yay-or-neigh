import React from 'react';

export function SwipeInterface() {
    const [id, setId] = React.useState("80085");
    const [name, setName] = React.useState("Joe Cool");


    return (
        <div className="swipe-interface">
            <h2>ID: { id }</h2>
            <h2>Name: { name }</h2>
        </div>
    )
}