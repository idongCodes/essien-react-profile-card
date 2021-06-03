import ProfileImg from '../assests/profileimg.jpeg';

function ProfileImage() {
    return (
        <div className='pro-img-div'>
            <img className='pro-img' src={ ProfileImg } alt='profile avatar' />
        </div>
    );
}

export default ProfileImage;