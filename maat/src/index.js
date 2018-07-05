import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Country from './components/Country'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: '',
            countries: []
        }
    }

    componentDidMount() {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                this.setState({countries: response.data})
            })
    }

    handleFilterChange = (event) => {
        this.setState({filter: event.target.value})
    }

    render() {
        return(
            <div>
                find countries: 
                <input 
                    value={this.state.filter}
                    onChange={this.handleFilterChange}
                />
                <Country app={this} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
