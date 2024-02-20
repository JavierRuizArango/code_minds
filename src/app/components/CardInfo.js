import React from 'react'
import { useEffect, useState } from "react";
 
const imageStyles2 = {
   
  width: '100%',
  
};

const CardInfo = ( {country, close} ) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const API_KEY = '42373212-afb7a6136c21eddaf8f4e3382';
    const countryName = country.name; 
    const category = 'places, city'; 
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${countryName}&image_type=photo&category=${category}`;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        if (parseInt(data.totalHits) > 0) {
            
            for (let i = 0; i < data.hits.length; i++) {
              const imageTags = data.hits[i].tags.toLowerCase();
              
              if (imageTags.includes('places') || imageTags.includes('city') || imageTags.includes('capital')) {
                setImageUrl(data.hits[i].webformatURL);
                return; 
              }
            }
            setImageUrl(data.hits[0].webformatURL);
            
            console.log(`No se encontraron imágenes de lugares para ${country.name}`);} else {
          console.log(`No se encontraron imágenes para ${country.name}`);
        }
      })
      .catch(error => console.error('Error fetching images:', error));
  }, [country]);

  return (
    <div className="card-info" >
            <div style={imageStyles2}>
            <img
                    src={imageUrl}
                    fill={true}
                    alt={'Country Image'}
                    className='image-card '
                     
                />
            </div>
            
            <div className="country-info">
                <img style={{ width: '37px' }} src={`https://flagicons.lipis.dev/flags/4x3/${country.code.toLowerCase()}.svg`} />
                <div>
                    <h4>{country.name}</h4>
                    <p>{country.continent.name}</p>
                </div>
            </div>
              <div>
                <p><strong>Capital:</strong>   {country.capital}</p>
                <p><strong>Languague:</strong>   {country?.languages?.[0]?.name}</p>
                <p><strong>Currency:</strong>   {country.currency}</p>
                <p><strong>Region:</strong>   {country.region}</p>

              </div>
            <div>
            { <button onClick={close}>Cerrar</button>}
            </div>
        </div>
  )
}

export default CardInfo
