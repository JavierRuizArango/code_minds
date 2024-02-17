import { useEffect, useState } from "react"

const useGetCountry = () => {
    const [country, setCountries] = useState({
      code: '',
      name: '',
      language: '',
      continent: '',
    })
    const [code, setCode] = useState("")

    useEffect(() => {
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
                variables: {code: code}
            })
        })
        .then(res => res.json())
        .then(data => {
          if (data.data.country) {
            setCountries(data.data.country)
          }
        })
    }, [code])
    


    return {
        country,
        setCode
    }
}

export default useGetCountry