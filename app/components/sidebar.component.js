import React from 'react'

import {List, ListItem} from 'material-ui/List';
import Player from 'material-ui/svg-icons/social/person';
import NPC from 'material-ui/svg-icons/social/person-outline';
import System from 'material-ui/svg-icons/av/library-books';
import Subheader from 'material-ui/Subheader';

class SideBar extends React.Component {
  render(){

    return(
      <List>
        <ListItem
          primaryText="RPG Systems"
          leftIcon={<System />}
          primaryTogglesNestedList={true}
          nestedItems={this.props.getSystemList(this.props.systemList)}
        />

        <ListItem
          primaryText="Player Characters"
          leftIcon={<Player />}
          primaryTogglesNestedList={true}
          nestedItems={this.props.getPlayerList(this.props.playerList)}
        />

        <ListItem
          primaryText="Non-Player Characters"
          leftIcon={<NPC />}
          primaryTogglesNestedList={true}
          nestedItems={this.props.getNPCList(this.props.npcList)}
        />
      </List>
    )
  }
}

export default SideBar
