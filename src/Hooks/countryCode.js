const { useState, useEffect } = require("react");

function useCountryCode() {
  const [country, setCountry] = useState({});
  const [code, setCode] = useState('');
  
  useEffect(() => {
    fetch(`http://localhost:3001/country/${code}`)
    .then(res => res.json())
    .then(data => setCountry(data))
    .catch(error => console.log(error))
  }, [code])

  console.log(country);

  return { country, setCode }
}

export default useCountryCode