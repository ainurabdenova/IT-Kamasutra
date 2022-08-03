import React from 'react';
import { NavLink } from 'react-router-dom';


const DialogItem = ({ itemName, id }) => {


    return (
        <div className='dialog'>
            <NavLink to={`/dialogs/${id}`}>{itemName}</NavLink>
        </div >
    )
}

const Message = ({ message }) => {
    return (
        <div className="message">{message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className='dialogs-wrapper'>
            <div className='dialogs'>
                <DialogItem itemName='Ainur' id='1' />
                <DialogItem itemName='Rustem' id='2' />
                <DialogItem itemName='Snezhok' id='3' />
                <DialogItem itemName='Dmitryi' id='4' />
            </div>
            <div className='messages'>
                <Message message='Hi' />
                <Message message='How are u?' />
                <Message message=':))' />
                <Message message='Yoo' />
                <Message message='Yoooo' />
            </div>
        </div>
    );
}

export default Dialogs;
