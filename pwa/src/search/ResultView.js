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

  investmentRecommendation() {
    let values = this.props.points[1]

    let currVal = values[0]

    const max = Math.max(...values)
    const min = Math.min(...values)
    const avg = values.reduce( ( p, c ) => p + c, 0 ) / values.length;

    if (currVal > avg)
      return {
        color: 'success',
        msg: 'Buy'
      }

    if (currVal <= avg)
      return {
        color: 'primary',
        msg: 'Buy'
      }

    return {
      color: 'secondary',
      msg: 'Hold'
    }
  }

  render() {
    if (this.props.news == undefined && this.props.points == undefined) {
      return (
        <Container>
          <Jumbotron><h3 className='text-center'>Search for stocks to show more details</h3></Jumbotron>
        </Container>
      )
    }

    const prediction = this.investmentRecommendation();

    return(
    <Container>
    <Row>
      <Col md={7}>
        <Graph points={this.props.points} stock={this.props.stock}/>
        Recommended investment strategy: <Badge color={prediction.color} className='pt-1 mt-2'>{prediction.msg}</Badge>
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