import Like from './components/Like';
import ProfileImage from './components/ProfileImage';
import SocialLinks from './components/SocialLinks';
import DisplayComponent from './components/DisplayComponent';


function App() {
  return (
    <div id='root-app' className="App">
      <ProfileImage />
      <SocialLinks />
      <DisplayComponent />
      <Like />
    </div>
  );
}

export default App;

