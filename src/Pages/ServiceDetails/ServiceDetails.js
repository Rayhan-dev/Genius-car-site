import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div className='m-5'>
            <h1>this is service details :{serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;