import React from 'react'

import MainMenu from '../components/main-menu.component'
import ModalWindowContainer from './modal.container'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
var {ipcRenderer} = window.require('electron');
var db = window.require('electron').remote.getGlobal("sharedDB")

class MainMenuContainer extends React.Component {
  constructor(props){
    super(props)

    this.db = db

    this.state = {
      modalTitle: '',
      modalHint:'',
      modalOKLabel: 'OK',
      modalOK: function(){},
      modalCancelLabel: 'Cancel',
      modalCancel: function(){},
      modalContent: 1,
      modalEnter: function(){},
      modalOpen: false,
      modalInput: '',
      modalSelect: 'players',
      modalSystem: 0
    }
  }

  handleOpen() {
    this.setState({modalOpen: true})
  }

  handleClose() {
    this.setState({modalOpen: false})
  }

  handleInput(event) {
    this.setState({
      modalInput: event.target.value
    });
  }

  handleSelect(event, index, value) {
    this.setState({
      modalSelect: value
    });
  }

  handleSystem(event, index, value) {
    console.log(value)
    this.setState({
      modalSystem: value
    })
  }

  handleEnter(type) {
    return function(event){
      if (event.key == 'Enter'){
        if (type == 'system') {
          this.createSystem()
        } else if (type == 'player') {
          this.createPlayer()
        }
      }
    }
  }

  quit() {
    ipcRenderer.send('close-main-window');
  }

  openCreateSystem() {
    this.setState({
      modalTitle: 'Create New RPG System',
      modalCancel: this.handleClose,
      modalCancelLabel: 'Cancel',
      modalOK: this.createSystem,
      modalOKLabel: 'Create',
      modalContent: 0,
      modalInput: '',
      modalEnter: this.handleEnter('system')
    }, this.handleOpen())
  }

  createSystem() {
    if (this.state.modalInput){
      var systemCollection = this.db.getCollection('systems');
      systemCollection.insert({id:systemCollection.data.length+1, name:this.state.modalInput})
      // dbHandler.insert(this.db, 'systems', object);
      this.db.saveDatabase();
      this.context.onSystemUpdate();
      this.handleClose();
    }
  }

  openCreatePlayer() {
    this.setState({
      modalTitle: 'Create New Player',
      modalCancel: this.handleClose,
      modalCancelLabel: 'Cancel',
      modalOK: this.createPlayer,
      modalOKLabel: 'Create',
      modalContent: 1,
      modalInput: '',
      modalSelect: 0,
      modalEnter: this.handleEnter('player')
    }, this.handleOpen())
  }

  createPlayer() {
    if (this.state.modalInput && this.state.modalSystem){
      var collection = this.db.getCollection(this.state.modalSelect);
      collection.insert({id:collection.data.length+1, name:this.state.modalInput, system: this.state.modalSystem})
      // dbHandler.insert(this.db, 'systems', object);
      this.db.saveDatabase();
      this.context.onPlayerUpdate(this.state.modalSelect);
      this.handleClose();
    }
  }

  importSystem() {
    ipcRenderer.send('test')
    console.log('Import RPG System')
  }

  importPlayer() {
    ipcRenderer.send('test')
    console.log('Import Character')
  }

  exportSystem() {
    ipcRenderer.send('test')
    console.log('Export RPG System')
  }

  exportPlayer() {
    ipcRenderer.send('test')
    console.log('Export Character')
  }

  render() {
    return(
      <div>
        <MainMenu
          quit={this.quit.bind(this)}
          createSystem={this.openCreateSystem.bind(this)}
          createPlayer={this.openCreatePlayer.bind(this)}
          importSystem={this.importSystem.bind(this)}
          importPlayer={this.importPlayer.bind(this)}
          exportSystem={this.exportSystem.bind(this)}
          exportPlayer={this.exportPlayer.bind(this)}
        />
        <ModalWindowContainer ref="appModalWindow"
          title={this.state.modalTitle}
          open={this.state.modalOpen}
          okLabel={this.state.modalOKLabel}
          cancelLabel={this.state.modalCancelLabel}
          okAction={this.state.modalOK.bind(this)}
          cancelAction={this.state.modalCancel.bind(this)}
          modalContent={this.state.modalContent}
          modalInput={this.state.modalInput}
          modalSelect={this.state.modalSelect}
          modalSystem={this.state.modalSystem}
          handleInput={this.handleInput.bind(this)}
          handleSelect={this.handleSelect.bind(this)}
          handleSystem={this.handleSystem.bind(this)}
          handleEnter={this.state.modalEnter.bind(this)}
        />
      </div>
    )
  }
}

MainMenuContainer.contextTypes = {
  onSystemUpdate: React.PropTypes.func.isRequired,
  onPlayerUpdate: React.PropTypes.func.isRequired
}

export default MainMenuContainer
