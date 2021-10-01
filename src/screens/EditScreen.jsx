import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class EditScreen extends Component {
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

    componentDidMount(){
        axios.get('http://localhost:5000/health/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    fullname: res.data.fullname,
                    temperature: res.data.temperature,
                    email: res.data.email,
                    phonenumber: res.data.phonenumber
                })  
            })
            .catch(err => {console.log(err)})
    }

    onValueChange(e){
        this.setState({[e.target.dataset.name] : e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const health = {
            fullname: this.state.fullname,
            temperature: this.state.temperature,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
        }

        axios.post('http://localhost:5000/health/update/'+this.props.match.params.id, health)
            .then(res => window.location = "/")
            .catch(err => console.log('Error : ' + err))
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <h1>Update Info</h1>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input className="form-control" type="text" required onChange={this.onValueChange} data-name="fullname" value={this.state.fullname}/>
                    </div><br/>

                    <div className="form-group">
                        <label>Temperature</label>
                        <input className="form-control" type="number" step="0.1" required onChange={this.onValueChange} data-name="temperature" value={this.state.temperature}/>
                    </div><br/>

                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" required onChange={this.onValueChange} data-name="email" value={this.state.email}/>
                    </div><br/>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input className="form-control" type="tel" required onChange={this.onValueChange} data-name="phonenumber" value={this.state.phonenumber}/>
                    </div><br/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
        )
    }
}