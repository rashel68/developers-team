import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './Dev.css';

const Dev = (props) => {

    const { img, name, title, age, salary, nationality } = props.dev;
    const btnIcon = <FontAwesomeIcon icon={faCaretRight} />
    return (
        <div className="singleDev">
            <div className="devImg"><img src={img} alt="" /></div>
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
            <h4>Nationality: {nationality}</h4>
            <h4>Dasignation: {title}</h4>
            <h4>Salary: <span>$</span>{salary}</h4>
            <button onClick={() => props.handleBtn(props.dev)}>Add to team {btnIcon}</button>
        </div>
    );
};

export default Dev;