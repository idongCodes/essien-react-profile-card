import styled from 'styled-components';

const debug = () => "1px solid red";

// Profile Image Container
const ProfileImgDiv = styled.div`
    border: ${ debug() };
    width: 15%;
`

export {
    ProfileImgDiv,
};