import React from 'react'

const Filter = ({app}) => {
    const handleFilterChange = (event) => {
        app.setState({filter: event.target.value})
    }

    return(
        <div>
            rajaa näytettäviä 
            <input 
                value={app.state.filter}
                onChange={handleFilterChange}
            />
        </div>
    )
}

export default Filter