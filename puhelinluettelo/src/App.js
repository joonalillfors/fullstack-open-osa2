import React from 'react';
import Numbers from './components/numbers'
import Filter from './components/filter'
import Add from './components/add'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNum: '',
      filter: ''
    }
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