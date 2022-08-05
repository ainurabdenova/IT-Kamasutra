import React from 'react';
import Post from './Posts/Post';
import { state } from '../../const/state';

const MyPosts = () => {

    const ref = React.createRef()

    const AddPost = () => {
        let text = ref.current.value
        alert(text)
    }

    const DeletePost = () => {

    }

    return (
        <div className='myPosts-block'>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ref}></textarea>
                </div>
                <div className='myposts-button'>
                    <button onClick={AddPost}>Add posts</button>
                    <button onClick={DeletePost}>Delete posts</button>
                </div>

            </div>
            <div>
                {state.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />)}
            </div>
        </div>
    );
}

export default MyPosts;
