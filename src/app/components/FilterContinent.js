import useCountries from '@/Hooks/consultCountry'
import React from 'react'


const FilterContinent = ({setCodeContinentController}) => {

  return (
    <div className='filterContinent'>
      <h1>Filtrar:</h1>
      <button onClick={() => setCodeContinentController('All')}>All</button>
      <button onClick={() => setCodeContinentController('EU')}>Europe</button>
      <button onClick={() => setCodeContinentController('SA')}>South America</button>
      <button onClick={() => setCodeContinentController('NA')}>Nort America</button>
      <button onClick={() => setCodeContinentController('AS')}>Asia</button>
      <button onClick={() => setCodeContinentController('OC')}>Oceania</button>
      <button onClick={() => setCodeContinentController('AF')}>Africa</button>
    </div>
  )
}

export default FilterContinent
