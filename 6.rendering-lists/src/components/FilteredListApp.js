import React from 'react'
import { people } from '../data/people-extended';

const FilteredListApp = () => {

    const chemists = people.filter((person) => person.profession === 'chemist')
    console.log(chemists)

    const chemistsList = chemists.map((chemist, index) => {
        return <li key={chemist.id}>
            <p>{chemist.name} - {chemist.profession}</p>
        </li>
    })

    return (
        <div>
            <ul>
                {chemistsList}
            </ul>
        </div>
    )
}

export default FilteredListApp