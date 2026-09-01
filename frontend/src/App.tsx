import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  type Manuscript = {
    id: string;
    title: string;
    author: string;
    year: number;
    manifest: number
  }

  const [loading, setLoading] = useState(false)

  const [query, setQuery] = useState("")

  const [resuls, setResults] = useState<Manuscript[]>([])


  async function handleSearch() {
    setLoading(true);
    const response = await fetch("api/manuscripts");

    const data: Manuscript[] = await response.json();

    setResults(data);
    setLoading(false);
  }

   return (
     <main>
        <h1>Manuscript Search</h1>

        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={() => setQuery(event.target.value)}
          />
        <button onClick={handleSearch}>
          Search
        </button>
        <button onClick={() => setQuery("")}>
          Clear
        </button>

        <p>
          You are searching for: <strong>{query}</strong>
        </p>

        <h2>Results:</h2>


        {loading && <p>Loading...</p>}

        <ul>
          {resuls.map((manuscript) => (
            <li key={manuscript.id}>
              <strong>{manuscript.title}</strong>

              <br />
              {manuscript.author} · {manuscript.year} · {manuscript.manifest}
            </li>
          ))}
        </ul>
    </main>
    );
}

export default App
