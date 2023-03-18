import { useState, React } from 'react';
import './style.css';

const Flags = ({ team }) => {

    //adds a space to replace the -
    const formattedClass = team.replace('', '-').toUpperCase();

    return (
        <div>
            <div className={formattedClass}></div>
        </div>
    )
}

export default Flags

//THESE ARE INCORRECT
//JPN
//ITA
//URU
//TGA
//WAL