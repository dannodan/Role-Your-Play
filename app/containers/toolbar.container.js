import React from 'react';
import Toolbar from '../components/toolbar.component';
var {ipcRenderer} = window.require('electron');

class ToolbarContainer extends React.Component {
  constructor(props){
    super(props);
  }

  maximize() {
    ipcRenderer.send('maximize-main-window');
  }

  minimize() {
    ipcRenderer.send('minimize-main-window');
  }

  close(){
    ipcRenderer.send('close-main-window');
  }

  render(){
    return(
      <Toolbar
        onChange={this.props.onChange}
        minimize={this.minimize.bind(this)}
        maximize={this.maximize.bind(this)}
        close={this.close.bind(this)}
      />
    )
  }

}

export default ToolbarContainer
