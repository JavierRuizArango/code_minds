'use client'
import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import useCountries from "@/Hooks/consultCountry";
import FilterContinent from "./components/FilterContinent";

function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const {countries} = useCountries(); 
  const [filterContinent, setFilterContinent] = useState(false);

  return (
    <>
      <div>
        <div>
          <input className="search-input" type="text" placeholder="Encuentra tu pais" onChange={(e) => setInputValue(e.target.value)}></input>
          <button onClick={() => setFilterContinent(!filterContinent)}>Filtrar por continente</button>
        </div>
        {filterContinent ? <FilterContinent/> : null}
        
        <section className="countries-grid">
          
          {countries.map((country) => {
            if (country.name.toLowerCase().startsWith(inputValue.toLowerCase())) {
              return <CountryCard country={country} key={country.code}/>
            }else {
              return null
            }
          })}
        </section>
      </div>
    </>
  )
}

export default HomePage;