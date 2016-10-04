import React from 'react'

import SideBar from '../components/sidebar.component';
import ListItem from 'material-ui/List/ListItem';

class SideBarContainer extends React.Component {
  constructor(props){
    super(props)
  }

  getList(typeList) {
    var list = []
    if (typeList != undefined){
      list = typeList.map(function(element){
        return(
          <ListItem
            key={element.id}
            primaryText={element.name}
          />
        )
      });
    }
    return list;
  }

  render(){
    return(
      <SideBar
        getSystemList={this.getList.bind(this)}
        getPlayerList={this.getList.bind(this)}
        getNPCList={this.getList.bind(this)}
        systemList = {this.props.systems}
        playerList = {this.props.players}
        npcList = {this.props.npcs}
      />
    )
  }
}

export default SideBarContainer
