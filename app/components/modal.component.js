import React from 'react'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import {blueA700} from 'material-ui/styles/colors'

class ModalWindow extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label={this.props.cancelLabel}
        primary={false}
        onTouchTap={this.props.cancelAction}
      />,
      <FlatButton
        label={this.props.okLabel}
        primary={false}
        onTouchTap={this.props.okAction}
      />
    ]
    return(
      <Dialog
        title={this.props.title}
        hintText={this.props.hint}
        actions={actions}
        modal={true}
        open={this.props.open}>
        {this.props.modalContent}
      </Dialog>
    )
  }
}

export default ModalWindow
