'use client'
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function HomePage() {
  const [countries, setCountries] = useState([])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  console.log(countries);

  return (
    <>
      <div>
        <div>
          <input className="search-input" type="text" placeholder="Encuentra tu pais" onChange={(e) => setInputValue(e.target.value)}></input>
        </div>
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