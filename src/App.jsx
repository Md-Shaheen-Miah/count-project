import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';



export const App = () => {
  return (
    function App() {
      return (
        <BrowserRouter basename="/app">
          <Routes>
            <Route path="/" /> {/* 👈 Renders at /app/ */}
          </Routes>
        </BrowserRouter>
      );
    }
  )
}
