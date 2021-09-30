import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class CreateHealth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname:'',
            temperature:'',
            email:'',
            phonenumber:'',
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(e){
        this.setState({[e.target.dataset.name] : e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <h1>Add New</h1>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input className="form-control" type="text" required onChange={this.onValueChange} data-name="fullname" />
                    </div><br/>

                    <div className="form-group">
                        <label>Temperature</label>
                        <input className="form-control" type="number" step="0.1" required onChange={this.onValueChange} data-name="temperature" />
                    </div><br/>

                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" required onChange={this.onValueChange} data-name="email" />
                    </div><br/>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input className="form-control" type="tel" required onChange={this.onValueChange} data-name="phonenumber" />
                    </div><br/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
        )
    }
}