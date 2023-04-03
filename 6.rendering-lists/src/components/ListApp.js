import React from 'react'
import { people } from '../data/people'

// the data we want to render in a list ()
// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist',
//     'Daniel Tunde Ojediran: software engineer'
// ];

// Parent component
const ListApp = () => {
    const peopleItems = people.map((person, index) => {
        return <li key={index}>{person}</li>
    })

    return (
        <div>
            {people.length ?
                <ul>{peopleItems}</ul>
                : <p>No data found.</p>}
        </div>
    )
}

export default ListApp;