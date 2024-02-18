import Image from 'next/image'

// var API_KEY = '42373212-afb7a6136c21eddaf8f4e3382';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });


const imageStyles = {
    position: 'relative',
    width: '100%',
    height: '110px',
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
                <img style={{ width: '37px' }} src={`https://flagicons.lipis.dev/flags/4x3/${country.code.toLowerCase()}.svg`} />
                <div>
                    <h4>{country.name}</h4>
                    <p>{country.continent.name}</p>
                </div>
            </div>
        </article>
    )
}