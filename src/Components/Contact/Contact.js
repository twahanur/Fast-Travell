import React from 'react';
import Header from '../Header/Header';
import './contact.css'

const Contact = () => {
    return (
        <div className="contactCss">
            <Header />
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">

                    <a href="https://www.facebook.com/thohanurrahman.rahman/" target="_blank" style={{textDecoration: "none",color: "white"}}>

                        <div className="row m-2 border border-secondary rounded-pill" style={{ cursor: 'pointer' }}>
                            <div className="col-2">
                                <img src="https://i.ibb.co/w0P3v7h/pngegg-1.png" style={{ width: "50px", height: "50px" }} className="imageSizing" alt="" />
                            </div>
                            <div className="col-8 text-center cursor-pointer">
                                <p>Connect with Facebook</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/twahanur-rahman-b615271ba/" target="_blank" style={{textDecoration: "none", color: "white"}}>
                        <div className="row m-2 border border-secondary rounded-pill" style={{ cursor: 'pointer' }}>
                            <div className="col-2">
                                <img src="https://i.ibb.co/SyCgD4W/pngegg-2.png" style={{ width: "50px", height: "50px" }} className="imageSizing cursor-pointer" alt="" />
                            </div>
                            <div className="col-8 text-center cursor-pointer">
                                <p >Continue with LinkDin</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;