import Image from 'next/image'
import { useEffect, useState } from "react";
 

const imageStyles = {
    position: 'relative',
    width: '100%',
    height: '110px',
};

export default function CountryCard({ country, onClick }) {
    const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const API_KEY = '42373212-afb7a6136c21eddaf8f4e3382';
    const countryName = country.name.replace(/\s+/g, '+'); // Reemplaza los espacios en blanco con '+' para el formato de URL
    const category = 'places, city'; 
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${( countryName)}&image_type=photo&category=${category}   `;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        if (data.totalHits > 0) {
            // Iterar sobre los resultados para encontrar la primera imagen que sea un lugar
            for (let i = 0; i < data.hits.length; i++) {
              const imageTags = data.hits[i].tags.toLowerCase();
              // Verificar si las etiquetas incluyen la palabra "place" o "city"
              if (imageTags.includes('places') || imageTags.includes('city') || imageTags.includes('capital')) {
                setImageUrl(data.hits[i].webformatURL);
                return; // Detener la iteración y salir del bucle cuando se encuentre la primera imagen de un lugar
              }
            }
            setImageUrl(data.hits[0].webformatURL);
            // Si no se encuentra imagen para no dejarla vacia poner una imagen por defecto igual referente al pais
            // Si no se encontró ninguna imagen de un lugar, mostrar un mensaje de error
            console.log(`No se encontraron imágenes de lugares para ${country.name}`);} else {
          console.log(`No se encontraron imágenes para ${country.name}`);
        }
      })
      .catch(error => console.error('Error fetching images:', error));
  }, [country]);


    return (
        <article className="country-item" onClick={onClick} key={country.code}>
            <div style={imageStyles}>
                <Image
                    src={imageUrl}
                    fill={true}
                    alt={'Country Image'}
                    className='border-radius-15'
                />
            </div>
            <div className="country-info">
                <img style={{ width: '37px' }} src={`https://flagicons.lipis.dev/flags/4x3/${country.code.toLowerCase()}.svg`} />
                <div>
                    <h4>{country.name}</h4>
                    <p>{country.continent.name}</p>
                </div>
            </div>
        </article>
    )
}