import React, { Component } from 'react'

export class Child2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             age:26
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({
                
                    age:23
            })
        },5000)
        return (
            <div>
                <h1>Child2 name is {this.props.name}
                   and her age is{this.state.age}</h1>
            </div>
            
        )
    }
}

export default Child2
