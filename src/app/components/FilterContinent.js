import useCountries from '@/Hooks/consultCountry'
import React from 'react'


const FilterContinent = () => {
  const {setCodeContinent} = useCountries() 

  return (
    <div className='filterContinent'>
      <h1>filterContinent</h1>
      <button onClick={() => setCodeContinent('EU')}>Europe</button>
      <button onClick={() => setCodeContinent('SA')} >South America</button>
      <button onClick={() => setCodeContinent('NA')}>Nort America</button>
      <button onClick={() => setCodeContinent('AS')}>Asia</button>
      <button onClick={() => setCodeContinent('OC')}>Oceania</button>
      <button onClick={() => setCodeContinent('AF')}>Afria</button>
    </div>
  )
}

export default FilterContinent
