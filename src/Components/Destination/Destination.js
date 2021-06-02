import React, { useContext, useState } from 'react';
import vehiclesList from '../../fakeData/vehicles';
import { Link, useParams } from 'react-router-dom';
import { AllContext } from '../../App';
import './Destination.css'
import Header from '../Header/Header';
import GoogleMap from '../GoogleMap/GoogleMap';
const Destination = () => {
    const { user, vehicles } = useContext(AllContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [vehicle, setVehicle] = vehicles;
    const { id } = useParams();
    const location = vehiclesList.find(data => data.id === id);
    const { name, price, img } = location;
    setVehicle(location);
    console.log(vehicle)
    return (

        <div className="DestinationPageBackgroundImage">
            <Header />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 my-auto">
                        <img className="img-fluid" src={img} alt="" />
                        <h1>{name}</h1>
                        <form className="form-group borderDesign p-5 m-3">
                            <label className="">From</label>
                            <input className='form-control bkg_input' type="text" placeholder="Dhaka" disabled />
                            <label className="">To</label>
                            <input className='form-control' type="text" placeholder="Khulna" disabled />
                            <div className='d-flex justify-content-between'>
                                <label htmlFor="" className="">Journey Date</label>

                            </div>
                            <div className='d-flex justify-content-between'>
                                <input className='form-control' type="date" />

                            </div>
                            <Link to="/bookingVehicle" className="nav-link">
                                <button className='btn btn-outline-warning btn-block mt-2'>Start Booking</button>
                            </Link>
                        </form>
                    </div>
                    <div className=" col-md-6 col-lg-6 container-fluid">
                        <GoogleMap/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;