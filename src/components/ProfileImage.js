import '../css/ProfileImage.css';

import ProfileImg from '../assests/profileimg.jpeg';
import { ProfileImgDiv } from '../styledComponents';

function ProfileImage() {
    return (
        <ProfileImgDiv>
            <img className='pro-img' src={ ProfileImg } alt='profile avatar' />
        </ProfileImgDiv>
    );
}

export default ProfileImage;