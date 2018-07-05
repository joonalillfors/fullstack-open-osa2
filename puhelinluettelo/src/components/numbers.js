import React from 'react'
import del from '../services/persons'

const Numbers = ({app}) => {
    const poista = (person) => {
        return () => {
            if (window.confirm(`Poistetaanko ${person.name}?`)) {
                del.del(person).then(response => {
                    app.setState({
                        persons: app.state.persons.filter(p => p !== person),
                        message: `poistettiin ${person.name}`
                    })
                    app.timeout()
                })
            }
        }
    }
    return(
    <div>
        <h2>Numerot</h2>
        <table>
            <tbody>
                {app.state.persons.filter(person => person.name.toLowerCase().includes(app.state.filter.toLowerCase())).map(person => 
                    <tr key={person.name}>
                        <td>{person.name}</td>
                        <td>{person.number}</td>
                        <td><button onClick={poista(person)}>poista</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    )
}

export default Numbers