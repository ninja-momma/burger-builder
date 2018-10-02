import React, {Component} from 'react';
import Aus from '../../hoc/Aus';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {

  state = {
    showSideDrawer: false
  };

  toggleSideDrawer = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render () {
    return (
      <Aus>
        <Toolbar clicked={this.toggleSideDrawer}/>
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aus>
    );
  }

}

export default Layout;