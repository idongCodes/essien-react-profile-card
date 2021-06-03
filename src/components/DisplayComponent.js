import React, { useState } from 'react';
import Display from './Display';

const DisplayComponent = () => {

    const [fname, setFname] = useState('Click the NAME button.');
    const [myTitle, setMyTitle] = useState('Click the SKILLS button.');

    return (
        <div className='display'>
            <button onClick={() => setFname('My name is Idong!')}>Name</button>
            <button onClick={() => setMyTitle(`And I'm a Front-End Developer!`)}>Sklls</button>
            <Display name={fname} />
            <Display title={myTitle} />
        </div>
    )
}

export default DisplayComponent;