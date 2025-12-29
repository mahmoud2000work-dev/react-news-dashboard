import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/Home"

import './App.css'

export default function App() {

  return (
    <Router>
      <div className='min-h-screen bg-gray-50 text-gray-900'>

        <nav className='bg-white shadow-md px-6 py-4 flex justify-between items-center'>
          <Link
          to="/"
          className='text-xl font-bold text-blue-600 hover:text-blue-700 transition'
          >
            📰 News Dashboard
          </Link>
        </nav>

        <main className='p-6 max-w-6xl mx-auto'>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>

        </main>
      </div>
    </Router>

    
  )
}

