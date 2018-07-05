import React from 'react';
import Numbers from './components/numbers'
import Filter from './components/filter'
import Add from './components/add'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNum: '',
      filter: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({persons: response.data})
      })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter app={this} />
        <Add app={this} />
        <Numbers state={this.state} />
      </div>
    )
  }
}

export default App