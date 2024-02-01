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
            <div className={styles.container}>
                <div className={styles.row}>
                    <h2>Crear País</h2>
                </div>
                <div className={styles.row}>
                    <form>
                        <label htmlFor="cod-search"> Código País </label>
                        <input type="text" name="cod-search" />
                        <input type="submit" value="Consultar" />
                    </form>
                </div>
                <div className={styles.row}>
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