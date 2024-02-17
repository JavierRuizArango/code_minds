import { useEffect, useState } from "react";

function useCountryDelete() {
  const [codeCountry, setCodeCountry] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3001/country/${codeCountry}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: ${response.status}");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Respuesta de la API:", data);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
  }, [codeCountry]);
  

  return { setCodeCountry };
}

export default useCountryDelete