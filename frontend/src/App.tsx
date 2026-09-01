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
    manifest: string;
  }

  const [query, setQuery] = useState("")

  const [resuls] = useState<Manuscript[]>([
    {
      id: "1",
      title: "Faust",
      author: "Goethe",
      year: 1880,
      manifest: "/manifest/faust"
    },
    {
      id: "2",
      title: "Die Räuber",
      author: "Schiller",
      year: 1781,
      manifest: "/manifest/die-raueber"
    },
  ])


  function handleSearch() {
    console.log("Search", query)
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
