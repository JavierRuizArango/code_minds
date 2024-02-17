import { useState, useEffect } from "react";

function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/countries')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.error("Error fetching countries:", error));
  }, []);

  return countries;
}

export default useCountries;
