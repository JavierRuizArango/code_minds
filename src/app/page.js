import React from 'react';
import loadData from './getCountries';
import Image from 'next/image'

async function HomePage() {
  try {
    const data = await loadData();

    console.log(data);

    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.countries.map(country => (
          <div
            key={country.code}
            className="country-container bg-white shadow-md rounded-md overflow-hidden"
          >
            <Image
              src={country.flag}
              alt={`${country.name} Flag`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{country.name}</h2>
              <p>Native: {country.native}</p>
              <p>Capital: {country.capital}</p>
              <p>Currency: {country.currency}</p>
              <div>
                Languages:
                <ul>
                  {country.languages.map(language => (
                    <li key={language.code}>{language.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error loading country data:', error);
    return <div>Error loading country data</div>;
  }
}

export default HomePage;
