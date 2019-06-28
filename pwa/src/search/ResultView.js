import React from 'react';
import {
  Row,
  Col,
  Container,
  Badge,
  Jumbotron

} from 'reactstrap';

import Graph from './Graph';
import News from './News'


class ResultView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.news == undefined && this.props.points == undefined) {
      return (
        <Container>
          <Jumbotron><h3 className='text-center'>Search for stocks to show more details</h3></Jumbotron>
        </Container>
      )
    }
    return(
    <Container>
    <Row>
      <Col md={7}>
        <Graph points={this.props.points} stock={this.props.stock}/>
        Recommended investment strategy: <Badge color="secondary" className='pt-1 mt-2'>Buy</Badge>
      </Col>
      <Col md={5}>
        <News news={this.props.news} />
      </Col>
    </Row>
    </Container>
    );
  }
}

export default ResultView;