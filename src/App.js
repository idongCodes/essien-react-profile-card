import React, { useState } from 'react';

import './css/App.css';

import ProfileImage from './components/ProfileImage';
import Display from './components/Display';


function App() {

  const [fname, setFname] = useState('Click the NAME button.');
  const [myTitle, setMyTitle] = useState('Click the SKILLS button.');

  return (
    <div id='root-app' className="App">

      <ProfileImage />

      <button onClick={ () => setFname('My name is Idong!') }>Name</button>
      <button onClick={ () => setMyTitle(`And I'm a Front-End Developer!`) }>Skills</button>

      <Display name={ fname } />
      <Display title={ myTitle } />

    </div>
  );
}

export {
  App,
}
