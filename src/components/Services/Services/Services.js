import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services,setService] = useState([]);
 useEffect(()=>{
     fetch('services.json')
     .then(response => response.json())
     .then(data => setService(data))
 },[])
    return (
        <>
        <div id="services" className="services-container">
        <div className="d-flex mx-auto w-75">
        <div  className="services-text">
        <h4>Our <span className="my-color">Services</span></h4>
        <p className="">SS dental always here to provide you best services in the entire City . so you can always trust us , we have top 11 services to provide you and we have best doctors to solve your problems. we are working from 1 year and every single patient is happy and thank full to us also we are very happy to provide best services .ss dental has one of the fastest syncing databases in the dental market! All data from YAPI syncs in real-time to your practice management software, so you’ll have accurate information in front of you at all times. Our software syncs every few seconds to the PMS </p>
        </div>
        </div>

        <div className="all-services">
            {
                services.map(service =><Service key={service.id} service={service}></Service>)
            }
        </div>
        </div>
       
        </>
    );
};

export default Services;