"use client"

import { useState } from 'react'

export default function Manage() {
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
            <div>
                <div>
                    <h2>Gestionar País</h2>
                </div>
                <div>
                    <form>
                        <label htmlFor="cod-search"> Código País </label>
                        <input type="text" name="cod-search" />
                        <input type="submit" value="Consultar" />
                    </form>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="code"> Código </label>
                            <input type="text" name="code" value={form.code} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="name"> Nombre </label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="language"> Lengua </label>
                            <input type="text" name="language" value={form.language} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="continent"> Contiente </label>
                            <input type="text" name="continent" value={form.continent} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="capital"> Capital </label>
                            <input type="text" name="capital" value={form.capital} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="currency"> Moneda </label>
                            <input type="text" name="currency" value={form.currency} onChange={handleChange} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button type="button" onClick={handleReset}>Limpiar</button>
                            <input type="submit" value="Consultar" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}