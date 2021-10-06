import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import './Devcart.css';

const Devcart = (props) => {
    const { devcart } = props;
    const devIcon = <FontAwesomeIcon icon={faUserAlt} />
    let totalSalary = 0;
    for (const salary of devcart) {
        totalSalary = totalSalary + salary.salary;
    }
    return (
        <div className="devCart">
            <h3>Added Developers: {devcart.length}</h3>
            {
                devcart.map(dev => <p>{devIcon} {dev.name}</p>)
            }
            <h4>Total Salary:  <span>{totalSalary}</span></h4>
            <button>Create Team</button>


        </div>
    );
};

export default Devcart;

