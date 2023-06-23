import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sampleProducts } from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </header>
      <main>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <main>
          <ul>
            {sampleProducts.map((product) => (
              <li key={product.slug}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </li>
            ))}
          </ul>
        </main>
      </main>
      <footer>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </>
  )
}

export default App
