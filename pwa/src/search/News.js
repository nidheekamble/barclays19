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
  maxHeight: '400px',
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

  getListItems() {
    // if (this.props.news == undefined || this.props.news.length == 0)
    //   return <ListGroupItem>There are no news based on {category} topics.</ListGroupItem>;
    
    if (this.props.news == undefined)
      return;

    console.log(this.props.news)
    return this.props.news.map((article, id) => 
      <ListGroupItem key={id}>
        <ListGroupItemHeading><a target='_blank' href={article.newsURL}>{article.title}</a></ListGroupItemHeading>
        <ListGroupItemText>
          {article.text}
        </ListGroupItemText>
      </ListGroupItem>
    )
  }
  render() {
    return(
      <div>
        <h5>News</h5>
          <ListGroup style={scrollingStyle} >
            { this.getListItems() }
          </ListGroup>
      </div>
    )
  }
}

export default News;