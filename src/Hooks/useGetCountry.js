import { useEffect, useState } from "react"
import Swal from "sweetalert2"


const useGetCountry = () => {
  const [country, setCountries] = useState({
    code: '',
    name: '',
    language: '',
    continent: '',
  })

  const handleConsult = (code) => {
    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
                query Country($code: ID!) {
                    country(code: $code) {
                      code
                      name
                      capital
                      currency
                      languages {
                        name
                      }
                      continent{
                        code
                        name
                      }
                    }
                  }
                `,
        variables: { code: code }
      })
    })
    .then(res => res.json())
        .then(data => {
          if (data.data.country) {
            setCountries(data.data.country)
          } else {
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
              title: "country not found"
            });
          }
        })

  }


  return {
    country,
    handleConsult
  }

}

export default useGetCountry