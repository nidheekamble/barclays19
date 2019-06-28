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

    if (this.props.data == undefined) {
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
        <Graph />
      </Col>
      <Col md={5}>
        <News />
        <Badge color="primary" className='p-3 mt-2'>Buy</Badge>
      </Col>
    </Row>
    </Container>
    );
  }
}

export default ResultView;