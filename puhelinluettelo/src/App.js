import React from 'react';
import Numbers from './components/numbers'
import Filter from './components/filter'
import Add from './components/add'
import personServices from './services/persons'
import Notification from './components/notification'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNum: '',
      filter: '',
      message: null
    }
  }

  componentWillMount() {
    personServices
      .getAll()
      .then(response => {
        this.setState({persons: response.data})
      })
  }

  timeout() {
    setTimeout(() => {
      this.setState({message: null})
    }, 3000)
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.message} />
        <Filter app={this} />
        <Add app={this} />
        <Numbers app={this} />
      </div>
    )
  }
}

export default App