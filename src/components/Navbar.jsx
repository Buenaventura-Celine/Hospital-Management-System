import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Health Management System</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/create">Create</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Edit</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
