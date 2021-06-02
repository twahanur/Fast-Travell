import React from 'react';
import { Link } from 'react-router-dom';
import vehiclesList from '../../fakeData/vehicles'
import Header from '../Header/Header';
import './HomePage.css'
const HomePage = () => {

    return (
        <div className="homePageBackgroundImage">
            <Header />
            <div className="p-5">
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col-md-3">
                        <h1>Fast Travels</h1>
                        <p>Traveling i a part of a life. for jobs, business, personal reason or hobby, we have to travel. For this we are come here to solve vehicles problems by providing vehicles ...</p>
                        <Link to={`/destination/2`}>
                            <button className="btn btn-warning">Booking </button>
                        </Link>
                    </div>


                    <div className="d-flex col-md-9">
                       <div className="row">
                       {
                            vehiclesList.map(vh =>
                                <div className="col-md-2 col-lg-2 ">
                                    <div className="card-fluid border rounded m-1 border-info h-100">
                                        <div className="placeImg p-1">

                                            <img src={vh.img} alt="" className="card-img-top img-fluid" />

                                            <h5 className="text text-center">{vh.name}</h5>
                                            <Link  to={`/destination/${vh.id}`}>
                                                <button style={{color: 'white'}} className="btn btn-warning mt-3 card-footer">Book Now</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                            )
                        }
                       </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;