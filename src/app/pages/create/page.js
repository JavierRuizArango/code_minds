"use client"

import { useEffect, useState } from 'react'

import useGetCountry from '@/Hooks/useGetCountry';
import Swal from 'sweetalert2';

export default function Create() {
  const [form, setForm] = useState({
    code: '',
    name: '',
    language: '',
    continent: '',
  });

  const handleReset = () => {
    setForm( {
      code: '',
      name: '',
      language: '',
      continent: '',
    });
    console.log("form",form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(form);
  };

   

  const { country, handleConsult } = useGetCountry()
  const [inputValue, setInputValue] = useState("")

  console.log('---- country ----', country);

  const handleClickCreate = async () => {
    try {
      const response = await fetch(`http://localhost:3001/country/${inputValue.toUpperCase()}`)
      if (response.ok) {
        
        
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
          title: "country ya existe"
        });
      }else{
        fetch('http://localhost:3001', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(country)
    
        })
          .then((response) => {
            if (!response.ok) {
              
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
          title: "country not created"
        });
            }
            return response.json();
          })
          .then((data) => {
            console.log("Respuesta de la API:", data);
            
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
          title: "country created"
        });
          })
          .catch((error) => {
            console.error("Error en la solicitud:", error);
          });
      }
    }
    catch (error) {
      console.error(error);
    }
    

  }


  return (
    <>
      <div className="page-container">
        
        <div className="row">
          <h2>Crear País</h2>
        </div>

        <div className="row flex-center">
          <form>
            <label htmlFor="cod-search"> Código País </label>
            <input type="text" className="custom-input" name="cod-search" maxLength={2} onChange={(e) => setInputValue(e.target.value)} />

            <input  value="Consultar" className="btn" onClick={() => handleConsult(inputValue.toUpperCase())} />
          </form>

        </div>
        
        <div className="row">
          <form onSubmit={handleSubmit} className="form-container">

            <div className="form-column">
              <label htmlFor="code"> Código </label>
              <input type="text" className="custom-input" name="code" value={country.code} readOnly={true} />
            </div>

            <div className="form-column">
              <label htmlFor="name"> Nombre </label>
              <input type="text" className="custom-input" name="name" value={country.name} readOnly={true} />
            </div>

            <div className="form-column">
              <label htmlFor="language"> Lengua </label>
              <input type="text" className="custom-input" name="language" value={country?.languages?.[0]?.name} readOnly={true}/>
              
            </div>
          
            <div className="form-column">
              <label htmlFor="continent"> Continente </label>
              <input type="text" className="custom-input" name="continent" value={country.continent ? country.continent.name : ""} readOnly={true} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="button" onClick={handleReset} className="btn btn-clean">Limpiar</button>
            </div>

            <div>
              <input type="submit" value="Crear" className="btn btn-create" onClick={handleClickCreate} />
            </div>

          </form>

        </div>

      </div>
    </>
  )
}