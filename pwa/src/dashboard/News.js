import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap';

const scrollingStyle = {
  maxHeight: '600px',
  overflowY: 'scroll'
}

class News extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  getListItems(category) {
    // if (this.props.news == undefined || this.props.news.length == 0)
    //   return <ListGroupItem>There are no news based on {category} topics.</ListGroupItem>;
    
    return [
      {
        title: 'Dummy Title::' + category,
        description: 'This is a dummy article about a dummy topic that might be replaced later on'
      },
      {
        title: 'Dummy Title::' + category,
        description: 'This is a dummy article about a dummy topic that might be replaced later on'
      }
    ].map((article, id) => 
      <ListGroupItem key={id}>
        <ListGroupItemHeading>{article.title}</ListGroupItemHeading>
        <ListGroupItemText>{article.description}</ListGroupItemText>
      </ListGroupItem>
    )
  }
  render() {
    return(
      <div>
        <h5>News</h5>
        <Nav tabs>
        <NavItem>
          <NavLink
            active=  {this.state.activeTab === '1' }
            onClick={() => { this.toggle('1'); }}
          >
          WatchList
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active=  {this.state.activeTab === '2' }
            onClick={() => { this.toggle('2'); }}
          >
          Trending
          </NavLink>
        </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup style={scrollingStyle} >
              { this.getListItems('watchlist') }
            </ListGroup>
          </TabPane>
          <TabPane tabId="2">
            <ListGroup style={scrollingStyle} >
              { this.getListItems('trending') }
            </ListGroup>
          </TabPane>
        </TabContent>
        <br />
        <br />
      </div>
    )
  }
}

export default News;