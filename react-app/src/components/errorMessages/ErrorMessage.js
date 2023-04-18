import './errorMessage.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiConfused } from 'react-icons/bi';
import { useState } from 'react';

export default function ErrorLoginRegister(props) {

    const {errorMessage } = props;
    const navigate = useNavigate();

    return (
        <div className="error_container">
            <h2 className='errorMessage'>Something went wrong!</h2>
            <h3 className='errorMessage'>{errorMessage}</h3>
            <BiConfused size={30} className='confusedButton' />
            <button className="retryButton" type="submit" onClick={() => {props.clicked("true");}} >Try Again</button>
        </div>
    );
}