import './css/App.css';

import ProfileImage from './components/ProfileImage';
import { Buttons, Display } from './components/Buttons';

function App() {
  return (
    <div className="App">
      <ProfileImage />
      <Display />
      <Buttons />
    </div>
  );
}

export default App;
