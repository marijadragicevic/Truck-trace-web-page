import React from 'react';

const PricingPlan = () => {
    return (
        <section className='container pricingPlan'>
            <hgroup>
                <h3>Pricing Plan</h3>
                <h2>Affordable Pricing Packages</h2>
            </hgroup>

            <div>
                <article>
                    <h2>$<span style={{ color: "var(--darlViolet)" }}>49</span>/Mo</h2>
                    <h4>Basic</h4>
                    <p>HTML5 & CSS3</p>
                    <p>Bootstrap4</p>
                    <p>Responsive Layout</p>
                    <p>Compatible With All Browers</p>
                    <button>Order Now</button>
                </article>
                <article>
                    <h2>$<span style={{ color: "var(--darlViolet)" }}>99</span>/Mo</h2>
                    <h4>Basic</h4>
                    <p>HTML5 & CSS3</p>
                    <p>Bootstrap4</p>
                    <p>Responsive Layout</p>
                    <p>Compatible With All Browers</p>
                    <button>Order Now</button>
                </article>
                <article>
                    <h2>$<span style={{ color: "var(--darlViolet)" }}>149</span>/Mo</h2>
                    <h4>Basic</h4>
                    <p>HTML5 & CSS3</p>
                    <p>Bootstrap4</p>
                    <p>Responsive Layout</p>
                    <p>Compatible With All Browers</p>
                    <button>Order Now</button>
                </article>
            </div>
        </section>
    );
}

export default PricingPlan