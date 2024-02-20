import Swal from "sweetalert2";

const { useState, useEffect } = require("react");

function useCountryCode() {
  const [country, setCountry] = useState({});
  
  const handleConsult = (code) => {
    fetch(`http://localhost:3001/country/${code}`)
    .then(res => {
      if (!res.ok) {
        
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: "País no encontrado"
        });
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