import React from 'react';
import { NavLink } from 'react-router-dom';


const DialogItem = ({ itemName, id }) => {

    return (
        <div className='dialog'>
            <NavLink to={`/dialogs/${id}`}>{itemName}</NavLink>
        </div >
    )
}


export default DialogItem;
