import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>Cool Header</h1>
            <input type="text" onChange={props.keywords}/>
        </header>
    )
}

export default Header;