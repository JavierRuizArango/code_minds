import { useState, useEffect } from "react";

function useCountries() {
  const [countries, setCountries] = useState([]);
  const [codeContinent, setCodeContinent] = useState('All');

  useEffect(() => {
    if (codeContinent === 'All') {
      
    fetch('http://localhost:3001/countries')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.error("Error fetching countries:", error));

    }else {
      fetch(`http://localhost:3001/continent/${codeContinent}`)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(erros => console.error("Error fetching countries for continents"))

    }
  }, [codeContinent]);

  console.log(codeContinent);
  console.log(countries);

  return  { countries, setCodeContinent };
}

export default useCountries;
