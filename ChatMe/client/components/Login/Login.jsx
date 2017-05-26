import React, { Component } from 'react';
import { browserHistory } from 'react-router'

import style from '../../style/style.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            socket: io(),
            username: ""
        }
    }

    componentDidMount() {
        this.input.focus();
    }
    
    login(){
        var username = this.state.username;
        var socket = this.state.socket;
        var path = `/chatroom/${username}`
        console.log("username is "+username);
        socket.emit("login",{
            username: username
        });
        browserHistory.push(path);
        // this.context.router.push(path);

    }

    handlerPress(e){
        if(e.key == "Enter"){
            this.login();
        }
    }

    handlerChange(e){
        this.setState({
            username: e.target.value,
        });
    }

    render(){
        return (
            <div className = {style.containerWrap}>
                <div className={style.login}>
                    <p>欢迎您 请登录!</p>
                    <input type="text" 
                    onKeyPress={(e)=>{this.handlerPress(e)}} 
                    onChange={(e)=>{this.handlerChange(e)}} 
                    value={this.state.username}
                    ref={(input) => { this.input = input; }} 
                    />
                    <button>登录</button>
                </div>
            </div>
        );
    }

}