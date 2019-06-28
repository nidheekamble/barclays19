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
          <ListGroup style={scrollingStyle} >
            { this.getListItems('watchlist') }
          </ListGroup>
      </div>
    )
  }
}

export default News;