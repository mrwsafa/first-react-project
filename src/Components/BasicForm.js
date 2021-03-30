import React, { Component } from 'react'

export default class BasicForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username : '',
            lesson : '',
            date : '',

             
        }
    }
    usernameHandler =(e)=>{
        this.setState({
            username : e.target.value

        })

    }
    lessonHandler = (event)=>{
        this.setState({
            lesson : event.hh  

        })

    }
    dateHandler = (event) => {
        this.setState({
            date : event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                   <div>
                        <input 
                        onChange = {this.usernameHandler}
                        value={this.state.username} 
                        type="text"/>
                    </div> 
                    <div>
                        <select onChange={this.lessonHandler}
                         value={this.state.lesson}>
                            <option>Python</option>
                            <option>Javascript</option>
                            <option>React</option>
                        </select>
                    </div>
                    <div>
                        <input onChange={this.dateHandler}
                         value={this.state.date} type="date"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}
