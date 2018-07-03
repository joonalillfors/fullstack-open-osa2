import React from 'react'

const Add = ({app}) => {
    const addPerson = (event) => {
        event.preventDefault()
        if (!app.state.persons.map(p => p.name).includes(app.state.newName)) {
          const person = {
              name: app.state.newName,
              number: app.state.newNum
          }
          const persons = app.state.persons.concat(person)
          app.setState({
              persons,
              newName: '',
              newNum: ''
          })
        }
        else {
            alert("Henkilö on jo luettelossa.")
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