import React, {Component} from 'react';
import classes from './Modal.css';
import Aus from '../../../hoc/Aus';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show !== this.props.show) {
      return true;
    }
    return false;
  }

  componentWillUpdate() {
    console.log('modal will update');
  }

  render() {
    return (
      <Aus>
        <Backdrop show={this.props.show} clicked={this.props.clicked}/>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Aus>
    );
  }
}

  export default Modal;