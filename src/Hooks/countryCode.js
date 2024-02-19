const { useState, useEffect } = require("react");

function useCountryCode() {
  const [country, setCountry] = useState({});
  
  const handleConsult = (code) => {
    fetch(`http://localhost:3001/country/${code}`)
    .then(res => {
      if (!res.ok) {
        alert("Country not found");
      }
      return res.json()
    })
    .then(data => setCountry(data))
    .catch(error => console.log(error))
  }

    

  console.log(country);

  return { country, handleConsult };
}

export default useCountryCode