import React from 'react'
import personServices from '../services/persons'

const Add = ({app}) => {
    const addPerson = (event) => {
        event.preventDefault()
        if (!app.state.persons.map(p => p.name).includes(app.state.newName)) {
          const person = {
              name: app.state.newName,
              number: app.state.newNum,
              id: Math.max(...app.state.persons.map(p => p.id)) + 1
          }
          personServices
            .create(person)
            .then(response => {
                app.setState({
                    persons: app.state.persons.concat(person),
                    newName: '',
                    newNum: '',
                    message: `lisättiin ${person.name}`
                })
                app.timeout()
            })
        }
        else {
            if (window.confirm(`${app.state.newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
                const person = {
                    name: app.state.newName,
                    number: app.state.newNum,
                    id: app.state.persons.find(p => p.name === app.state.newName).id
                }
                personServices
                    .update(person)
                    .then(response => {
                        app.setState({
                            persons: app.state.persons.filter(p=>p.name !== person.name).concat(person),
                            newName: '',
                            newNum: '',
                            message: `muutettiin henkilön ${person.name} tietoja`
                        })
                        app.timeout()
                    })
                    .catch(error => {
                        personServices
                            .create(person)
                            .then(response => {
                                app.setState({
                                    persons: app.state.persons.filter(p => p.name !== person.name).concat(person),
                                    newName: '',
                                    newNum: '',
                                    message: `muutettiin henkilön ${person.name} tietoja`
                                })
                                app.timeout()
                            })
                    })
            }
        }
    }
  
    const handleNameChange = (event) => {
        app.setState({newName: event.target.value})
    }
  
    const handleNumChange = (event) => {
        app.setState({newNum: event.target.value})
    }

    return(
        <div>
            <h2>Lisää uusi</h2>
            <form onSubmit={addPerson}>
            <div>
                nimi: 
                <input
                    value={app.state.newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                numero: 
                <input 
                    value={app.state.newNum}
                    onChange={handleNumChange}
                />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
            </form>
        </div>
    )
}

export default Add