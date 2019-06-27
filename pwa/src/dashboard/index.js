import React from 'react';
import {
  Jumbotron,
  Row,
  Col,
  Container
} from 'reactstrap';

import FavouriteTable from './FavouriteTable';
import GraphDiv from './GraphDiv';
import News from './News'

const dummyFavourites = [
  {
    name: 'Company 1',
    price: 9000,
    change: '1%',
    wap: '8900'
  },
  {
    name: 'Company 2',
    price: 7000,
    change: '1.2%',
    wap: '7900'
  },
  {
    name: 'Company 2',
    price: 7000,
    change: '1.2%',
    wap: '7900'
  },
  {
    name: 'Company 2',
    price: 7000,
    change: '1.2%',
    wap: '7900'
  },
  {
    name: 'Company 2',
    price: 7000,
    change: '1.2%',
    wap: '7900'
  },
  {
    name: 'Company 2',
    price: 7000,
    change: '1.2%',
    wap: '7900'
  },
  {
    name: 'Company 2',
    price: 7000,
    change: '1.2%',
    wap: '7900'
  },
  {
    name: 'Company 2',
    price: 7000,
    change: '1.2%',
    wap: '7900'
  },
  {
    name: 'Company 2',
    price: 7000,
    change: '1.2%',
    wap: '7900'
  }
]
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className='text-center'>Welcome Ameya</h1>
        </Jumbotron>
        <br />
        <Container>
          <Row>
            <Col md={7}>
              <GraphDiv />
            </Col>
            <Col md={5}>
            <FavouriteTable stocks={dummyFavourites} />
            </Col>
          </Row>
        </Container>
        <Container className='mt-5'>
          <Row>
            <Col md={6}>
              <Jumbotron>Chat Window Comes here</Jumbotron>
            </Col>
            <Col md={6}>
              <News />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}