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
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius delectus quidem fugiat animi inventore, laudantium id aliquid alias cupiditate, suscipit voluptas laborum et? Illum placeat tempora illo doloremque! Quam fugit omnis eius corrupti quas ullam consequuntur laudantium fugiat rem aut iusto eaque exercitationem dolor repellat, error illo laboriosam facere reprehenderit quia. At minus nobis impedit velit. Delectus itaque recusandae perferendis, officiis natus eligendi eveniet enim ab doloribus provident deleniti repudiandae nostrum consectetur assumenda, quibusdam impedit modi exercitationem tempore molestiae iusto aspernatur non odit et minus! Quasi praesentium voluptatibus corporis ab, a maxime aliquam accusantium alias eveniet vero dolorem nobis voluptates.</p>
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