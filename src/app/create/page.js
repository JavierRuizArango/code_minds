"use client"

import { useState } from 'react'
import styles from './create.module.css';

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
    return (
        <>
            <div className="page-container">
                <div className="row">
                    <h2>Crear País</h2>
                </div>
                <div className="row flex-center">
                    <form>
                        <label htmlFor="cod-search"> Código País </label>
                        <input type="text" className="custom-input" name="cod-search" />
                        <input type="submit" value="Consultar" className="btn" />
                    </form>
                </div>
                <div className="row">
                    <form onSubmit={handleSubmit} className="form-container">
                        <div className="form-column">
                            <label htmlFor="code"> Código </label>
                            <input type="text" className="custom-input" name="code" value={form.code} onChange={handleChange} />
                        </div>
                        <div className="form-column">
                            <label htmlFor="name"> Nombre </label>
                            <input type="text" className="custom-input" name="name" value={form.name} onChange={handleChange} />
                        </div>
                        <div className="form-column">
                            <label htmlFor="language"> Lengua </label>
                            <input type="text" className="custom-input" name="language" value={form.language} onChange={handleChange} />
                        </div>
                        <div className="form-column">
                            <label htmlFor="continent"> Continente </label>
                            <input type="text" className="custom-input" name="continent" value={form.continent} onChange={handleChange} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="button" onClick={handleReset} className="btn btn-clean">Limpiar</button>
                        </div>
                        <div>
                            <input type="submit" value="Crear" className="btn btn-create" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}