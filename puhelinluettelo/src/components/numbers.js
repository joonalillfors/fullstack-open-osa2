import React from 'react'

const Numbers = ({state}) => {
    return(
    <div>
        <h2>Numerot</h2>
        <table>
            <tbody>
                {state.persons.filter(person => person.name.toLowerCase().includes(state.filter)).map(person => 
                    <tr key={person.name}>
                        <td>{person.name}</td>
                        <td>{person.number}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    )
}

export default Numbers