import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newPerson) => {
    return axios.post(baseUrl, newPerson)
}

const del = (person) => {
    return axios.delete(`${baseUrl}/${person.id}`)
}

const update = (person) => {
    return axios.put(`${baseUrl}/${person.id}`, person)
}

export default { getAll, create, del, update }