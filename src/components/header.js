import React,{ Component } from 'react';

class Header extends Component {

    state = {}

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        });
    }

    render(){
        return (
            <header>
                <h1>Cool Header</h1>
                <input type="text" onChange={this.inputChangeHandler}/>
                <div>{this.state.keywords}</div>
            </header>
        )
    }
}

export default Header;