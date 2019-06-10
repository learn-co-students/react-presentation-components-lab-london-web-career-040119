import React, {Component} from 'react';

export default class Simple extends Component { 

    state= {
        mood: "happy",
    }

    handleClick = () => {
        const {mood} = this.state 
        if (mood === "happy") this.setState({mood: "sad"})
        if (mood === "sad") this.setState({mood: "happy"})
    }
    render(){
       const {mood} = this.state

        return(
            <div className="Simple" onClick={this.handleClick}>
                {mood}
            </div>

        )
    }
}
