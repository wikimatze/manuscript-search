import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [query, setQuery] = useState("")


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

        <p>
          You are searching for: <strong>{query}</strong>
        </p>
    </main>
    );
}

export default App
