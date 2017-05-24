import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

import style from './style/style.css';
import AppBarExampleComposition from './components/appHeaderBar.jsx';

export default class App extends Component{

    render(){
        return (
            <div style={style} className={style.container}>
                <p>Hello !</p>
                <RaisedButton label="Default" />
                <AppBarExampleComposition/>
            </div>
        );
    }

}