import React from 'react';
import Post from './Posts/Post';
import { state } from '../../const/state';

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
                {state.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)}
            </div>
        </div>
    );
}

export default MyPosts;
