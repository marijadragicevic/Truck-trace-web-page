import React from 'react';
import header from "../img/header.jpg"

const Home = () => {
    return (
        <div>
            <header className='homeHeader'>
                <h3>Safe & Faster</h3>
                <h1>Logistics Services</h1>
                <form>
                    <input type="text" placeholder="Tracking Id" required />
                    <input type="submit" value="Track & Trace" />
                </form>
            </header>
        </div>
    );
}

export default Home;