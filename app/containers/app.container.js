// React library
import React from 'react';
import ToolbarContainer from './toolbar.container'
import SideBarContainer from './sidebar.container'
import ContentTabsContainer from './content.container'

var db = window.require('electron').remote.getGlobal("sharedDB")

// AppContainer class
class AppContainer extends React.Component {
    // AppContainer constructor
    constructor(props) {
      super(props);

      // Client ID
      this.db = db

      // Initial State
      this.state = {
        tabs: [],
        systemList: [],
        playerList: [],
        npcList: [],
        systemCollection: null,
        playerCollection: null,
        npcCollection: null
      }
    }

    componentWillMount(){
      var systemCollection = this.db.getCollection('systems')
      if (systemCollection === null) {
        this.db.addCollection('systems',{unique:['id']});
        this.db.saveDatabase();
        systemCollection = this.db.getCollection('systems');
      }
      var playerCollection = this.db.getCollection('players');
      if (playerCollection === null) {
        this.db.addCollection('players',{unique:['id']});
        this.db.saveDatabase();
        playerCollection = this.db.getCollection('players');
      }
      var npcCollection = this.db.getCollection('npcs');
      if (npcCollection === null) {
        this.db.addCollection('npcs',{unique:['id']});
        this.db.saveDatabase();
        npcCollection = this.db.getCollection('npcs');
      }
      this.setState({
        systemList: systemCollection.find(),
        playerList: playerCollection.find(),
        npcList: npcCollection.find(),
        systemCollection: systemCollection,
        playerCollection: playerCollection,
        npcCollection: npcCollection
      })
    };

    getChildContext() {
      return {
        onSystemUpdate: function() {
          this.setState({systemList: this.state.systemCollection.find()})
        }.bind(this),
        onPlayerUpdate: function(type) {
          if (type == 'players') {
            this.setState({playerList: this.state.playerCollection.find()})
          } else {
            this.setState({npcList: this.state.npcCollection.find()})
          }
        }.bind(this),
        systemList: this.state.systemCollection.find()
      };
    }

    getTabList() {
      return ([{id: 1, name: "Resume"},{id:2, name:"Stats"}])
    }

    render () {
      return(
        <div>
          <div className="toolbar">
            <ToolbarContainer></ToolbarContainer>
          </div>
          <div className="sidebar">
            <SideBarContainer
              systems={this.state.systemList}
              players={this.state.playerList}
              npcs={this.state.npcList}>
            </SideBarContainer>
          </div>
          <div className="content">
            <ContentTabsContainer tabs={this.state.tabs}></ContentTabsContainer>
          </div>
          <div className="footer">
          </div>
        </div>
      )
    }
}

AppContainer.childContextTypes = {
  onSystemUpdate: React.PropTypes.func.isRequired,
  onPlayerUpdate: React.PropTypes.func.isRequired,
  systemList: React.PropTypes.array
}

// Export AppContainer Component
export default AppContainer
