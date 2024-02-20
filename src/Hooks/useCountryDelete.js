import Swal from "sweetalert2";

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
        icon: "success",
        title: "País eliminado correctamente"
      });
      console.log("Respuesta de la API:", data);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
  }
   
   

  return { handleDelete };
}

export default useCountryDelete