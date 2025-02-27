import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <img height="650" width="100%" src='https://img.freepik.com/free-psd/world-health-day-horizontal-banner-template-with-photo_23-2148887916.jpg?t=st=1740681488~exp=1740685088~hmac=f203f1c43d6c1a2c65169b131bc9938bfed5047b30fb094e1e2d8be172160f94&w=1380'></img>
            <div className="home-container">
            <h1 className="welcome-title">Welcome to Our Phoenix Healthcare Services Hospital</h1>
            <p className="welcome-message">
                We are dedicated to providing the best care for our patients. Schedule your appointment today!
            </p>
            <div className="animation-container">
                <Link to={"/register"}  className="animated-box">Patient Registration</Link>
                <Link to={"/contact"} className="animated-box">Appointment Scheduling</Link>
                <Link to={"/consultation"}  className="animated-box">Consultation</Link>
                <Link to={"/patients records"}  className="animated-box">Medical Records</Link>
            </div>
        </div>
   
        </>
     );
};

export default Home;
