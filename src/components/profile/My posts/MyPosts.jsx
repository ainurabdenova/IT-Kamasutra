import React from 'react';
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div className='myPosts-block'>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div className='myposts-button'>
                    <button>Add posts</button>
                    <button>Delete posts</button>
                </div>

            </div>
            <div>
                <Post message='Hi how are u?' likeCount='20' />
                <Post message="It's my first post" likeCount='30' />
            </div>
        </div>
    );
}

export default MyPosts;
