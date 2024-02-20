  'use client'
  import { useEffect, useState } from "react";
  import CountryCard from "./components/CountryCard";
  import useCountries from "@/Hooks/consultCountry";
  import FilterContinent from "./components/FilterContinent";
  import CardInfo from "./components/CardInfo";

  function HomePage() {
    const [inputValue, setInputValue] = useState("");
    const {countries, setCodeContinent} = useCountries(); 
    const [filterContinent, setFilterContinent] = useState(false);
    const [selecCountry, setSelectCountry] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [codeContinentController, setCodeContinentController] = useState('All');
    const countriesPerPage = 9;

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
  
    useEffect(() => {
      setCodeContinent(codeContinentController)
    }, [codeContinentController])
    
    const paginateNext = () => {
      if (indexOfLastCountry < countries.length) {
        setCurrentPage(currentPage + 1);
      }
    };
   
    const paginatePrev = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    return (
      <>
        <div>
          <div className="search-container">

            <input className="search-input" type="text" placeholder="Encuentra tu pais" onChange={(e) => setInputValue(e.target.value)}></input>

            <button className="button-continent" onClick={() => setFilterContinent(!filterContinent)}>Filtrar Continente</button>

          </div>
          {filterContinent ? <FilterContinent setCodeContinentController={setCodeContinentController}/> : null}
          {console.log('countries since home', countries)}
          <section className="countries-grid">
            
            {inputValue.length > 0 ? (
              countries.map((country) => {
                if (country.name.toLowerCase().startsWith(inputValue.toLowerCase())) {
                  return <CountryCard
                   onClick={() => setSelectCountry(country)} 
                   country={country} 
                   key={country.code}/>
                }else {
                  return null
                }
              })
            ): (
              currentCountries.map((country) => {
                if (country.name.toLowerCase().startsWith(inputValue.toLowerCase())) {
                  return <CountryCard
                   onClick={() => setSelectCountry(country)} 
                   country={country} 
                   key={country.code}/>
                }else {
                  return null
                }
              })
            )}
          </section>
          {selecCountry ? <CardInfo country={selecCountry} close={() => setSelectCountry(false)} /> : null}
            
          <div className="buttons-navegation">
            <button onClick={paginatePrev} disabled={currentPage === 1}>⬅️</button>
            <button onClick={paginateNext} disabled={indexOfLastCountry >= countries.length}>➡️</button>
          </div>

        </div>
        
      </>
    )
  }

  export default HomePage;