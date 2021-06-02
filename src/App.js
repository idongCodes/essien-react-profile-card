import React, { useState } from 'react';
import like from './assests/heart.svg';

import './css/App.css';

import ProfileImage from './components/ProfileImage';
import Display from './components/Display';
import SocialLinks from './components/SocialLinks';


function App() {

  const [fname, setFname] = useState('Click the NAME button.');
  const [myTitle, setMyTitle] = useState('Click the SKILLS button.');
  let [count, setCount] = useState(0);

  return (
    <div id='root-app' className="App">

      <ProfileImage />
      <SocialLinks />

      <div className='buttons'>
        <button onClick={() => setFname('My name is Idong!')}>Name</button>
        <button onClick={() => setMyTitle(`And I'm a Front-End Developer!`)}>Skills</button>
      </div>

      <div className='display'>
        <Display name={fname} />
        <Display title={myTitle} />
      </div>

      <div className='like'>
        <img className='like-btn' src={like} alt='like button' onClick={() => setCount(count += 1)} /><span>{count}</span>
      </div>

    </div>
  );
}

export {
  App,
}

