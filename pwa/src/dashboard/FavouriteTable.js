import React from 'react';
import {
  Table
} from 'reactstrap';

const scrollingStyle = {
  maxHeight: '400px',
  overflowY: 'auto'
}


class FavouriteTable extends React.Component {
  constructor(props) {
    super(props);
  }

  tableIsEmpty() {
    const stocks = this.props.stocks;
    return (stocks === undefined || stocks.length == 0)
  }

  getTableRows() {
    const stocks = this.props.stocks;
    
    if (this.tableIsEmpty())
      return;
    
    console.log(stocks);
    return stocks.map((stock, key) => 
      <tr key={key}>
        <td>{stock.name}</td>
        <td>{stock.price}</td>
        <td>{stock.change}</td>
        <td>{stock.wap}</td>
      </tr>
    )
  }

  render() {
    return (
    <div style={scrollingStyle}>
      <h4>Your Favourites</h4>
      <Table size={ window.innerWidth < 500 ? 'sm': ''}  >
        <thead>
          <tr>
            <th>Name</th>
            <th>Current</th>
            <th>% change</th>
            <th>WAP</th>
          </tr>
        </thead>
        <tbody>
          { this.getTableRows() }
        </tbody>
      </Table>
      {this.tableIsEmpty() ? <h2 className='text-grey text-center my-3'>No Favourites</h2> : ''}
    </div>
    )
  }
}

export default FavouriteTable;