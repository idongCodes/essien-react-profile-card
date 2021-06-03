import fb from '../assests/logo-facebook.svg';
import gh from '../assests/logo-github.svg';
import ig from '../assests/logo-instagram.svg';
import linkedin from '../assests/logo-linkedin.svg';
import twitter from '../assests/logo-twitter.svg';

const SocialLinks = () => {
    return (
        <footer>
            <a href='https://facebook.com/idongcodes' alt='link to facebook profile' target='_blank' rel='noopener no referrer'>
                <img src={fb} alt='facebook icon' />
            </a>

            <a href='https://instagram.com/idongcodes' alt='link to instagram profile' target='_blank' rel='noopener no referrer'>
                <img src={ig} alt='instagram icon' />
            </a>

            <a href='https://twitter.com/idongcodes' alt='link to twitter profile' target='_blank' rel='noopener no referrer'>
                <img src={twitter} alt='twitter icon' />
            </a >

            <a href='https://linkedin.com/in/idongessien' alt='link to linked in profile' target='_blank' rel='noopener no referrer'>
                <img src={linkedin} alt='linked in icon' />
            </a >

            <a href='https://github.com/idongessien' alt='link to github profile' target='_blank' rel='noopener no referrer'>
                <img src={gh} alt='github icon' />
            </a >
        </footer >
    );
}

export default SocialLinks;