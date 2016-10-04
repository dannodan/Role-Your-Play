import React from 'react'

import {Tabs, Tab} from 'material-ui/Tabs'
import Slider from 'material-ui/Slider'
import Add from 'material-ui/svg-icons/content/add'

class ContentTabs extends React.Component {
  render(){
    return(
      <Tabs
        tabItemContainerStyle={{backgroundColor: "#2e2e2e"}}
        inkBarStyle={{height:"4px", marginTop: "-4px"}}
      >
        {this.props.tabList()}
        <Tab label="+" onClick={this.props.newTabClick}/>
      </Tabs>
    )
  }
}

export default ContentTabs
