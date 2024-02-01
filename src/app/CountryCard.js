export default function CountryCard({ country }) {
    return (
        <article className="country-item" key={country.code}>
            <h1>
                <span>
                    <img src={`https://flagicons.lipis.dev/flags/4x3/${country.code.toLowerCase()}.svg`} />
                </span>
                {country.name}
            </h1>
            <p>
                {country.capital}
            </p>
        </article>
    )
}