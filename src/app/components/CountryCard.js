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
    const countryName = country.name;
    const category = 'places, city'; 
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${countryName}&image_type=photo&category=${category}`;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        if (data.totalHits > 0) {
            for (let i = 0; i < data.hits.length; i++) {
              const imageTags = data.hits[i].tags.toLowerCase();
              if (imageTags.includes('places') || imageTags.includes('city') || imageTags.includes('capital')) {
                setImageUrl(data.hits[i].webformatURL);
                return; 
              }
            }
            setImageUrl(data.hits[0].webformatURL);
            
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