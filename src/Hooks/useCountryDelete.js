 function useCountryDelete() { 

  const handleDelete = (code) => {
    fetch(`http://localhost:3001/country/${code}`, {
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
      alert("Country deleted successfully");
      console.log("Respuesta de la API:", data);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
  }
   
   

  return { handleDelete };
}

export default useCountryDelete