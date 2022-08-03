import React from 'react'
import MyPosts from './My posts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'

export const Profile = () => {
    return (
        <div className='content'>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}
 