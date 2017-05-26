import React, { Component } from 'react';
import style from './MessageSender.css';

export default class MessageSender extends Component{

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            socket : this.props.socket,
        }
    }

    sendMessage(){
            var message = this.state.message;
            var socket = this.state.socket;
            if(message!=""){
                const sendObj = {
                    message: message,
                    username: "Jaye Chong"
                }
                socket.emit("message",sendObj);
            }
            else{
                console.log("消息为空不做任何处理---Test");
            }
            this.setState({
                message: '',
            });
    }
    

    handlePress(e){
        if (e.key == 'Enter') {
            this.sendMessage();
        }
    }

    handleChange(e) {
        this.setState({message: e.target.value.trim()})
    }

    render(){
        return (
            <div className={style.MessageSender}>
                <textarea 
                placeholder="按Enter发送!"
                onKeyPress={(e)=>{this.handlePress(e)}} 
                value={this.state.message}
                onChange = {(e)=>{this.handleChange(e)}}
                ref={(input) => { this.textarea = input; }} 
                >
                </textarea>
            </div>
        );
    }

}