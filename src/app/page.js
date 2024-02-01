import { loadData } from "@/lib/client";
import CountryCard from "./CountryCard";

async function HomePage() {
  const countries = await loadData()
  return (
    <>
      <div>
        <div>
          <input className="search-input" type="text" placeholder="Encuentra tu pais"></input>
        </div>

        <section className="countries-grid">
          {countries.map(country => (
            <CountryCard country={country} key={country.code} />
          ))}
        </section>
      </div>
    </>
  )
}

export default HomePage;