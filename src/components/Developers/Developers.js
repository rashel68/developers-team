import React, { useEffect, useState } from 'react';
import Dev from '../Dev/Dev';
import Devcart from '../Devcart/Devcart';
import './Developers.css';

const Developers = () => {
    const [devs, setDevs] = useState([]);
    const [devcart, setDevcart] = useState([]);
    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => setDevs(data))
    }, []);
    const handleBtn = (dev) => {
        const newdevCart = [...devcart, dev];
        setDevcart(newdevCart);
    }
    return (
        <div className="developers-container">
            <div className="dev-container">
                {
                    devs.map(dev => <Dev dev={dev} key={dev.id} handleBtn={handleBtn}></Dev>)
                }
            </div>
            <div className="dev-cart">
                <Devcart devcart={devcart} key={devcart.id}></Devcart>
            </div>

        </div>
    );
};

export default Developers;