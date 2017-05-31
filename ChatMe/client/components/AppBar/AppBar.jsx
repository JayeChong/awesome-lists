import React, { Component } from 'react';
import style from './AppBar.css';

export default class AppBar extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.listen();
    }

    listen(){
        var socket = this.props.socket;
        console.log("listening !");
        console.log(socket);
        socket.on('someOneLogin',function(obj){
            console.log(`${obj.user}加入了群聊！`);
        });
        socket.on('message',function(obj){
            console.log(`message is ${obj.message}`);
        })
    }
    

    render(){
        const props = this.props;
        return (
            <div className={style.appbar}>
                <div className={style.leftElement}>
                    <div className = {style.avatarWrap}>
                        <img src={props.avatar} alt=""/>
                        <span>{props.messageNum}</span>
                    </div>
                    <span>{this.props.username}</span>
                </div>
                <div className={style.centerElement}>
                    <p>{props.title}</p>
                </div>
                <div className={style.rightElement}>
                    <img src={props.menu} alt=""/>
                </div>
            </div>
        );
    }

}

AppBar.defaultProps = {
    title : "消息",
    avatar : "images/faceme.jpg",
    messageNum : 2,
    menu : "images/ic_add.svg"
}