import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const{name , img, pera,id } = props.service;
    return (
        <div>
        <div className="card mx-3 my-3 mt-5 mx-5  fix-img-height">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          
    
          <p>{pera}.</p>
          <Link to={`/serviceDetails/${id}`}>          <button className="service-button mb-5">View Details</button></Link>
        </div>
    
            </div>
            </div>
    );
};

export default Service;