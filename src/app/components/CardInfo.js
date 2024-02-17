import React from 'react'

const imageStyles = {
  position: 'relative',
  width: '50%',
  height: '180px',
};

const CardInfo = () => {
  return (
    <article className="card-info" key={country.code}>
            <div style={imageStyles}>
                <img
                    src={'/templateImage.webp'}
                    fill={true}
                    alt={'Country Image'}
                    className='info-country'
                />
            </div>
            <div className="country-info">
                <img style={{ width: '37px' }} src={`https://flagicons.lipis.dev/flags/4x3/${country.code.toLowerCase()}.svg`} />
                <div>
                    <h4>{country.name}</h4>
                    <p>{country.capital}</p>
                </div>
            </div>
        </article>
  )
}

export default CardInfo
