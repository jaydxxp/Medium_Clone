import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Read } from './pages/Read'
import { Create } from './pages/Create'
import { ProtectedRoute } from './components/Protected'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />
       <Route
          path="/create"
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        />
       <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <Read />
            </ProtectedRoute>
          }
        />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
