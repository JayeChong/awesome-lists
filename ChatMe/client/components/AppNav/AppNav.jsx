import React, { Component } from 'react';
import style from './AppNav.css';

export default class AppNav extends Component{

    render(){
        return (
            <div className={style.appnav}>
                <div className={style.bottomItem}>
                    <img src="images/ic_message.svg" alt=""/>
                </div>
                <div className={style.bottomItem}>
                    <img src="images/ic_group.svg" alt=""/>
                </div>
                <div className={style.bottom3}>
                    <img src="images/ic_account.svg" alt=""/>
                </div>
            </div>
        );
    }

}