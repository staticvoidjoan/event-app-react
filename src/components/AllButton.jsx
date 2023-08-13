import React from 'react';
import "./AllButton.css"

const AllButton = ({buttonName, selected, onClick }) => {
    const buttonClassName = `AllButton ${selected ? 'selected' : ''}`;
    return (
        <button className={buttonClassName} onClick={onClick}>{buttonName}</button>
    );
}

export default AllButton;
