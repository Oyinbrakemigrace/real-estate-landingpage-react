import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Spinner } from 'reactstrap'


const Landing = React.lazy(()=>import("./Page/Landing"))

function App() {
  return (
    <React.Suspense fallback={<div className='position-absolute top-50 start-50 transform-translate text-info'>
      <Spinner type='grow'/>
    </div>}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </React.Suspense>
  )
}

export default App