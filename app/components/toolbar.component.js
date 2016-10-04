import React from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Maximize from 'material-ui/svg-icons/av/web-asset'
import Minimize from 'material-ui/svg-icons/content/remove'
import Close from 'material-ui/svg-icons/content/clear'
import Menu from 'material-ui/svg-icons/navigation/menu'
import MainMenuContainer from '../containers/main-menu.container'

class Toolbar extends React.Component {
  render() {
    return (
      <AppBar
        className="draggable"
        title="Role Your Play"
        iconElementLeft={
          <MainMenuContainer
            onChange={this.props.onChange}
            />
        }
        iconElementRight={
          <div>
            <IconButton onClick={this.props.minimize} className="not-draggable"><Minimize/></IconButton>
            <IconButton onClick={this.props.maximize} className="not-draggable"><Maximize/></IconButton>
            <IconButton onClick={this.props.close} className="not-draggable"><Close/></IconButton>
          </div>
        }
      />
    )
  }
}

export default Toolbar
