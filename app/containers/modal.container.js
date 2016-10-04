import React from 'react'
import ModalWindow from '../components/modal.component'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class ModalWindowContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  getSystemList(){
    var list = []
    list = this.context.systemList.map(function(element){
      return (
        <MenuItem key={element.id} value={element.id} primaryText={element.name}/>
      )
    });
    return list;
  }

  handleSelect(event, index, value) {
    this.setState({
      modalSelect: value
    });
  }

  render() {

    const modalContent = [
      <TextField
        hintText='System Name'
        errorText={!this.props.modalInput && 'This field is Required'}
        value={this.props.modalInput}
        onChange={this.props.handleInput}
        onKeyPress={this.props.handleEnter}
      ></TextField>,

      <div>
        <div class='col-md-4'>
          <TextField
            hintText='System Name'
            errorText={!this.props.modalInput && 'This field is Required'}
            value={this.props.modalInput}
            onChange={this.props.handleInput}
            onKeyPress={this.props.handleEnter}
          ></TextField>
        </div>
        <div class='col-md-4'>
          <SelectField value={this.props.modalSelect} onChange={this.props.handleSelect}>
            <MenuItem value={'players'} primaryText="Player" />
            <MenuItem value={'npcs'} primaryText="NPC" />
          </SelectField>
        </div>
        <div class='col-md-4'>
          <SelectField
            value={this.props.modalSystem}
            errorText={!this.props.modalSystem && 'Must choose a System for the character'}
            onChange={this.props.handleSystem}
          >
            {this.getSystemList()}
          </SelectField>
        </div>
      </div>
    ]

    return(
      <ModalWindow
        title={this.props.title}
        open={this.props.open}
        okLabel={this.props.okLabel}
        cancelLabel={this.props.cancelLabel}
        okAction={this.props.okAction}
        cancelAction={this.props.cancelAction}
        modalContent={modalContent[this.props.modalContent]}
      />
    )
  }
}

ModalWindowContainer.contextTypes = {
  systemList: React.PropTypes.array
}

export default ModalWindowContainer
