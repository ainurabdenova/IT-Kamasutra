import React from 'react';
import DialogItem from './dialogItem/DialogItem';
import Message from './messages/Message';
import { state } from '../const/state';


const Dialogs = () => {

    return (
        <div className='dialogs-wrapper'>
            <div className='dialogs'>
                {state.dialogs.map(dialog => <DialogItem itemName={dialog.name} id={dialog.id} />)}
            </div>
            <div className='messages'>
                {state.messages.map(mes => <Message message={mes.message} id={mes.id} />)}
            </div>
        </div>
    );
}

export default Dialogs;
