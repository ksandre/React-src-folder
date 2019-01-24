import React,{ Component } from 'react';

class Header extends Component {

    state = {
        keywords: 'hello',
        word: "some"
    }

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        });
        console.log(this.state.word)
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