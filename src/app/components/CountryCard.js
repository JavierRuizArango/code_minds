import Image from 'next/image'

const imageStyles = {
    position: 'relative',
    width: '100%',
    height: '121px',
};

export default function CountryCard({ country }) {
    return (
        <article className="country-item" key={country.code}>
            <div style={imageStyles}>
                <Image
                    src={'/templateImage.webp'}
                    fill={true}
                    alt={'Country Image'}
                    className='border-radius-15'
                />
            </div>
            <div className="country-info">
                <img style={{ width: '40px' }} src={`https://flagicons.lipis.dev/flags/4x3/${country.code.toLowerCase()}.svg`} />
                <div>
                    <h4>{country.name}</h4>
                    <p>{country.capital}</p>
                </div>
            </div>
        </article>
    )
}