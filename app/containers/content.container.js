import React from 'react'

import ContentTabs from '../components/content.component'
import Tab from 'material-ui/Tabs/Tab'

class ContentTabsContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  getTabs() {
    var tabs = this.props.tabs.map(function(element){
      return(
        <Tab key={element.id} label={element.name} />
      )
    });
    return tabs
  }

  generateTab(){
    var index = this.state.tabs.length + 1
    var tabName = "New Tab "+index
    return {id: index, name: tabName}
  }

  newTab() {
    var newTabs = this.state.tabs
    newTabs.push(this.generateTab())
    this.setState({ tabs: newTabs })
  }

  render() {
    return(
      <ContentTabs
        tabList={this.getTabs.bind(this)}
        newTabClick={this.newTab.bind(this)}
      />
    )
  }
}

export default ContentTabsContainer
