import React from 'react'

const Country = ({app}) => {
    const countries = app.state.countries.filter(c => c.name.toLowerCase().includes(app.state.filter.toLowerCase()))
    if (countries.length === 1) {
        const country = countries[0]
        return(
            <div>
                <h2>{country.name} {country.nativeName}</h2>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
                <img src={country.flag} width="30%" height="30%" alt=""/>
            </div>
        )
    } else if (countries.length < 10) {
        return(
            <div>
                {countries.map(country => <div onClick={()=>app.setState({filter: country.name})} key={country.name}>{country.name}</div>)}
            </div>
        )
    }
    else {
        return(
            <div>
                too many matches, specify another filter
            </div>
        )
    }
}

export default Country