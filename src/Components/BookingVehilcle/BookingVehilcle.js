import React, { useContext, useState } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import vehiclesInfo from '../../fakeData/vehiclesInfo'
import vehiclesList from '../../fakeData/vehicles'
import { AllContext } from '../../App';
import { useParams } from 'react-router';
import './Booking.css'
import Header from '../Header/Header';
import GoogleMap from '../GoogleMap/GoogleMap';

const BookingVehilcle = () => {
    const {user, vehicles} = useContext(AllContext);
    const [loggedInUser, setLoggedInUser] = user;
    const [vehicle, setVehicle] = vehicles;
    console.log(vehicle.name)
    return (
        <div className="BookingPageBackgroundImage">
            <Header />
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-6">
                        <div className="row my-1">
                            
                            <div className="com-md-6">
                                <img src={vehicle.img} className="img-fluid text-align-center" alt="" />
                                <h1>{vehicle.name}</h1>
                                <table className="table table-info table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">passenger</th>
                                            <th scope="col">Cost</th>
                                        </tr>
                                        {vehiclesInfo.map(data =>
                                            <tr>
                                                <th scope="col table-info">{data.id}</th>
                                                <th scope="col table-success">{data.type}</th>
                                                <th scope="col table-warning">{data.person}</th>
                                                <th scope="col table-danger">{data.price}</th>
                                            </tr>
                                        )}
                                    </thead>
                                </table>
                                <button className="btn btn-outline-info">Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
<GoogleMap/>
                    </div>

                </div>
            </div>
        </div>
    );

};

export default BookingVehilcle;