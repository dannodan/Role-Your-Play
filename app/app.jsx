//React libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {white, grey200, grey500, grey700, grey900, blueA700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContainer from './containers/app.container'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: white,
    primary1Color: grey900,
    primary2Color: grey700,
    accent1Color: blueA700,
    canvasColor: grey900
  },
  appBar: {
    height: 50,
  },
});

class Content extends React.Component {
  render () {
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppContainer />
      </MuiThemeProvider>
    )
  }
}

var mountPoint = document.getElementById('mountPoint');

// Render to index.html
ReactDOM.render( <Content/>, mountPoint);
