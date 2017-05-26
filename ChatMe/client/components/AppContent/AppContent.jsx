import React, { Component } from 'react';
import style from './AppContent.css';
import Conversation from '../Conversation/Conversation.jsx';
import MessageSender from '../MessageSender/MessageSender.jsx';

export default class AppContent extends Component{

    render(){
        return (
            <div className={style.appcontent}>
                <div className={style.friendLists}>
                </div>
                <div className={style.conversation}>
                    <Conversation />
                    <MessageSender socket={this.props.socket} />
                </div>
            </div>
        );
    }

}