"use client"

import { useState } from 'react'
import useCountries from '@/Hooks/consultCountry';
import useCountryCode from '@/Hooks/countryCode'
import useCountryDelete from '@/Hooks/useCountryDelete';

export default function Manage() {

  const {country, handleConsult} = useCountryCode()
  const [inputValue, setInputValue] = useState("")
  const { handleDelete } = useCountryDelete()

  const [form, setForm] = useState({
    code: '',
    name: '',
    language: '',
    continent: '',
    capital: '',
    currency: '',
  });

  const handleReset = () => {
    setForm({
      code: '',
      name: '',
      language: '',
      continent: '',
      capital: '',
      currency: '',
    });
  };

  console.log(country);

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
  return (
    <>
      <div className="page-container">
        <div className="row">
          <h2>Gestionar País</h2>
        </div>

        <div className="row flex-center">
          <form>
            
            <label htmlFor="cod-search"> Código País </label>
            <input type="text" className="custom-input" maxLength={2} name="cod-search" onChange={(e) => setInputValue(e.target.value)}/>

            <input value="Consultar" className="btn" onClick={() => handleConsult(inputValue.toUpperCase())}/>
          </form>
        </div>

        <div className="row">
          <form onSubmit={handleSubmit} className="form-container">

            <div className="form-column">
              <label htmlFor="code"> Código </label>
              <input type="text" className="custom-input" name="code" defaultValue={country?.code} onChange={handleChange} />
            </div>

            <div className="form-column">
              <label htmlFor="name"> Nombre </label>
              <input type="text" className="custom-input" name="name" defaultValue={country?.name} onChange={handleChange} />
            </div>

            <div className="form-column">
              <label htmlFor="language"> Lengua </label>
              <input type="text" className="custom-input" name="language" defaultValue={country?.languages?.[0]?.name} onChange={handleChange} />
            </div>

            <div className="form-column">
              <label htmlFor="continent"> Contiente </label>
              <input type="text" className="custom-input" name="continent" defaultValue={country?.continent?.name} onChange={handleChange} />
            </div>

            <div className="form-column">
              <label htmlFor="capital"> Capital </label>
              <input type="text" className="custom-input" name="capital" defaultValue={country?.capital} onChange={handleChange} />
            </div>

            <div className="form-column">
              <label htmlFor="currency"> Moneda </label>
              <input type="text" className="custom-input" name="currency" defaultValue={country?.currency} onChange={handleChange} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="button" onClick={() => handleDelete(inputValue.toUpperCase())} className="btn btn-clean">Eliminar</button>
            </div>

            <div>
              <input type="submit" value="Actualizar" className="btn btn-create" />
            </div>

          </form>
          
        </div>
      </div>
    </>
  )
}