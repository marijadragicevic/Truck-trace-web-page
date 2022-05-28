import React from 'react';
import Header from '../Components/Header';
import PricingPlan from '../Components/Price/PricingPlan';
import Testimonial from '../Components/Price/Testimonial';

const Price = () => {
    return (
        <div>
            <Header name={"-Price-"} />
            <PricingPlan/>
            <Testimonial/>
        </div>
    );
}

export default Price;