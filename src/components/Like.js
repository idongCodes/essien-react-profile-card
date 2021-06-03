import React, { useState } from 'react';
import like from '../assests/heart.svg';

const Like = () => {

    let [count, setCount] = useState(0);

    return (
        <div className='like' onClick={() => setCount(count += 1)}>
            <img className='like-btn' src={like} alt='like button' /><span>{count}</span>
        </div>
    )
}
export default Like;