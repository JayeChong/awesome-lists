import React, { Component } from 'react';
import style from './style/style.css';
import AppBar from './components/AppBar/AppBar.jsx';
import AppNav from './components/AppNav/AppNav.jsx';
import AppContent from './components/AppContent/AppContent.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket : io()
        }
    }
    
    render(){
        return (
            <div className = {style.containerWrap}>
                <div className = {style.container}>
                    <AppBar username={this.props.params.username} />
                    <AppContent socket={this.state.socket} />
                    <AppNav />
                </div>
            </div>
        );
        // <AppContent />
        // <AppNav />
    }

}