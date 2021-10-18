import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    const exactItem = data.filter(pd => pd.id === serviceId)
    console.log(exactItem)
    return (
        <div className="service-details">
          <div className="service-details-childs">
           <div>
           <img src={exactItem[0]?.img} alt="" />
           </div>
          <div className="service-details-text">
          <h4>Service Name : {exactItem[0]?.name}</h4>
           <p>Name : {exactItem[0]?.pera}</p>
          </div>
       </div>
        </div>
    );
};

export default ServiceDetails;