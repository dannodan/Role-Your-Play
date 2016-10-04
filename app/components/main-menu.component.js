import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Menu from 'material-ui/svg-icons/navigation/menu';

class MainMenu extends React.Component {
  render(){
    return(
      <div className="not-draggable">
        <IconMenu
          iconButtonElement={<IconButton><Menu></Menu></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem
            primaryText="New Template"
            rightIcon={<ArrowDropRight/>}
            menuItems={[
              <MenuItem onClick={this.props.createSystem} primaryText="RPG System"/>,
              <MenuItem onClick={this.props.createPlayer} primaryText="Character"/>
            ]}
          />
          <Divider></Divider>
          <MenuItem
            primaryText="Import"
            rightIcon={<ArrowDropRight/>}
            disabled={true}
            menuItems={[
              <MenuItem onClick={this.props.importSystem} primaryText="RPG System"/>,
              <MenuItem onClick={this.props.importPlayer} primaryText="Character"/>
            ]}
          />
          <MenuItem
            primaryText="Export"
            rightIcon={<ArrowDropRight/>}
            disabled={true}
            menuItems={[
              <MenuItem onClick={this.props.exportSystem} primaryText="RPG System"/>,
              <MenuItem onClick={this.props.exportPlayer} primaryText="Character"/>
            ]}
          />
          <Divider></Divider>
          <MenuItem
            primaryText="Exit"
            onClick={this.props.quit}
          />
        </IconMenu>
      </div>
    )
  }
}

export default MainMenu
