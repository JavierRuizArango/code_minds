"use client"

import { useEffect, useState } from 'react'

import useGetCountry from '@/Hooks/useGetCountry';

export default function Create() {
  const [form, setForm] = useState({
    code: '',
    name: '',
    language: '',
    continent: '',
  });

  const handleReset = () => {
    setForm({
      code: '',
      name: '',
      language: '',
      continent: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(form);
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const { country, setCode } = useGetCountry()
  const [inputValue, setInputValue] = useState("")
  const handleClick = () => {
    setCode(inputValue.toUpperCase())
  }
  console.log(country);
  const handleClickCreate = () => {
    fetch('http://localhost:3001', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(country)
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
            <input value="Consultar" className="btn" onClick={handleClick} />
          </form>
        </div>
        {country !== null ? <div className="row">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-column">
              <label htmlFor="code"> Código </label>
              <input type="text" className="custom-input" name="code" value={form.code} onChange={handleChange} />
            </div>
            <div className="form-column">
              <label htmlFor="name"> Nombre </label>
              <input type="text" className="custom-input" name="name" value={country.name} onChange={handleChange} disabled />
            </div>
            <div className="form-column">
              <label htmlFor="language"> Lengua </label>
              <input type="text" className="custom-input" name="language" value={""} onChange={handleChange} />
            </div>
            <div className="form-column">
              <label htmlFor="continent"> Continente </label>
              <input type="text" className="custom-input" name="continent" value={""} onChange={handleChange} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="button" onClick={handleReset} className="btn btn-clean">Limpiar</button>
            </div>
            <div>
              <input type="submit" value="Crear" className="btn btn-create" onClick={handleClickCreate} />
            </div>
          </form>
        </div> : null}
      </div>
    </>
  )
}