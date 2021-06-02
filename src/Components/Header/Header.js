import React, { useContext } from 'react';
import { Router } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import { AllContext } from '../../App';
const Header = () => {
    const {user, vehicles} = useContext(AllContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [vehicle, setVehicle] = vehicles;
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    error: '',
                    success: false
                }
                setLoggedInUser(signOutUser);
            })
            .catch(err => {
                // errorMessage = err.message;
                // console.log(errorMessage)
            })
    }
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light mx-3">
                <div className="container-fluid" style={{background: '#95ffdf00'}}>

                    <Link className="navbar-brand"  href="#"><img style={{height:'150px',width:'350px'}} src="https://i.ibb.co/M6y48CB/Logo.png" alt="" /></Link>
                    <button style={{color:'#00ff84'}}  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse  navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item text white px-2">
                                <Link className="nav-link rounded fw-bolder m-2"style={{border: '1px solid #00ff84',color:'#00ff84'}} to="/homepage">Home</Link>
                            </li>
                            <li className="nav-item text-white">
                                <Link className="nav-link rounded fw-bolder  m-2" style={{border: '1px solid #00ff84',color:'#00ff84'}} to="/destination/3">Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link rounded fw-bolder m-2" style={{border: '1px solid #00ff84',color:'#00ff84'}} to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link rounded fw-bolder  m-2" style={{border: '1px solid #00ff84',color:'#00ff84'}} to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <h4>{loggedInUser.name}</h4>
                        {
                            loggedInUser.isSignedIn || loggedInUser.name ?
                                <Link to="/login" className="nav-link">
                                    <button type="button" className="btn btn-outline-warning" onClick={handleSignOut}>Sign Out</button>
                                </Link>
                                :
                                <Link to="/login" className="nav-link">
                                    <button type="button" className="btn btn-outline-danger">Log in</button>
                                </Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;