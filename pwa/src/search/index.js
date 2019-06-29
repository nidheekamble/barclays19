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
    this.state = {
      search: '',
      points: undefined,
      news: undefined
    }
  }

  cleanDataPoints(csv_inp = '') {
    let x = csv_inp.split('\n').slice(1);
    x.pop();

    console.log(x.map(inp => inp.split(',')))
    let y = x.map(inp => inp.split(',').map(t => t.trim()))

    return [y.map(i => i[0]), y.map(i => parseFloat(i[1])) ]
  }

  getDataPoints(stockName) {
    fetch(`/api/getData?stock=${stockName}`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => {
      res.text().then(text => {
        this.setState(Object.assign({},this.state, {points: this.cleanDataPoints(text)}))
      })
      
    })
  }

  getNews(stockName) {
    fetch(`/api/news?stock=${stockName}`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => {

        res.json().then(jsn_data => {
          this.setState(Object.assign({},this.state, {news: jsn_data})
        )})
        console.log(this.state);
    })

  }

  onInput(inp) {
    this.setState(Object.assign({}, this.state, {search: inp}))
  }

  onSubmitSearch() {
    this.getDataPoints(this.state.search);
    this.getNews(this.state.search)
    console.log(this.state);
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
            <Input list="searches" type='text' placeholder='Search for stocks from the suggestions' onInput={e => this.onInput(e.target.value)} style={{width:'90vw', maxWidth: '700px'}} />
            <datalist id="searches">
              <option value="BAJAJ" />
              <option value="HDFC" />
              <option value="ICICI" />
              <option value="TCS" />
              <option value="INFY" />
            </datalist>
            <InputGroupAddon addonType="append">
              <Button color="secondary" onClick={e => this.onSubmitSearch() } >Search</Button>
            </InputGroupAddon>
          </InputGroup>
          <br />
          <br />
        </Container>
        <ResultView points={this.state.points} news={this.state.news} stock={this.state.search}/>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(Search);