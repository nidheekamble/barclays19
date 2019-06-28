import React from 'react';
import {
  Jumbotron,
  Input,
  InputGroup,
  Button,
  InputGroupAddon,
  Container
} from 'reactstrap';
import {withRouter} from 'react-router-dom';

import ResultView from './ResultView';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Jumbotron>
          <h1 className='text-center'>Welcome Ameya</h1>
        </Jumbotron> */}
        <br />
        <Container>
          <InputGroup>
            <Input type='text' placeholder='Search for stocks'  style={{width:'90vw', maxWidth: '700px'}} />
            <InputGroupAddon addonType="append">
              <Button color="secondary">Search</Button>
            </InputGroupAddon>
          </InputGroup>
          <br />
          <br />
        </Container>
        <ResultView />
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(Search);