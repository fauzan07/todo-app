import React, { Component } from 'react';
import './Modal.css';

import Backdrop from './../Backdrop/Backdrop';

class Modal extends Component {
    
    render() {
      
        return (
            <div>
                <Backdrop />
                <div className="modalbody mt-5">
                <button className="closebutton mt-3 mr-2" onClick = {() => this.props.close(this.props.modalCloseHandler)}>X</button>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default Modal;
