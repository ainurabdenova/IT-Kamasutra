import React from 'react';

const Post = ({ message, likeCount }) => {
    return (
        <div className='mypost'>
            <img src="https://e7.pngegg.com/pngimages/188/424/png-clipart-software-developer-computer-servers-programmer-web-developer-computer-software-others-miscellaneous-face.png" alt="" />
            {message}
            <div>
                <span>Like: {likeCount}</span>
            </div>

        </div>
    );
}

export default Post;
