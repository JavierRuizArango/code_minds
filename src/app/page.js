import { loadData } from "@/lib/client";


async function HomePage() {
  const countries = await loadData()
  return (
  <>
    <aside className="sidebar">
      <h2>Home</h2>
      <h2>Crear pais</h2>
      <h2>Gestionar pais</h2>
    </aside>
    <nav >
      <input className="search-input" type="text" placeholder="Encuentra tu pais"></input>
    </nav>
    
    
    
<section className="container">
  {countries.map(country => (
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
    ))}
  </section>
  </>
 
  ) 
  
}
export default HomePage;