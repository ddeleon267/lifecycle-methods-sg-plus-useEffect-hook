import React, { Component } from 'react'

class Name extends Component {
    constructor(){
        super()
        console.log("constructor for Name")
        this.state = {
            language: "React"
        }
    }

    changeLanguage = () => {
        this.setState({
            language: "Ruby"
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log("Making an api call")
        }, 2000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        console.log("Name render was run")
        return (
            <div>
                {this.state.language}
                <br />
                <button onClick={this.changeLanguage}>Change Language</button>
            </div>
        )
    }
}

export default Name